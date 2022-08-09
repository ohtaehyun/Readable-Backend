import { Schema, model, Model } from "mongoose"

const UsersSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {type: String, require: true},
    password: {type: String, require: true},
    salt: {type: String, require: true},
    name: {type: String, require: true}
});

const schema: = new model<UserSchema>("Users", UsersSchema, "users")

export default schema = new model("Users", UsersSchema, "users")