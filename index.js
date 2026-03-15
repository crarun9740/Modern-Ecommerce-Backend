import app from "../PatakaBackend/app.js";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";

dotenv.config();

const port = process.env.PORT;

connectDb();

app.listen(port, () => {
  console.log(`Server is Running on Port is ${port}`);
});
