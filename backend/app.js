import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import colors from "colors";
import cors from "cors";
import path from "path";
import { createPost, getPosts } from "./controllers/postController.js";

const port = process.env.PORT || 6000;
const app = express();
connectDb();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`App is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold);
});
