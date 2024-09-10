import {Request, Response} from "express";
import * as userService from "../services/users.service";
import {controllerLog, errorLog} from "../config/log-config";

export const createUser = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for userService with body: ${JSON.stringify(req.body.user)}`)
        const { name, password }= req.body;
    const user= await userService.createUser(name, password);
    if (user) res.status(200).json(user);
    else {  errorLog.error(`Error in createUser`); res.status(404).send({message: "The user create failed!"});}
};

export const deleteUser = async (req: Request, res: Response) => {
    
};

export const updateUser = async (req: Request, res: Response) => {
    
};

export const getUser = async (req: Request, res: Response) => {
    const { id }= req.params;
    const user= await userService.getUser(id);
    if(user) res.status(200).json(user);
    else res.status(404).send({message: "The user not found"});
};
