import { ErrorCode } from "../../../../constants/errorCode";
import { BadRequestException } from "../../../../lib/exception/badRequestException";
import { regexUtil } from "../../../../lib/util/regex";

export default class EmailExistReq {
    private email: string;

    constructor(req: {email:string}) {
        this.email = req.email;
        this.validate();
    }

    private validate() {
        if(!regexUtil.isValidEmail(this.email))
            throw new BadRequestException(ErrorCode.INVALID_EMAIL, '잘못된 이메일 형식입니다.');
    }

    public getAll() {
        return {
            email: this.email
        };
    }
}