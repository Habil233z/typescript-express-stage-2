import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from "../controllers/productController";
import { validate } from "../middlewares/validate";
import { createProductSchema } from "../validations/productSchema";
import { authentication } from "../middlewares/authMiddleware";
import { authorizeRole } from "../middlewares/authorizeRole";
import { upload } from "../lib/multer";

const router = Router()

router.post("/", authentication, upload.single("image"), validate(createProductSchema), createProduct)
router.get("/", authentication, authorizeRole(["ADMIN"]), getAllProducts)
router.get("/:id", getProductById)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router