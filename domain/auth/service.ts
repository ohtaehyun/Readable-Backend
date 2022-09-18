import { injectable } from "inversify";
import Users from "../user/model";
import SignUpReq from "./vo/request/signUpReq";
import crypto from "crypto";
import * as cryptoJs from "crypto-js";
import { IUser } from "../user/schema";
import { BadRequestException } from "../../lib/exception/badRequestException";
import { ErrorCode } from "../../constants/errorCode";
import EmailExistReq from "./vo/request/emailExistReq";
import loginReq from "./vo/request/loginReq";
import { LoginRes } from "./vo/response.ts/loginRes";
import { IPayload, signJwt } from "../../lib/jwt";


@injectable()
export class AuthService {
    constructor() {}

    public async signUp(signUpReqVo: SignUpReq) {
        const existUser = await Users.findByEmail(signUpReqVo.email);

        if(!!existUser) 
            throw new BadRequestException(ErrorCode.ALREADY_EXIST_EMAIL, '이미 존재하는 이메일입니다.');
            
        const user = {...signUpReqVo, salt: this.generateSalt()} as IUser;
        user.password = cryptoJs.PBKDF2(user.password, user.salt).toString();
        await Users.create(user);
    }

    public async isEmailExist(emailExistReq: EmailExistReq) {
        const user = await Users.findByEmail(emailExistReq.email);
        return user ? true : false;
    }

    private generateSalt() {
        return crypto.randomBytes(64).toString("hex");
    }

    public async login(loginReqVo: loginReq): Promise<LoginRes> {
        const user = await Users.findByEmail(loginReqVo.email);

        if(!user)
            throw new BadRequestException(ErrorCode.LOGIN_FAIL, '잘못된 로그인 정보입니다.');

        const digestedPassword = cryptoJs.PBKDF2(loginReqVo.password, user.salt).toString();

        if(user.password !== digestedPassword)
            throw new BadRequestException(ErrorCode.LOGIN_FAIL, '잘못된 로그인 정보입니다.');
        
        const payload: IPayload = {_id: user._id.toString()};
        const {accessToken, refreshToken} = this.mintToken(payload);
        return new LoginRes(accessToken, refreshToken);
    }

    private mintToken(payload: IPayload) {
        const accessToken = signJwt(payload);
        const refreshToken = signJwt(payload);
        return {accessToken, refreshToken};
    }
}