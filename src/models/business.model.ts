import {Mongoose, Schema, model, Document} from "mongoose";

export interface Business extends Document{
    // businessId: string;
    userId: Schema.Types.ObjectId;
    businessData?: any;
}

const businessSchema = new Schema<Business>({
    // businessId: {type: String, required: true, unique: true},
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    businessData: {type: Schema.Types.Mixed, required: false},
});

export const BusinessModel = model<Business>("Business", businessSchema);
