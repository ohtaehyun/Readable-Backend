import { Schema, model, Types } from "mongoose"

export interface IUser {
    _id: Types.ObjectId,
    email: string,
    password: string,
    salt: string,
    name: string
}

const UsersSchema = new Schema<IUser>({
    email: {type: String, require: true, unique: true, index: 1},
    password: {type: String, require: true},
    salt: {type: String, require: true},
    name: {type: String, require: true}
});

export default model("Users", UsersSchema, "users")