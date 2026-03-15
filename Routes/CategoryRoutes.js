import express from "express";
import { createCategory } from "../Controller/categoryController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorization } from "../Middleware/roleMiddleware.js";

const categoryRouter = express.Router();
router.post("/", protect, authorization("admin"), createCategory);
export default categoryRouter;
