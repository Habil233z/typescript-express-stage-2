import { Router } from "express";
import { register, login } from "../controllers/authController";
import { upload } from "../lib/multer";
import { validate } from "../middlewares/validate";
import { loginSchema } from "../validations/loginSchema";

const router = Router()

router.post("/register", upload.single("image"), register)
router.post("/login", validate(loginSchema) , login)

export default router