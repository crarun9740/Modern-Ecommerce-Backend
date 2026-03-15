import express from "express";
import {
  createProduct,
  getproduct,
  getproductbyID,
  updateproduct,
  deleteproduct,
  getproductbycategory,
} from "../Controller/productController.js";
import router from "./UserRoutes.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorization } from "../Middleware/roleMiddleware.js";

const productrouter = express.Router();
productrouter.get("/", getproduct);
productrouter.get("/:id", getproductbyID);

productrouter.post(
  "/createproduct",
  protect,
  authorization("admin"),
  createProduct,
);
productrouter.put(
  "/updateproduct/:id",
  protect,
  authorization("admin"),
  updateproduct,
);
productrouter.delete(
  "/deleteproduct/:id",
  protect,
  authorization("admin"),
  deleteproduct,
);
productrouter.get("/category/categoryid", getproductbycategory);
export default productrouter;
