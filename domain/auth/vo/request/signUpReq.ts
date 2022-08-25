import { ErrorCode } from "../../../../constants/errorCode";
import { BadRequestException } from "../../../../lib/exception/badRequestException";
import { regexUtil } from "../../../../lib/util/regex";

export default class SignUpReq {
    readonly email: string;
    readonly password: string;
    readonly name: string;

    constructor(params: {email:string, password:string, name:string}) {
        this.email = params.email;
        this.password = params.password;
        this.name = params.name;
        this.validate();
    }

    private validate() {
        if(!regexUtil.isValidEmail(this.email))
            throw new BadRequestException(ErrorCode.INVALID_EMAIL, '잘못된 이메일 형식입니다.');
        
        if(!regexUtil.isValidPassword(this.password))
            throw new BadRequestException(ErrorCode.INVALID_PASSWORD, '잘못된 비밀번호 형식입니다.');
    }
}