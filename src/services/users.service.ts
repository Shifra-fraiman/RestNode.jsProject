import {User, UserModel} from "../models/user.model";

export const createUser = async (user: User): Promise<User | null> => {
    try {
        const newUser = await new UserModel(user);
        console.log("hello createUser service!");

        return await newUser.save();
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
};
