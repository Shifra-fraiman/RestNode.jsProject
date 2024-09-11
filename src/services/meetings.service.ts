import mongoose from "mongoose";
import {Meeting, MeetingModel} from "../models/meeting.model";

export const createMeeting = async (businessId: string, serviceId: string, meetingData: any) => {
    try {
        const newMeeting = new MeetingModel({businessId, serviceId, meetingData});
        await newMeeting.save();
        return newMeeting;
    } catch (error) {
        console.error("The meeting created faild: " + error);
    }
};

export const updateMeeting = async (id: string, businessId: string, serviceId: string, meetingData: any) => {
    try {
        return await MeetingModel.findByIdAndUpdate(
            new mongoose.Types.ObjectId(id),
            {businessId, serviceId, meetingData},
            {new: true}
        );
    } catch (error) {
        console.error("The meeting update faild: " + error);
    }
};

export const deleteMeeting = async (id: string) => {
    try {
        return await MeetingModel.findByIdAndDelete(id);
    } catch (error) {
        console.error("The meeting update faild: " + error);
    }
};

export const getAllMeeting = async () => {
    try {
        return await MeetingModel.find();
    } catch (error) {
        console.error("The get meeting faild: " + error);
    }
};

