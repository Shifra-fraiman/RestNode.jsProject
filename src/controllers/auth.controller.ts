import {Response, Request} from "express";
import * as authService from "../services/auth.service";
import {User} from "../models/user.model";

export const signUp = async (req: Request, res: Response) => {
    const user = await authService.signUp({
        userId: req.body.userId,
        userName: req.body.userName,
        password: req.body.password,
    } as User);
    if (user) res.status(200).json(user);
    else res.status(400).send({message: "SignUp: somethig worng!"});
};

export const signIn = async (req: Request, res: Response) => {
    console.log(` password: req.body.password: ${req.body.password}`);

    const token = await authService.signIn(req.body.id, req.body.userName, req.body.password);
    if (token) res.status(200).send(token);
    else res.status(404).send({message: "The user not found!"});
};
