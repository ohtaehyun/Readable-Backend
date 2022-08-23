import { injectable } from "inversify";
import Users from "../user/model";
import SignUpReq from "./vo/request/signUpReq";
import crypto from "crypto";
import * as cryptoJs from "crypto-js";
import { IUser } from "../user/schema";
import { BadRequestException } from "../../lib/exception/badRequestException";
import { ErrorCode } from "../../constants/errorCode";
import EmailExistReq from "./vo/request/emailExistReq";


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
}