import {Router} from "express";
import {createBusiness, updateBusiness} from "../controllers/business.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();

/**
 * @swagger
 * /Business:
 *   post:
 *     tags: [Business]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '200':
 *         description: Successfully created business
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 */
router.post("", authMiddleware, createBusiness);

/**
 * @swagger
 * /Business:
 *   put:
 *     tags: [Business]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '200':
 *         description: Successfully update business
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 */
router.put("", authMiddleware, updateBusiness);

export default router;
