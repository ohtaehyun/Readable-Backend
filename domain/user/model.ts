import { injectable } from "inversify";
import { Schema } from "mongoose";
import { BaseModel } from "../../lib/mongo/model";
import schema, { IUser } from "./schema"

class UserModel extends BaseModel{
    constructor(model: any) {
        super(model);
    }
    
    public async create(user: IUser): Promise<void> {
        await this.model.create(user)
    }

    public async findAll(): Promise<IUser[]> {
        return await this.model.find({}).lean();
    }
}

export default new UserModel(schema)