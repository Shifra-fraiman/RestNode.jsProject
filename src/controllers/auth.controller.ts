import {Response, Request} from "express";
import * as authService from "../services/auth.service";
import {User} from "../models/user.model";

export const signUp = async (req: Request, res: Response) => {
    const user = await authService.signUp({
        id: req.body.id,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
    } as User);
    if (user) res.status(200).json(user);
    else res.status(400).send({message: "SignUp: omethig worng!"});
};

export const signIn = async (req: Request, res: Response) => {
    const token = await authService.signIn({
        id: req.body.id,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
    } as User);
    if (token) res.status(200).send(token);
    if (token == null || token == undefined) res.status(404).send({message: "The user not found!"});
};
