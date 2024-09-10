import {Schema, model} from "mongoose";

export interface Meeting {
    businessId: Schema.Types.ObjectId;
    serviceId: Schema.Types.ObjectId;
    meetingId: string;
    meetingData: {dateAndStartTime: Date; duration: number; meeting?: any};
}

const meetingSchema: Schema = new Schema<Meeting>({
    businessId: { type: Schema.Types.ObjectId, ref: 'Business' },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
    meetingId: {type: String, required: true, unique: true},
    meetingData: {
        dateAndStartTime: {type: Date, required: true},
        duration: {type: Number, required: true},
        meeting: {type: Schema.Types.Mixed, required: false},
    },
});

export const MeetingModel = model<Meeting>("Meeting", meetingSchema);
