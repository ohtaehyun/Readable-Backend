import { ErrorCode } from "../../../../constants/errorCode";
import { BadRequestException } from "../../../../lib/exception/badRequestException";
import { regexUtil } from "../../../../lib/util/regex";

export default class SignUpReq {
    private email: string;
    private password: string;
    private name: string;

    constructor(req: {email:string, password:string, name:string}) {
        this.email = req.email;
        this.password = req.password;
        this.name = req.name;
        this.validate();
    }

    private validate() {
        if(!regexUtil.emailCheck(this.email))
            throw new BadRequestException(ErrorCode.INVALID_EMAIL);
        //여기서 입력값 검증 regex 관련 모듈 필요 

    }

    public getAll() {
        return {
            email: this.email,
            password: this.password,
            name: this.name
        };
    }
}