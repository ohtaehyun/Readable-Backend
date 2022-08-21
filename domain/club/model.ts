import { BaseModel } from "../../lib/mongo/model";
import schema, { IClub } from "./schema"

class ClubModel extends BaseModel{
    constructor(model: any) {
        super(model);
    }
    
    public async create(club: IClub): Promise<void> {
        await this.model.create(club)
    }

    public async findAll(): Promise<IClub[]> {
        return await this.model.find({}).lean();
    }

    public async findByName(name: string): Promise<IClub> {
        return await this.model.findOne({name}).lean();
    }
}

export default new ClubModel(schema)