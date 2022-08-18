import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, request, response } from "inversify-express-utils";
import TYPES from "../../constants/types";
import UserModel from "./model";
import { UsersService } from "./service";

@controller("/user")
export class UserController {
    constructor(@inject(TYPES.UsersService) private UsersService: UsersService) {}

    @httpGet("/insertTest")
    private async insertTest(@request() req: Request, @response() res: Response) {
        try{
            res.send("inserted");
        } catch(e) {
            console.error(e);
        }
    }

    @httpGet("/readTest")
    private async readTest(@request() req: Request, @response() res: Response) {
        try{
            const users = await UserModel.findAll();
            users.forEach(user => console.log(user._id.toString()));
            res.send(users);
        } catch(e) {
            console.error(e);
        }
    }
}   