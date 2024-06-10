import {Response, Request} from "express";
import * as businessService from "../services/business.service";

export const createBusiness = async (req: Request, res: Response) => {
    const business = await businessService.createBusiness(req.body.businessId, req.body.userId);
    if (business) {
        res.status(201).json(business);
    } else {
        res.status(404).send({message: "The business create failed!"});
    }
};

export const updateBusiness = async (req: Request, res: Response) => {
    const business = await businessService.updateBusiness(req.params.id, req.body.business);
    if (business) {
        res.status(201).json(business);
    } else {
        res.status(404).send({message: "The business update failed!"});
    }
};
