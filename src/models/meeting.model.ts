import {Schema, model} from "mongoose";

export interface Meeting {
    businessId: string;
    serviceId: string;
    meetingId: string;
    meetingData: {date: Date; startTime: number; duration: number; meeting: any};
}

const meetingSchema: Schema = new Schema<Meeting>({
    businessId: {type: String, required: true},
    serviceId: {type: String, required: true},
    meetingId: {type: String, required: true, unique: true},
    meetingData: {type: Object},
});

export const MeetingModel = model<Meeting>("Meeting", meetingSchema);
