const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const usersRoute = require("./routes/usersRoute");
const postsRoute = require("./routes/postsRoute");
const authRoute = require("./routes/authRoute");
const app = express();
const path = require("path");

dotenv.config();

//connect to Database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected succesfully");
  });
app.use("/images", express.static(path.join(__dirname, "/public/images")));
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profFile") {
      cb(null, "public/profImg");
    } else {
      console.log(file.fieldname);
      cb(null, "public/images");
    }
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "profFile", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);
app.post("/api/upload", upload, (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is Listening on ${process.env.PORT}`);
});
