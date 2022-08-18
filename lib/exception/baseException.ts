import { Response } from "express";
import { ErrorCode } from "../../constants/errorCode";
import { StatusCode } from "../../constants/statusCode";

export class BaseException {
    protected statusCode: StatusCode;
    protected errorCode: ErrorCode;
    protected message: string;
    protected data: any;

    constructor(statusCode: StatusCode = StatusCode.INTERNAL_SERVER_ERROR, errorCode: ErrorCode = ErrorCode.UNKNOWN, message: string = 'unknown error', data?: any) {
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
        this.data = data;
    }

    public sendRes(res: Response) {
        res.status(this.statusCode).send({errorCode:this.errorCode, message: this.message, data: this.data});
    }

}