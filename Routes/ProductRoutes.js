import express from "express";
import {
  createProduct,
  getproduct,
  getproductbyID,
  updateproduct,
  deleteproduct,
} from "../Controller/productController.js";
import router from "./UserRoutes.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorization } from "../Middleware/roleMiddleware.js";

const productrouter = express.Router();
productrouter.get("/", getproduct);
productrouter.get("/:id", getproductbyID);

productrouter.post("/", protect, authorization("admin"), createProduct);
productrouter.put("/:id", protect, authorization("admin"), updateproduct);
productrouter.delete("/:id", protect, authorization("admin"), deleteproduct);

export default productrouter;
