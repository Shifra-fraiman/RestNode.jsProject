import {Schema, model} from "mongoose";

export interface User {
    userId: string;
    userName: string;
    password: string;
}

const UserSchema: Schema = new Schema<User>({
    userId: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
});

export const UserModel = model<User>("Users", UserSchema);
