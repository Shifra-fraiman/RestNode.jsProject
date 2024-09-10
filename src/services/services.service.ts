import { ObjectId } from "typeorm";
import {ServiceModel, Service} from "../models/service.model";
import mongoose from "mongoose";

export const createService = async (
    businesId: string,
    name:string, 
    serviceData?: any
): Promise<Service | null> => {
    try {
        const newServiceData = serviceData ? {businesId,name, serviceData} : {businesId, name};
        const newService = new ServiceModel(newServiceData);
        await newService.save();
        return newService;
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
};

export const updateService = async (id: string, businesId:string , name: string, serviceData?: any) => {
    try {
        const newService= serviceData? { businesId , name, serviceData} :  { businesId , name};
        return await ServiceModel.findByIdAndUpdate(new mongoose.Types.ObjectId(id), newService, {new: true});
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};

export const deleteService = async (id: string) => {
    try {
        return await ServiceModel.findByIdAndDelete(id);
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};
