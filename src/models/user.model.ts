import {Schema, model} from "mongoose";

export interface User{
    id: string;
    userName: string;
    password: string;
    email: string;
}

const UserSchema: Schema = new Schema<User>({
    id: {type: String, required: true, unique: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
});

export const UserModel = model<User>("User", UserSchema);
