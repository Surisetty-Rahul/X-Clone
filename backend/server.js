import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

app.use(cookieParser()); // to parse cookies

app.use("/api/auth",authRouter);

connectMongoDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
   });
});
