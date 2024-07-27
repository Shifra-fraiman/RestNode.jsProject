import {Router} from "express";
import {createUser} from "../controllers/users.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();
/**
 * @swagger
 * /:
 *  post:
 *     summary: /users
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *                 example: "string"
 *               userId:
 *                 type: string
 *                 example: "string"
 *               businessData:
 *                 type: Object
 *                 example: {}
 *             required:
 *               - businessId
 *               - userId
 *     responses:
 *       200:
 *         description: Successfully created the business
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 businessId:
 *                   type: string
 *                   example: "string"
 *                 userId:
 *                   type: string
 *                   example: "string"
 */
router.post("/", authMiddleware, createUser);

export default router;
