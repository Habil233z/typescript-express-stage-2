import { Router } from "express";
import { getUsers, transferPoint } from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { transferPointSchema } from "../validations/transferSchema";
import { transferHandler } from "../middlewares/transferHandler";
import { authentication } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', authentication ,getUsers)
router.post('/transfer', authentication, validate(transferPointSchema), transferHandler, transferPoint)

export default router