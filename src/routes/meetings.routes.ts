import {Router} from "express";
import {createMeeting, updateMeeting,deleteMeeting} from "../controllers/meetings.controller";
import {authMiddleware} from "../middlewares/auth.middleware";


const router = Router();

router.post("/",authMiddleware, createMeeting);
router.put("/:id",authMiddleware, updateMeeting);
router.delete("/:id",authMiddleware, deleteMeeting);

export default router;