import {Request, Response} from "express";
import * as meetingService from "../services/meetings.service";
import {controllerLog, errorLog} from "../config/log-config";

export const createMeeting = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for createMeeting with body:  ${JSON.stringify(req.body.businesId)} ${JSON.stringify(
            req.body.serviceId
        )}, ${JSON.stringify(req.body.meetingId)}, ${JSON.stringify(req.body.meetingData)}`
    );
    const meeting = await meetingService.createMeeting(
        req.body.businesId,
        req.body.serviceId,
        req.body.meetingId,
        req.body.meetingData
    );
    if (meeting) res.status(200).json(meeting);
    else {
        errorLog.error(`Error in createMeeting`);
        res.status(404).send({message: "The meeting create failed!"});
    }
};

export const updateMeeting = async (req: Request, res: Response) => {
    controllerLog.info(
        `Received request for updateMeeting with params:  ${JSON.stringify(req.params.id)} and body: ${JSON.stringify(
            req.body.meeting
        )}`
    );
    const meeting = await meetingService.updateMeeting(req.params.id, req.body.meeting);
    if (meeting) res.status(200).json(meeting);
    else {
        errorLog.error(`Error in updateMeeting`);
        res.status(404).send({message: "The meeting create failed!"});
    }
};

export const deleteMeeting = async (req: Request, res: Response) => {
    controllerLog.info(`Received request for deleteMeeting with params:  ${JSON.stringify(req.params.id)}`);
    const meeting = await meetingService.deleteMeeting(req.params.id);
    if (meeting) res.status(200).json(meeting);
    else {
        errorLog.error(`Error in deleteMeeting`);
        res.status(404).send({message: "The meeting create failed!"});
    }
};
