import {Response, Request} from "express";
import * as authService from "../services/auth.service";
import {User} from "../models/user.model";
import {controllerLog, errorLog} from "../config/log-config";

export const signUp = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for signUp with body: ${JSON.stringify(req.body.userId)} and body: ${JSON.stringify(
            req.body.userName
        )} `
    );
    const user = await authService.signUp({
        userId: req.body.userId,
        userName: req.body.userName,
        password: req.body.password,
    } as User);
    if (user) res.status(200).json(user);
    else {
        errorLog.error(`Error in signUp`);
        res.status(400).send({message: "SignUp: somethig worng!"});
    }
};

export const signIn = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for signIn with body: ${JSON.stringify(req.body.userId)} and body: ${JSON.stringify(
            req.body.userName
        )}`
    );
    const token = await authService.signIn(req.body.id, req.body.userName, req.body.password);
    if (token) res.status(200).send(token);
    else {
        errorLog.error(`Error in signIn`);
        res.status(404).send({message: "The user not found!"});
    }
};
