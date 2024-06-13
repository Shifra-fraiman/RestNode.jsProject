import {Router} from "express";
import {createService, updateService, deleteService} from "../controllers/services.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

export default router;
