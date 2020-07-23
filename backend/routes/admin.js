var express = require("express");
var router = express.Router();
var db = require("../lib/db");

router.get("/day", async function (req, res) {
  //   let rows = await knex("tb_fee").count({ price: "price", date: "created_at"});
  let rows = await db("tb_fee").select(
    "tb_fee.price as price",
    "tb_fee.created_at as date"
  );
  //   res.send(rows);
  res.send(JSON.stringify(rows));
});

router.get("/", async function (req, res) {
  //   let rows = await knex("tb_fee").count({ price: "price", date: "created_at"});
  let rows = await db("tb_fee").select(
    "tb_fee.price as price",
    "tb_fee.created_at as date"
  );
  //   res.send(rows);
  res.send(JSON.stringify(rows));
});

router.get("/month", async function (req, res) {
  let rows = await db("tb_fee")
    .sum("price as price")
    .groupBy("price")
    .orderBy("created_at", "desc")
    .select("created_at");
  res.send(JSON.stringify(rows));
});
router.get("/permonth", async function (req, res) {
  let rows = await db("tb_fee").sum("price as price");
  res.send({ permonths: rows });
});

router.get("/year", async function (req, res) {
  let rows = await db("tb_fee")
    .sum("price as price")
    .groupBy("price")
    .select("created_at");
  res.send(JSON.stringify(rows));
});
router.get("/peryear", async function (req, res) {
  let rows = await db("tb_fee").sum("price as price");
  res.send({ peryears: rows });
});

router.get("/total_income", async function (req, res) {
  let rows = await db("tb_fee").sum("price as price");
  res.send({ incomes: rows });
});

router.get("/car", async function (req, res) {
  let rows = await db("tb_register").count("register_id as register_id");
  res.send({ cars: rows });
});
router.get("/inspection", async function (req, res) {
  let rows = await db("tb_inspection").count("inspection_id as inspection_id");
  res.send({ inspections: rows });
});
router.get("/fee", async function (req, res) {
  let rows = await db("tb_fee").count("fee_id as fee_id");
  res.send({ fees: rows });
});



router.get("/admin/model", async function (req, res) {
  let rows = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .count("inspection_id as inspection_id")
    .groupBy("name")
    .orderBy("name", "desc")
    .select(
      "tb_fee.created_at as created_at",
      "tb_fee.price as price",

      "tb_model.model_id as model_id",
      "tb_model.name as name"
    )
  res.send(JSON.stringify(rows));
});

router.get("/admin/type", async function (req, res) {
  let rows = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .count("inspection_id as inspection_id")
    .groupBy("TName")
    .orderBy("TName", "desc")
    .select(
      "tb_fee.created_at as created_at",
      "tb_fee.price as price",
      "tb_type.type_id as type_id",
      "tb_type.name as TName"
    )
  res.send(JSON.stringify(rows));
});


module.exports = router;
