var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/branch_id/:branch_id", async function (req, res) {
  //   let rows = await knex("tb_fee").count({ price: "price", date: "created_at"});
  let rows = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .count("price","active")
    .groupBy("dates")
    .select("tb_fee.price as price", "tb_fee.created_at as dates")
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  //   res.send(rows);
  res.send(JSON.stringify(rows));
});

// router.get("/branch_id/:branch_id", async function (req, res) {
//   let rows = await db("tb_fee")
//     .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
//     .sum("price as price")
//     .groupBy("price")
//     .select("tb_fee.created_at as created_at")
//     .where("tb_fee.branch_id", "=", req.params.branch_id);
//   res.send(JSON.stringify(rows));
// });
 
router.get("/feeperyear_total/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_fee")
    .sum("price as price")
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send({ peryears: rows });
});


module.exports = router;
