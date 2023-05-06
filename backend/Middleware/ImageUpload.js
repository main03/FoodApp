const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(express.json());


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
   
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
   
  },
});

const upload = multer({ storage: storage });

module.exports = upload;