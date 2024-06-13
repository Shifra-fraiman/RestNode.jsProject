import {Schema, model} from "mongoose";

export interface Service {
    serviceId: string;
    businesId: string;
    serviceData: any;
}

const ServiceSchema: Schema = new Schema<Service>({
    serviceId: {type: String, required: true, unique: true},
    businesId: {type: String, required: true},
    serviceData: {type: Schema.Types.Mixed, required: false},
});

export const ServiceModel = model<Service>("Service", ServiceSchema);
