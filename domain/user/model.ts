import { injectable } from "inversify";
import { Schema } from "mongoose";
import { BaseModel } from "../../lib/model";
import schema from "./schema"

class UserModel extends BaseModel{
    constructor(model: any) {
        super(model);
    }
    
    public async create(): Promise<void> {
        await this.model.create({
            email: "test",
            password: "test",
            salt: "test",
            name: "test"
        })
    }
}

module.exports = new UserModel(schema)