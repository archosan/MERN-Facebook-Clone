const bcrypt = require("bcrypt");
const User = require("../models/User");
//REGISTER USER
exports.registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
//LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({ email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.status(200).json(user);
          } else {
            res.status(400).json("password is not correct");
          }
        });
      } else {
        res.status(400).json("user not found");
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
