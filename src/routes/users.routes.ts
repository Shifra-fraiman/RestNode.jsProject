import {Router} from "express";
import {createUser, getUser} from "../controllers/users.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();
/**
 * @swagger
 * /User:
 *  post:
 *     tags: [User]
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
router.post("", /*authMiddleware,*/ createUser);
/**
 * @swagger
 * /User/{id}:
 *  get:
 *     tags: [User]
 *     security:
 *      - bearerAuth: []  
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully get user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.get("/:id", /*authMiddleware,*/ getUser);

export default router;
