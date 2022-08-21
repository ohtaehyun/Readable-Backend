import { ErrorCode } from "../../../../constants/errorCode";
import { BadRequestException } from "../../../../lib/exception/badRequestException";
import { regexUtil } from "../../../../lib/util/regex";

export default class EmailExistReq {
    readonly email: string;

    constructor(params: {email:string}) {
        this.email = params.email;
        this.validate();
    }

    public validate() {
        if(!regexUtil.isValidEmail(this.email))
            throw new BadRequestException(ErrorCode.INVALID_EMAIL, '잘못된 이메일 형식입니다.');
    }
}