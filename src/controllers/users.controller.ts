import {Request, Response} from "express";
import * as userService from "../services/users.service";
import {controllerLog, errorLog} from "../config/log-config";

export const createUser = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for updateService with body: ${JSON.stringify(req.body.user)}`)
    const user = await userService.createUser(req.body.userId, req.body.userName, req.body.password);
    if (user) res.status(200).json(user);
    else {  errorLog.error(`Error in createUser`); res.status(404).send({message: "The user create failed!"});}
};
