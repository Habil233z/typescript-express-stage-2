import { Router } from "express";
import { getUsers, createUser, transferPoint } from "../controllers/userController";

const router = Router()

router.get('/', getUsers)
router.post('/', createUser)
router.post('/transfer', transferPoint)

export default router