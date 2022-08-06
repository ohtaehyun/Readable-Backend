import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, request, response } from "inversify-express-utils";
import TYPES from "../constants/types";
import { TestService } from "../services/testService";

@controller("/test")
export class TestController{
    constructor(@inject(TYPES.TestService) private testService: TestService){}
    
    /**
     * @swagger
     *
     * /test:
     *   get:
     *     produces:
     *       - application/json
     */
    @httpGet("/")
    private async getTest( @request() req: Request, @response() res: Response){
        const testStr = this.testService.serviceTest();
        res.send(testStr);
    }
}