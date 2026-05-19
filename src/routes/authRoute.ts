import { Router } from "express";
import { register, login } from "../controllers/authController";
import { upload } from "../lib/multer";
import { validate } from "../middlewares/validate";
import { registerSchema } from "../validations/registerSchema";

const router = Router()

router.post("/register", upload.single("image"), register)
router.post("/login", login)

export default router