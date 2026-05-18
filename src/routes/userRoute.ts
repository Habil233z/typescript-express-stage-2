import { Router } from "express";
import { getUsers, createUser, transferPoint } from "../controllers/userController";
import { validate } from "../middlewares/validate";
import { transferPointSchema } from "../validations/transferSchema";
import { transferHandler } from "../middlewares/transferHandler";

const router = Router()

router.get('/', getUsers)
router.post('/', createUser)
router.post('/transfer', validate(transferPointSchema), transferHandler, transferPoint)

export default router