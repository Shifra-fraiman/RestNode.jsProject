// import { Response, Request } from "express";
import * as bcrypt from "bcrypt";

import {User} from "../models/user.model";
import * as userService from "../services/users.service";
import {UserModel} from "../models/user.model";
import jwt from "jsonwebtoken";

const createPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const signUp = async (user: User) => {
    console.log(`user ${user.password} ${user.userName} ${user.userId}`);
    const password = user.password;
    const passwordEncoder = await createPassword(password);
    user.password = passwordEncoder;
    console.log(`user ${user.password} ${user.userName} ${user.userId}`);
    return await userService.createUser(user.userId, user.userName, user.password);
};

export const signIn = async (userName: string, password: string) => {
    try {
        const findOne = await UserModel.findOne<User | undefined>({userName: userName});
        console.log(`findOne ${findOne}`);

        if (findOne) {
            const match = await bcrypt.compare(password, findOne.password);
            console.log(`match: ${match}`);
            console.log(`user.password, findOne.password ${password}, ${findOne.password}`);

            if (match) {
                const payload = {userName: findOne.userName, password: password};
                const token = jwt.sign(payload, process.env.SECRET_KEY!, {
                    expiresIn: "2 days",
                });
                return token;
            }
        } else return findOne;
    } catch (error) {
        console.log("signIn: " + error);
    }
};
