import {ServiceModel, Service} from "../models/service.model";

export const createService = async (
    serviceId: string,
    businesId: string,
    serviceData?: any
): Promise<Service | null> => {
    try {
        const newServiceData = serviceData ? {serviceId, businesId, serviceData} : {serviceId, businesId};
        const newService = await new ServiceModel(newServiceData);
        return newService;
    } catch (error) {
        console.error("The service created faild: " + error);
        return null;
    }
};

export const updateService = async (serviceId: string, service: Service) => {
    try {
        return await ServiceModel.findByIdAndUpdate(serviceId, {service}, {new: true});
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};

export const deleteService = async (serviceId: string) => {
    try {
        return await ServiceModel.findByIdAndDelete(serviceId);
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};
