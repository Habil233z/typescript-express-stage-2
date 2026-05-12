import { Router } from "express";
import { getHello, getProfilebyName, login } from "../controllers/userController";

const router = Router()

router.get('/hello', getHello)
router.get('/profile/:name', getProfilebyName)
router.post('/login', login)

export default router