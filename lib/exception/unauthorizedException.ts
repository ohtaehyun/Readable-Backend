import { ErrorCode } from "../../constants/errorCode";
import { StatusCode } from "../../constants/statusCode";
import { BaseException } from "./baseException";

export class UnauthorizedException extends BaseException {
    constructor(errorCode: ErrorCode = ErrorCode.UNKNOWN, message: string = 'Bad Request', data?: any) {
        super(StatusCode.UNAUTHORIZED, errorCode, message, data);
    }
}