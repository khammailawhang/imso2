const express = require("express");
const router = express.Router();
const db = require("../lib/dbconn.js");
const multer = require("multer");
const mysql = require("mysql");

var path = require("path");
var DIR = "./uploads";
let storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, DIR);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

let upload = multer({ storage: storage });
router.post("/create", upload.single("logo"), function(req, res) {
  message: "Error! in image upload.";
  if (!req.file) {
    console.log("No file received");
    message = "Error! in image upload.";
    res.send({ message: message, status: "danger" });
  } else {
    console.log("file received");
    console.log(req);
    var sql =
      "INSERT INTO tb_organization (organization_name,no_organization,phone,mobile,email,facebook,website,youtube,address,logo,status) VALUES ('" +
      req.body.organization_name +
      "','" +
      req.body.no_organization +
      "','" +
      req.body.phone +
      "','" +
      req.body.mobile +
      "','" +
      req.body.email +
      "','" +
      req.body.facebook +
      "','" +
      req.body.website +
      "','" +
      req.body.youtube +
      "','" +
      req.body.address +
      "','" +
      req.file.filename +
      "','" +
      req.body.status +
      "')";
    var query = db.query(sql, function(err, rs) {
      res.send({ status: true });
    });
  }
});

module.exports = router;
