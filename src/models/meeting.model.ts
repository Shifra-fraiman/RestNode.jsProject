import {Schema, Document, model} from "mongoose";

export interface Meeting extends Document {
    businessId: Schema.Types.ObjectId;
    serviceId: Schema.Types.ObjectId;
    meetingData: {
        dateAndStartTime: Date;
        duration: number;
        customerDetails: {name: String; phone: String; email: String};
        meeting?: any;
    };
}

const meetingSchema: Schema = new Schema<Meeting>({
    businessId: {type: Schema.Types.ObjectId, ref: "Business"},
    serviceId: {type: Schema.Types.ObjectId, ref: "Service"},
    meetingData: {
        dateAndStartTime: {type: Date, required: true},
        duration: {type: Number, required: true},
        customerDetails: {
            name: {type: String, required: true},
            phone: {type: String},
            email: {type: String},
        },
        meeting: {type: Schema.Types.Mixed, required: false},
    },
});

export const MeetingModel = model<Meeting>("Meeting", meetingSchema);
