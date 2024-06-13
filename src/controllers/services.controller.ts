import {Response, Request} from "express";
import * as servicesService from "../services/services.service";
import { Service } from "../models/service.model";


export const createService = async (req: Request, res: Response) => {
    let service:Service| null=null;
    if(req.body.serviceData)
        service =await servicesService.createService(req.body.serviceId, req.body.businesId, req.body.serviceData);
    else
        service =await servicesService.createService(req.body.serviceId, req.body.businesId);
    if (service) res.status(200).json(service);
    else res.status(404).send({message: "The service create failed!"});
};

export const updateService = async (req: Request, res: Response) => {
    const service =await servicesService.updateService(req.params.id, req.body.service);
    if (service) res.status(200).json(service);
    else res.status(404).send({message: "The service create failed!"});
};

export const deleteService = async (req: Request, res: Response) => {
    const service =await servicesService.deleteService(req.params.id);
    if (service) res.status(200).json(service);
    else res.status(404).send({message: "The service create failed!"});
};
