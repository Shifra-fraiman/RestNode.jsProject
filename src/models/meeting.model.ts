import {Schema, model} from "mongoose";

export interface Meeting {
    businessId: string;
    serviceId: string;
    meetingId: string;
    meetingData: {dateAndStartTime: Date; duration: number; meeting?: any};
}

const meetingSchema: Schema = new Schema<Meeting>({
    businessId: {type: String, required: true},
    serviceId: {type: String, required: true},
    meetingId: {type: String, required: true, unique: true},
    meetingData: {
        dateAndStartTime: {type: Date, required: true},
        duration: {type: Number, required: true},
        meeting: {type: Schema.Types.Mixed, required: false},
    },
});

export const MeetingModel = model<Meeting>("Meeting", meetingSchema);
