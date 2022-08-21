import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, httpPost, request, response } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { ClubService } from "./service";
import { ClubCreateRequest } from "./vo/request/clubCreateRequest";

/**
 * @swagger
 * tags:
 *   name: Club
 *   description: 소모임 관련 API들
 * 
 */
@controller('/club')
export class ClubController {

    constructor(
        @inject(TYPES.ClubService) private clubService: ClubService
    ){}
    
    /**
     * @swagger
     *
     * /club:
     *   post:
     *     description: 소모임 생성 API
     *     tags: [Club]
     *     produces:
     *       - application/json
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/CreateClubRequest'
     *     responses:
     *       200:
     *         description: success
     */
    @httpPost('')
    private async createClub(@request() req: Request, @response() res: Response) {
        try {
            const createRequestVo = new ClubCreateRequest(req.body);
            await this.clubService.createClub(createRequestVo);
            res.send(200);
        }
        catch(err) {
            throw err;
        }
    }
}