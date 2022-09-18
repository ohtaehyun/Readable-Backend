import { ErrorCode } from "../../../../constants/errorCode";
import { BadRequestException } from "../../../../lib/exception/badRequestException";
import { regexUtil } from "../../../../lib/util/regex";

export default class loginReq {
    readonly email: string;
    readonly password: string;

    constructor(params: {email:string, password:string}) {
        this.email = params.email;
        this.password = params.password;
        this.validate();
    }

    private validate() {
        if(!regexUtil.isValidEmail(this.email))
            throw new BadRequestException(ErrorCode.INVALID_EMAIL, '잘못된 이메일 형식입니다.');
    }
}