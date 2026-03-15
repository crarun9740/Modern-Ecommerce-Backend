import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../Controller/categoryController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorization } from "../Middleware/roleMiddleware.js";

const categoryRouter = express.Router();
categoryRouter.post("/", protect, authorization("admin"), createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.put(
  "/updatecategory/:id",
  protect,
  authorization("admin"),
  updateCategory,
);
categoryRouter.delete(
  "/deletecategory/:id",
  protect,
  authorization("admin"),
  deleteCategory,
);
export default categoryRouter;
