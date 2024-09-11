import {Schema,Document, model} from "mongoose";

export interface User extends Document{
    userId: string;
    name: string;
    password: string;
}

const UserSchema: Schema = new Schema<User>({
    // userId: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
});

export const UserModel = model<User>("User", UserSchema);
