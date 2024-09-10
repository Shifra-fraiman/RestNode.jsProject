import {Router} from "express";
import {signIn, signUp} from "../controllers/auth.controller";

const router = Router();
/**
 * @swagger
 * /Auth/signUp:
 *  post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successfully created the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/signUp", signUp);
/**
 * @swagger
 * /Auth/signIn:
 *   post:
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: Successfully signed in
 */
router.post("/signIn", signIn);

export default router;
