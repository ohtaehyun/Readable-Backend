import { sign, verify, decode } from "jsonwebtoken";
import { ErrorCode } from "../../constants/errorCode";
import { UnauthorizedException } from "../exception/unauthorizedException";

const config = {
    JWT_SECRET: '',
    JWT_ISS: '',
    JWT_EXPIRE: '',
}

export function setJwtConfig() {
    config.JWT_SECRET = process.env.JWT_SECRET as string
    config.JWT_ISS = process.env.JWT_ISS as string
    config.JWT_EXPIRE = process.env.JWT_EXPIRE as string
}

export interface IPayload { 
    _id: string,  
}

export function signJwt(payload: any) {
    return sign(payload, config.JWT_SECRET, { 
        algorithm: 'HS256', 
        expiresIn: config.JWT_EXPIRE,
        issuer: config.JWT_ISS
    });
}

export function verifyJwt(token: string) {
    try {
        return verify(token, config.JWT_SECRET);
    } catch(err: any) {
        if(err.name === 'TokenExpiredError')
            throw new UnauthorizedException(ErrorCode.TOKEN_EXPIRED, 'Token Expired');
        throw err;
    }
}

export function decodeJwt(token: string) {
    return decode(token);
}