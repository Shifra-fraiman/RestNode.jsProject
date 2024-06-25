import {Response, Request} from "express";
import * as businessService from "../services/business.service";
import {Business} from "../models/business.model";
import {controllerLog, errorLog} from "../config/log-config";

export const createBusiness = async (req: Request, res: Response) => {
    let business: Business | null = null;
    if (req.body.businessData) {
        business = await businessService.createBusiness(req.body.userId, req.body.businessId, req.body.businessData);
        controllerLog.info(
            `Received request for createBusiness with body: ${JSON.stringify(req.body.userId)} ${JSON.stringify(
                req.body.businessId
            )} ${JSON.stringify(req.body.businessData)}`
        );
    } else {
        business = await businessService.createBusiness(req.body.userId, req.body.businessId);
        controllerLog.info(
            `Received request for createBusiness with body: ${JSON.stringify(req.body.userId)} ${JSON.stringify(
                req.body.businessId
            )}`
        );
    }
    if (business) {
        res.status(201).json(business);
    } else {
        errorLog.error(`Error in createBusiness`);
        res.status(404).send({message: "The business create failed!"});
    }
};

export const updateBusiness = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for updateBusiness with params: ${JSON.stringify(req.params.id)} and body: ${JSON.stringify(
            req.body.business
        )}`
    );
    const business = await businessService.updateBusiness(req.params.id, req.body.business);
    if (business) {
        res.status(201).json(business);
    } else {
        errorLog.error(`Error in updateBusiness`);
        res.status(404).send({message: "The business update failed!"});
    }
};
