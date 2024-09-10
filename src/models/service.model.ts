import {Schema, model} from "mongoose";

export interface Service {
    serviceId: string;
    businesId: Schema.Types.ObjectId;
    serviceData: any;
}

const ServiceSchema: Schema = new Schema<Service>({
    // serviceId: {type: String, required: true, unique: true},
    businesId: { type: Schema.Types.ObjectId, ref: 'Business' },
    serviceData: {type: Schema.Types.Mixed, required: false},
});

export const ServiceModel = model<Service>("Service", ServiceSchema);
