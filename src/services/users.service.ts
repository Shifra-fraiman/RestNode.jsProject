import {User, UserModel} from "../models/user.model";
import * as bcrypt from "bcrypt";

export const createUser = async (userId: string, userName: string, password: string): Promise<User | null> => {
    try {
        // const hash = await bcrypt.hash(user.password, 10);
        // user.password = hash;
        const newUserData = {userId, userName, password};
        const newUser = await new UserModel(newUserData);
        console.log("hello createUser service!");

        return await newUser.save();
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
};
