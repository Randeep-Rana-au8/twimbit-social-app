import expressAsyncHandler from "express-async-handler";
import Post from "../models/postModel.js";

// @desc    Create a Product
// @access  Private
// @routes  POST /api/posts
const createPost = expressAsyncHandler(async (req, res) => {
  const { title, image, description } = req.body;

  const post = new Post({
    title,
    user: req.user._id,
    image,
    description,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

export { createPost };
