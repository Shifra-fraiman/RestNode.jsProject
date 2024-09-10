import {User, UserModel} from "../models/user.model";
import * as bcrypt from "bcrypt";

export const createUser = async (name: string, password: string): Promise<User | null> => {
    try {
        //קידוד הסיסמה
        const hash = await bcrypt.hash(password, 10);
        //השמה לסיסמה הקיימת
        password = hash;
        const newUser = await new UserModel({name, password});
        return await newUser.save();
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
};

export const deleteUser = async () => {
    
};

export const updateUser = async () => {
    
};

export const getUser = async (id: string): Promise<User | null> => {
    return await UserModel.findById(id);
};
