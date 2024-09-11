import {Schema, model, Document} from "mongoose";

export interface Service extends Document {
    businessId: Schema.Types.ObjectId;
    name: string;
    serviceData: any;
}

const ServiceSchema: Schema = new Schema<Service>({
    // serviceId: {type: String, required: true, unique: true},
    businessId: {type: Schema.Types.ObjectId, ref: "Business"},
    name: {type: String, required: true},
    serviceData: {type: Schema.Types.Mixed, required: false},
});

export const ServiceModel = model<Service>("Service", ServiceSchema);
