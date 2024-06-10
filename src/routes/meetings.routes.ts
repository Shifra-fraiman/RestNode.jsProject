import {Router} from "express";
import {createMeeting, updateMeeting,deleteMeeting} from "../controllers/meetings.controller";

const router = Router();

router.post("/", createMeeting);
router.put("/:id", updateMeeting);
router.delete("/:id", deleteMeeting);

export default router;