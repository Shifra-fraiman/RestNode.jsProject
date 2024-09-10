import {Response, Request} from "express";
import * as servicesService from "../services/services.service";
import {Service} from "../models/service.model";
import {controllerLog, errorLog} from "../config/log-config";

export const createService = async (req: Request, res: Response) => {
    let service: Service | null = null;
    if (req.body.serviceData) {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(
                req.body.businesId
            )} ${JSON.stringify(req.body.serviceData)}`
        );
        const { businesId, name, serviceData}= req.body;
        service = await servicesService.createService(businesId,name, serviceData);
    } else {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(req.body.serviceId)} ${JSON.stringify(
                req.body.businesId
            )}`
        );
        const { businesId, name}= req.body;
        service = await servicesService.createService(businesId, name);
    }
    if (service) res.status(200).json(service);
    else {
        errorLog.error(`Error in createService`);
        res.status(404).send({message: "The service create failed!"});
    }
};

export const updateService = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for updateService with body: ${JSON.stringify(
            req.body.service
        )}`
    );
    const { businesId, name, serviceData}= req.body;
    const { id} =req.params;
    const service = await servicesService.updateService(id, businesId, name, serviceData);
    if (service) res.status(200).json(service);
    else {
        errorLog.error(`Error in updateService`);
        res.status(404).send({message: "The service update failed!"});
    }
};

export const deleteService = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for deleteService with params: ${JSON.stringify(req.params.id)} `);
    const service = await servicesService.deleteService(req.params.id);
    if (service) res.status(200).json({message: "The service deleted!"});
    else {
        errorLog.error(`Error in deleteService`);
        res.status(404).send({message: "The service delete failed!"});
    }
};
