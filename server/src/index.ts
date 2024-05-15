import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "../routes/user.routes";
import { conenctDB } from "../config/dbConfig";

dotenv.config();
const port = process.env.PORT || 8000;
conenctDB()

const app = express();

// app middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app routes
app.use("/users/api/", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
