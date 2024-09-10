import {Router} from "express";
import {createService, updateService, deleteService} from "../controllers/services.controller";
import {authMiddleware} from "../middlewares/auth.middleware";

const router = Router();
/**
 * @swagger
 * /Service:
 *  post:
 *     tags: [Service]
 *     security:
 *      - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Successfully created the service
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 */
router.post("", authMiddleware, createService);
/**
 * @swagger
 * /Service/{id}:
 *   put:
 *     tags: [Service]
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
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       '200':
 *         description: Successfully update service
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 */
router.put("/:id", authMiddleware, updateService);
/**
 * @swagger
 * /Service/{id}:
 *   delete:
 *     tags: [Service]
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
 *         description: Successfully deleted service
 */
router.delete("/:id", authMiddleware, deleteService);

export default router;
