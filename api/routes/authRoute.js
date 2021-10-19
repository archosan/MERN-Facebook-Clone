const router = require("express").Router();
const auhtController = require("../controllers/authController");

router.route("/register").post(auhtController.registerUser);

router.route("/login").post(auhtController.loginUser);

module.exports = router;
