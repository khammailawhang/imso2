var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_register")
    ;
  res.send(JSON.stringify(rows));
});

module.exports = router;
