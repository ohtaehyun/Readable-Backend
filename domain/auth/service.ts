import { injectable } from "inversify";
import Users from "../user/model";
import SignUpReq from "./vo/request/signUpReq";
import crypto from "crypto";
import * as cryptoJs from "crypto-js";
import { IUser } from "../user/schema";


@injectable()
export class AuthService {
    constructor() {}

    public async signUp(signUpReqVo: SignUpReq) {
        const user = signUpReqVo.getAll() as IUser;
        user.salt =this.generateSalt();
        await Users.create(user);
    }

    private generateSalt() {
        return crypto.randomBytes(64).toString("hex");
    }
}