import _ from "lodash";
import { ErrorCode } from "../../../../constants/errorCode";
import { InternalServerException } from "../../../../lib/exception/internalServerException";

export class LoginRes {
    readonly accessToken: string;
    readonly refreshToken: string;

    constructor(accessToken: string, refreshToken: string) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.validate();
    }

    validate() {
        if(_.isEmpty(this.accessToken) || _.isEmpty(this.refreshToken)) 
            throw new InternalServerException(ErrorCode.UNKNOWN, '응답 형식이 잘못되었습니다.');
    }
} 