import { Schema, model, Types } from "mongoose"

export interface IClub {
    _id: Types.ObjectId,
    name: string,
    owner: string,
    category: string,
    description: string,
    members: string[]
}

const ClubSchema = new Schema<IClub>({
    name: {type: String, require: true},
    owner: {type: String, require: true, ref:"users"},
    category: {type: String},
    description: {type: String},
    members: [String]
});

export default model("Clubs", ClubSchema, "clubs")