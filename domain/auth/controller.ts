import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost, next, request, response } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { AuthService } from "./service";
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
     *         description: errcode [100 = 잘못된 이메일 형식]
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
}