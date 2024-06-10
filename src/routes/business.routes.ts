import {Router} from "express";
import {createBusiness, updateBusiness} from "../controllers/business.controller";

const router = Router();

router.post("/", createBusiness);
router.put("/:id", updateBusiness);

export default router;