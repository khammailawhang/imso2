var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_fee")
    .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
    .sum("price as price")
    .groupBy("price")
    .select("tb_fee.created_at as created_at")
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send(JSON.stringify(rows));
});
module.exports = router;
