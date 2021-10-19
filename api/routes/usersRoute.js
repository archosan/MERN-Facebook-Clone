const router = require("express").Router();

const User = require("../models/User");
const usersController = require("../controllers/usersController");

router.route("/:id").put(usersController.updateUser);

router.route("/:id").delete(usersController.deleteUser);

router.route("/:id").get(usersController.getUser);

module.exports = router;
