import express from "express";
import { Register, Login } from "../Controller/userController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorization } from "../Middleware/roleMiddleware.js";
const router = express.Router();
router.post("/register", Register);
router.post("/Login", Login);
router.post("/createproduct", protect, authorization("admin"), (req, res) => {
  res.json({ message: "product created successfully" });
});

export default router;
