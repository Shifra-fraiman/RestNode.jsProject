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
    const password = user.password;
    const passwordEncoder = await createPassword(password);
    user.password = passwordEncoder;
    return await userService.createUser(user);
};

export const signIn = async (user: User) => {
    const SECRET_KEY= "dr65te654634q458i,24*gytr5";
    try {
        const findOne = await UserModel.findById<User | undefined>(user.id);
        if (findOne) {
            const match = await bcrypt.compare(user.password, findOne.password);
            if (match) {
                const token = jwt.sign(findOne, SECRET_KEY, {
                    expiresIn: "2 days",
                });
                return token;
            }
        }
        else
            return findOne;
    } catch (error) {
        console.log("signIn: " + error);
    }
};
