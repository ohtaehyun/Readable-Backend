import { Schema } from "mongoose";

export class BaseModel{
    protected model: any;

    constructor(model: any){
        this.model = model;
    }
    
}