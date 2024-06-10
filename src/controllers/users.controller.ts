import {Request, Response} from "express";
import * as userService from "../services/users.service";

export const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body.user);
    if (user) res.status(200).json(user);
    else res.status(404).send({message: "The user create failed!"});
};
