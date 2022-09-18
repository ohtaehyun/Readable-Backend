import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, next, request, response } from "inversify-express-utils";
import { ErrorCode } from "../../constants/errorCode";
import TYPES from "../../constants/types";
import { BadRequestException } from "../../lib/exception/badRequestException";
import { AuthService } from "./service";
import EmailExistReq from "./vo/request/emailExistReq";
import loginReq from "./vo/request/loginReq";
import SignUpReq from "./vo/request/signUpReq";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication and Authorization
 * 
 */
@controller('/auth')
export class AuthController {

    constructor(
        @inject(TYPES.AuthService) private authService: AuthService
    ){}
    
    /**
     * @swagger
     *
     * /auth/signup:
     *   post:
     *     description: 회원가입
     *     tags: [Auth]
     *     produces:
     *       - application/json
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/SignUpRequest'
     *     responses:
     *       200:
     *         description: success
     *       400:
     *         description: errcode [100 = 잘못된 이메일 형식, 101 = 잘못된 비밀번호 형식, 102 = 이미 존재하는 이메일]
     */
    @httpPost('/signup')
    private async signUp(@request() req: Request, @response() res: Response) {
        try {
            const signUpReqVo = new SignUpReq(req.body);
            await this.authService.signUp(signUpReqVo);
            res.send(200);
        }
        catch(err) {
            throw err;
        }
    }

    /**
     * @swagger
     *
     * /auth/emailExist:
     *   get:
     *     description: 이메일 중복 확인
     *     tags: [Auth]
     *     produces:
     *       - application/json
     *     paramaters:
     *       - in: query
     *         name: email
     *         description: 이메일 주소
     *         type: string
     *     responses:
     *       200:
     *         description: success
     *       400:
     *         description: errcode [100 = 잘못된 이메일 형식, 102 = 이미 존재하는 이메일]
     */
    @httpGet('/emailExist')
    private async emailExist(@request() req: Request, @response() res: Response) {
        try {
            const {email} = req.query;
            if(!email)
                throw new BadRequestException(ErrorCode.INVALID_EMAIL);

            const emailExistReq = new EmailExistReq({email: email as string});
            res.send({exist: await this.authService.isEmailExist(emailExistReq)});
        }
        catch(err) {
            throw err;
        }
    }

    /**
     * @swagger
     *
     * /auth/login:
     *   post:
     *     description: 로그인 요청
     *     tags: [Auth]
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: success
     *         content: 
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/LoginResponse'
     */
    @httpPost('/login')
    private async login(@request() req: Request, @response() res: Response) {
        try {
            const loginRequestVo = new loginReq(req.body);
            res.send(await this.authService.login(loginRequestVo));
        }
        catch(err) {
            throw err;
        }
    }
}