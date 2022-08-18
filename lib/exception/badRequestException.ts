import { ErrorCode } from "../../constants/errorCode";
import { StatusCode } from "../../constants/statusCode";
import { BaseException } from "./baseException";

export class BadRequestException extends BaseException {
    constructor(errorCode: ErrorCode = ErrorCode.UNKNOWN, message: string = 'Bad Request', data?: any) {
        super(StatusCode.BAD_REQUEST, errorCode, message, data);
    }
}