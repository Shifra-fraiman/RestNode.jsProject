import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("hello middlware!");

    const token =
        req.body.token ||
        req.query.token ||
        req.headers["x-access-token"] ||
        req.headers["authorization"]?.split(" ").pop();

    if (!token) {
        return res.status(401).send("A token is required for authentication");
    }
    try {
        console.log(`token: ${token}`);

        const decoded = jwt.verify(token, process.env.SECRET_KEY!);
        console.log(`decoded: ${decoded}`);

        //(req as any).user = decoded;
    } catch (error) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};
