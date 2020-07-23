var express = require("express");
var router = express.Router();
var db = require("../lib/db");

// ລາຍງານກວດເຕັກນິກ All
router.get("/total_income/branch_id/:branch_id", async function(req, res) {
    let rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .sum("price as price")
      .where("tb_inspection.branch_id", "=", req.params.branch_id);
    res.send({ totalincomes: rows });
});

router.get("/car", async function(req, res) {
    let rows = await db("tb_register")
        .count("register_id as register_id");
    res.send({ cars: rows });
});
router.get("/inspection/branch_id/:branch_id", async function(req, res) {
    let rows = await db("tb_inspection")
        .count("inspection_id as inspection_id")
        .where("tb_inspection.branch_id", "=", req.params.branch_id);
    res.send({ inspections: rows });
});

router.get("/fee/branch_id/:branch_id", async function(req, res) {
    let rows = await db("tb_fee")
        .count("fee_id as fee_id")
        .where("tb_fee.branch_id", "=", req.params.branch_id);
    res.send({ fees: rows });
});

router.get("/income/branch_id/:branch_id", async function(req, res) {
    let rows = await db("tb_fee")
        .sum("price as price")
        .where("tb_fee.branch_id", "=", req.params.branch_id);
    res.send({ incomes: rows });
});

router.get('/', async function(req, res) {
    let rows = await db("tb_fee")
        .select(db.raw("date_add(?, INTERVAL ? day)", [knex.fn.now(), 30]));


    res.send({ fees: rows })
})

module.exports = router;