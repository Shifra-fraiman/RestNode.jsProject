import {Schema, model, Document} from "mongoose";

export interface Business {
    businessId: string;
    userId: string;
    businessData?: any;
}

const businessSchema = new Schema<Business>({
    businessId: {type: String, required: true, unique: true},
    userId: {type: String, required: true},
    businessData: {type: Schema.Types.Mixed, required: false},
});

export const BusinessModel = model<Business>("Business", businessSchema);
