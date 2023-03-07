import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    status: String,
    password:String
});

const Users = models.user || model('user', userSchema)

export default Users;