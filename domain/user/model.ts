import { injectable } from "inversify";
import { Schema } from "mongoose";
import { BaseModel } from "../../lib/model";
import schema, { IUser } from "./schema"

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

    public async find(): Promise<IUser[]> {
        return await this.model.find({}).lean();
    }
}

export default new UserModel(schema)