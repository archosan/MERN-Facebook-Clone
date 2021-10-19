const Post = require("../models/Post");
//create a post
exports.createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
//update post
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === post.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("update succesfully");
    } else {
      res.status(500).json("you can only update your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.userId === post.userId) {
      await post.deleteOne();
      res.status(200).json("delete succesfully");
    } else {
      res.status(500).json("you can only delete your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//like a post
exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      res.status(200).json("post has been liked");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      res.status(200).json("post has been dislike");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//get a post
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
//get all post
exports.getAllPost = async (req, res) => {
  let postArray = [];
  try {
    postArray = await Post.find().sort(-"createdAt");
    res.status(200).json(postArray);
  } catch (error) {
    res.status(500).json(error);
  }
};
