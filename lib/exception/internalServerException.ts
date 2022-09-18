import { ErrorCode } from "../../constants/errorCode";
import { StatusCode } from "../../constants/statusCode";
import { BaseException } from "./baseException";

export class InternalServerException extends BaseException {
    constructor(errorCode: ErrorCode = ErrorCode.UNKNOWN, message: string = 'Bad Request', data?: any) {
        super(StatusCode.INTERNAL_SERVER_ERROR, errorCode, message, data);
    }
}