const express = require("express");
const router = express.Router();
const postsControllers = require("../controllers/postControllers");

router.route("/:id").get(postsControllers.getPostById);
router.route("/").get(postsControllers.getAllPost);
router.route("/").post(postsControllers.createPost);
router.route("/:id").put(postsControllers.updatePost);
router.route("/:id/like").put(postsControllers.likePost);
router.route("/:id").delete(postsControllers.deletePost);
module.exports = router;
