var express = require("express");
var router = express.Router();

var db = require("../lib/db");
router.get("/", async function (req, res, next) {
  let row = await db("tb_model").orderBy("created_at", "desc");
  res.send({
    status: true,
    models: row,
  });
});

router.post("/create", async function (req, res) {
  let rows = await db("tb_model").insert({
    name: req.body.name,
  });
  res.send({ msg: true });
});

// router.post("/create", async function(req, res) {
//   let rows = await db("tb_model").insert({
//     name: req.body.name,
//     status: req.body.status
//   });
//   return res.send({ ok: true });
// });

router.get("/model_id/:model_id", async function (req, res) {
  let row = await db("tb_model").where("model_id", "=", req.params.model_id);
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    // status: true,
    models: row[0],
  });
});

router.put("/update", async function (req, res) {
  await db("tb_model").where({ model_id: req.body.model_id }).update({
    name: req.body.name,
    price: req.body.price,
    // status: req.body.status
  });
  res.send({ ok: true });
});

router.delete("/delete/:model_id", async function (req, res) {
  await db("tb_model")
    .where("model_id", req.params.model_id)
    .del()
    .then(function (tb_model) {
      db.select()
        .from("tb_model")
        .then(function (tb_model) {
          // res.send({ status: true, tb_model });
        });
    });
});

router.get("/model/branch_id/:branch_id", async function (req, res) {
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
    .count("fee_id as fee_id")
    .groupBy("name")
    .orderBy("name", "desc")
    .select(
      "tb_fee.created_at as created_at",
      "tb_fee.price as price",
      "tb_model.model_id as model_id",
      "tb_model.name as name"
    )
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send(JSON.stringify(rows));
});

router.get("/type/branch_id/:branch_id", async function (req, res) {
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
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .count("fee_id as fee_id")
    .groupBy("TName")
    .orderBy("TName", "desc")
    .select(
      "tb_fee.created_at as created_at",
      "tb_fee.price as price",
      "tb_type.type_id as type_id",
      "tb_type.name as TName"
    )
    .where("tb_fee.branch_id", "=", req.params.branch_id);
  res.send(JSON.stringify(rows));
});

module.exports = router;
