import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


// create a default home route
router.get("/", getProducts)

router.post("/",createProduct)


//api endpoint for update products
router.put("/:id",updateProduct)

// create api endpoint to delete products
router.delete("/:id",deleteProduct)



export default router;