import { injectable } from "inversify";
import Users from "../user/model";
import SignUpReq from "./vo/request/signUpReq";
import crypto from "crypto";
import * as cryptoJs from "crypto-js";
import { IUser } from "../user/schema";
import { BadRequestException } from "../../lib/exception/badRequestException";
import { ErrorCode } from "../../constants/errorCode";


@injectable()
export class AuthService {
    constructor() {}

    public async signUp(signUpReqVo: SignUpReq) {
        const user = signUpReqVo.getAll() as IUser;
        const existUser = await Users.findByEmail(user.email);
        if(!!existUser) 
            throw new BadRequestException(ErrorCode.ALREADY_EXIST_EMAIL, '이미 존재하는 이메일입니다.');
        user.salt =this.generateSalt();
        user.password = cryptoJs.PBKDF2(user.password,user.salt).toString();
        await Users.create(user);
    }

    private generateSalt() {
        return crypto.randomBytes(64).toString("hex");
    }
}