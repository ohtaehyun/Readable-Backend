import { Request, Response } from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";

@controller("/")
export class HomeController{
    constructor(){};
    
    @httpGet("")
    private async getHome(@request() req: Request, @response() res: Response){
        res.send("home sweet home~");
    }
}