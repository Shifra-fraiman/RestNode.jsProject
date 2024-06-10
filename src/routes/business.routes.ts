import {Router} from "express";
import {createBusiness, updateBusiness} from "../controllers/business.controller";

const router = Router();

/**
 * @swagger
 * /:
 *  post:
 *     summary: Create a new business
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
 *                 example: "12345"
 *               userId:
 *                 type: string
 *                 example: "67890"
 *             required:
 *               - businessId
 *               - userId
 *     responses:
 *       201:
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
 *                 otherProperty:
 *                   type: string
 *                   example: "value"
 *       404:
 *         description: The business create failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "The business create failed!"
 */
router.post("/", createBusiness);

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
router.put("/:id", updateBusiness);

export default router;
