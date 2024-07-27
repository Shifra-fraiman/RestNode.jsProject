import {Router} from "express";
import {createBusiness, updateBusiness} from "../controllers/business.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /:
 *  post:
 *     summary: /business
 *     tags: [Business]
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
router.post("/",authMiddleware, createBusiness);

/**
 * @swagger
 * /:id:
 *   put:
 *     summary: Example endpoint
 *     tags: [Business]
 *     parameters:
 *       - in: query
 *         name: param1
 *         required: true
 *         schema:
 *           type: string
 *         description: Parameter 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *                 example: "value1"
 *               userId:
 *                 type: string
 *                 example: "value2"
 *     responses:
 *       200:
 *         description: A successful response
 */
router.put("/:id",authMiddleware, updateBusiness);

export default router;
