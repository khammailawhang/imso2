var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_fee")
    .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
    .innerJoin(
      "tb_inspection",
      "tb_fee.inspection_id",
      "tb_inspection.inspection_id"
    )
    .innerJoin(
      "tb_register",
      "tb_inspection.register_id",
      "tb_register.register_id"
    )
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .distinct("tb_model.model_id as model_id")
    .count("fee_id")
    .groupBy("model_id")
    .select("tb_model.name as MName","tb_model.model_id as model_id","tb_fee.fee_id as fee_id")
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send(JSON.stringify(rows));
});

module.exports = router;
