import { Router } from "express";
import { getHello, getProfilebyName, login } from "../controllers/userController";

const router = Router()

router.get('/profile', getHello)
router.get('/profile/:id', getProfilebyName)
router.post('/profile', login)

export default router