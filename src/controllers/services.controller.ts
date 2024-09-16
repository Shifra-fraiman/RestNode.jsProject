import {Response, Request} from "express";
import * as servicesService from "../services/services.service";
import {Service} from "../models/service.model";
import {controllerLog, errorLog} from "../../config/log-config";

export const createService = async (req: Request, res: Response) => {
    let service: Service | null = null;
    if (req.body.serviceData) {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(req.body.businessId)} ${JSON.stringify(
                req.body.serviceData
            )}`
        );
        const {businessId, name, serviceData} = req.body;
        service = await servicesService.createService(businessId, name, serviceData);
    } else {
        controllerLog.info(
            `Received request for createService with body: ${JSON.stringify(req.body.serviceId)} ${JSON.stringify(
                req.body.businessId
            )}`
        );
        const {businessId, name} = req.body;
        service = await servicesService.createService(businessId, name);
    }
    if (service) res.status(201).json(service);
    else {
        errorLog.error(`Error in createService`);
        res.status(404).send({message: "The service create failed!"});
    }
};

export const updateService = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for updateService with body: ${JSON.stringify(req.body.service)}`);
    const {businessId, name, serviceData} = req.body;
    const {id} = req.params;
    const service = await servicesService.updateService(id, businessId, name, serviceData);
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
export const getAllServices = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for getAllServices`);
    const services = await servicesService.getAllServices();
    if (services) res.status(200).json(services);
    else {
        errorLog.error(`Error in deleteService`);
        res.status(404).send({message: "The service delete failed!"});
    }
};
