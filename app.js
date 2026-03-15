import express from "express";
import cors from "cors";
import UserRoutes from "../PatakaBackend/Routes/UserRoutes.js";
import productrouter from "./Routes/ProductRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", UserRoutes);
app.use("/api/products", productrouter);

export default app;
