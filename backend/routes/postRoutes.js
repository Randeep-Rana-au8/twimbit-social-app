import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";
import { protect } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.route("/").post(protect, createPost).get(getPosts);

export default Router;
