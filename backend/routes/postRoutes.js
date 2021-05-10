import express from "express";
import { createPost } from "../controllers/postController.js";
const Router = express.Router();

Router.route("/").post(createPost);

export default Router;
