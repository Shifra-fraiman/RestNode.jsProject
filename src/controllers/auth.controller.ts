import {Response, Request} from "express";
import * as authService from "../services/auth.service";
import {User} from "../models/user.model";
import {controllerLog, errorLog} from "../../config/log-config";
import * as userService from "../services/users.service";

// סוגי הודעות לוג מותאמות אישית
type LogMessage<T extends string> = `Received request for ${T} with body: ${string} and body: ${string}`;
type SignUpLogMessage = LogMessage<"signUp">;
type SignInLogMessage = LogMessage<"signIn">;

export const signUp = async (req: Request, res: Response) => {
    const logMessage: SignUpLogMessage = `Received request for signUp with body: ${JSON.stringify(
        req.body.userId
    )} and body: ${JSON.stringify(req.body.userName)}`;
    controllerLog.info(logMessage);
    // const user = await authService.signUp({
    //     userId: req.body.userId,
    //     userName: req.body.userName,
    //     password: req.body.password,
    // } as User);
    const {name, password} = req.body;
    const user = await userService.createUser(name, password);
    if (user) res.status(200).json(user);
    else {
        errorLog.error(`Error in signUp`);
        res.status(400).send({message: "SignUp: somethig worng!"});
    }
};

export const signIn = async (req: Request, res: Response) => {
    const logMessage: SignInLogMessage = `Received request for signIn with body: ${JSON.stringify(
        req.body.userId
    )} and body: ${JSON.stringify(req.body.userName)}`;
    controllerLog.info(logMessage);

    const {name, password} = req.body;
    const token = await authService.signIn(name, password);
    if (token) res.status(200).send(token);
    else {
        errorLog.error(`Error in signIn`);
        res.status(404).send({message: "The user not found!"});
    }
};
