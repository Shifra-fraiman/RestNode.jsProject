import {Router} from "express";
import {createMeeting, updateMeeting,deleteMeeting} from "../controllers/meetings.controller";
import {authMiddleware} from "../middlewares/auth.middleware";


const router = Router();

router.post("/", createMeeting);
router.put("/:id",authMiddleware, updateMeeting);
router.delete("/:id", deleteMeeting);

export default router;