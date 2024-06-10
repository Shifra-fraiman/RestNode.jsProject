import {Meeting, MeetingModel} from "../models/meeting.model";

export const createMeeting = async (businesId: string, serviceId: string, meetingId: string, meetingData: any) => {
    try {
        const newMeeting = await new MeetingModel({businesId, serviceId, meetingId, meetingData});
        return newMeeting;
    } catch (error) {
        console.error("The service created faild: " + error);
    }
};

export const updateMeeting = async (meetingId: string, meeting: Meeting) => {
    try {
        return await MeetingModel.findByIdAndUpdate(meetingId, {meeting}, {new: true});
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};

export const deleteMeeting = async (meetingId: string) => {
    try {
        return await MeetingModel.findByIdAndDelete(meetingId);
    } catch (error) {
        console.error("The service update faild: " + error);
    }
};
