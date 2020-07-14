var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_fee")
    .sum("price as price")
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send({ peryears: rows });
});

module.exports = router;
