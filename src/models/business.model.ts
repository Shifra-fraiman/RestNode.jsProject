import {Schema, model, Document} from "mongoose";

export interface Business {
    businessId: string;
    userId: string;
    // business: any;
}

const businessSchema = new Schema<Business>({
    businessId: {type: String, required: true, unique: true},
    userId: {type: String, required: true},
    // business: {type: Any, required: false}
});

export const BusinessModel = model<Business>("Business", businessSchema);
