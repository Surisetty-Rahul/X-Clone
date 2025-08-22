import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.route.js";

import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

app.use(cookieParser()); // to parse cookies

app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);

connectMongoDB().then(()=>{
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
   });
});
