import {Response, Request} from "express";
import * as servicesService from "../services/services.service";
import {Service} from "../models/service.model";
import {controllerLog, errorLog} from "../config/log-config";

export const createService = async (req: Request, res: Response) => {
    let service: Service | null = null;
    if (req.body.serviceData) {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(req.body.serviceId)} ${JSON.stringify(
                req.body.businesId
            )} ${JSON.stringify(req.body.serviceData)}`
        );
        service = await servicesService.createService(req.body.serviceId, req.body.businesId, req.body.serviceData);
    } else {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(req.body.serviceId)} ${JSON.stringify(
                req.body.businesId
            )}`
        );
        service = await servicesService.createService(req.body.serviceId, req.body.businesId);
    }
    if (service) res.status(200).json(service);
    else {
        errorLog.error(`Error in createService`);
        res.status(404).send({message: "The service create failed!"});
    }
};

export const updateService = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for updateService with params: ${JSON.stringify(req.params.id)} and body: ${JSON.stringify(
            req.body.service
        )}`
    );
    const service = await servicesService.updateService(req.params.id, req.body.service);
    if (service) res.status(200).json(service);
    else {
        errorLog.error(`Error in updateService`);
        res.status(404).send({message: "The service create failed!"});
    }
};

export const deleteService = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for deleteService with params: ${JSON.stringify(req.params.id)} `);
    const service = await servicesService.deleteService(req.params.id);
    if (service) res.status(200).json(service);
    else {
        errorLog.error(`Error in deleteService`);
        res.status(404).send({message: "The service create failed!"});
    }
};
