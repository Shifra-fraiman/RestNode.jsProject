import {Response, Request} from "express";
import * as businessService from "../services/business.service";
import {Business} from "../models/business.model";

export const createBusiness = async (req: Request, res: Response) => {
    let business: Business | null = null;
    if (req.body.businessData)
        business = await businessService.createBusiness(req.body.userId, req.body.businessId, req.body.businessData);
    else business = await businessService.createBusiness(req.body.userId, req.body.businessId);
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
