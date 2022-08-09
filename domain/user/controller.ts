import { Request, Response } from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";
import UserModel from "./model";

@controller("/user")
export class UserController {
    constructor(){

    }

    @httpGet("/insertTest")
    private async insertTest(@request() req: Request, @response() res: Response) {
        try{
            await UserModel.create();
            res.send("?");
        } catch(e) {
            console.error(e);
        }
    }

    @httpGet("/readTest")
    private async readTest(@request() req: Request, @response() res: Response) {
        try{
            const user = await UserModel.find();
            console.log(user);
            res.send("?");
        } catch(e) {
            console.error(e);
        }
    }
}   