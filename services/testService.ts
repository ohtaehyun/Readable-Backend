import { injectable } from "inversify";

@injectable()
export class TestService{
    constructor(){}

    public serviceTest(){
        return "this is TestService";
    }
}