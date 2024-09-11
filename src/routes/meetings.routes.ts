import {Router} from "express";
import {createMeeting, updateMeeting, deleteMeeting, getAllMeeting} from "../controllers/meetings.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();
/**
 * @swagger
 * /Meeting:
 *  post:
 *     tags: [Meeting]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       200:
 *         description: Successfully created the meeting
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meeting'
 */
router.post("/", authMiddleware, createMeeting);
/**
 * @swagger
 * /Meeting/{id}:
 *   put:
 *     tags: [Meeting]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meeting'
 *     responses:
 *       '200':
 *         description: Successfully update meeting
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meeting'
 */
router.put("/:id", authMiddleware, updateMeeting);
/**
 * @swagger
 * /Meeting/{id}:
 *   delete:
 *     tags: [Meeting]
 *     security:
 *      - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       '200':
 *         description: Successfully deleted meeting
 */
router.delete("/:id", authMiddleware, deleteMeeting);
/**
 * @swagger
 * /Meeting:
 *   get:
 *     tags: [Meeting]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Successfully deleted meeting
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meeting'
 */
router.get("", authMiddleware, getAllMeeting);

export default router;
