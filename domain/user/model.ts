import { Model } from "mongoose";
import { BaseModel } from "../../lib/mongo/model";
import schema, { IUser } from "./schema"

class UserModel extends BaseModel<IUser>{
    constructor(model: Model<IUser>) {
        super(model);
    }
    
    public async create(user: IUser): Promise<void> {
        await this.model.create(user)
    }

    public async findByEmail(email: string): Promise<IUser> {
        return await this.model.findOne({email}).lean();
    }
}

export default new UserModel(schema)