import { Router } from "express";
import { getProfile, getProfilebyId, createProfile } from "../controllers/userController";

const router = Router()

router.get('/profile', getProfile)
router.get('/profile/:id', getProfilebyId)
router.post('/profile', createProfile)

export default router