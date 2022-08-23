import { Model } from "mongoose";

export class BaseModel<T>{
    protected model: Model<T>;

    constructor(model: Model<T>){
        this.model = model;
    }
    
    public async find(query: object = {}, projection: object = {}): Promise<Array<T>> {
        return await this.model.find(query, projection).lean();
    }

    public async findOne(query: object = {}, projection: object = {}): Promise<T> {
        return await this.model.findOne(query, projection).lean();
    }
}