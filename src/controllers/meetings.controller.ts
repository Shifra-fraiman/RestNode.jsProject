import {Request, Response} from "express";
import * as meetingService from "../services/meetings.service";

export const createMeeting = async (req: Request, res: Response) => {
    const meeting = await meetingService.createMeeting(
        req.body.businesId,
        req.body.serviceId,
        req.body.meetingId,
        req.body.meetingData
    );
    if (meeting) res.status(200).json(meeting);
    else res.status(404).send({message: "The meeting create failed!"});
};

export const updateMeeting = async (req: Request, res: Response) => {
    const meeting = await meetingService.updateMeeting(req.params.id, req.body.meeting);
    if (meeting) res.status(200).json(meeting);
    else res.status(404).send({message: "The meeting create failed!"});
};

export const deleteMeeting = async (req: Request, res: Response) => {
    const meeting = await meetingService.deleteMeeting(req.params.id);
    if (meeting) res.status(200).json(meeting);
    else res.status(404).send({message: "The meeting create failed!"});
};
