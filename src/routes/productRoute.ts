import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController";
import { validate } from "../middlewares/validate";
import { createProductSchema } from "../validations/productSchema";

const router = Router()

router.post("/", validate(createProductSchema), createProduct)
router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router