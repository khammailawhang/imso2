var express = require("express");
var router = express.Router();
var db = require("../lib/db");
router.get("/", async function(req, res, next) {
    let row = await db("tb_color").orderBy("created_at", "desc");
    res.json({
        // status: true,
        colors: row
    });
});
router.post("/create", async function(req, res) {
    let rows = await db("tb_color").insert({
        name: req.body.name
    });
    return res.send({ ok: true });
});

router.get("/color_id/:color_id", async function(req, res) {
    let row = await db("tb_color").where("color_id", "=", req.params.color_id);
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        colors: row[0]
    });
});

// Filter
router.get("/filter", async function (req, res) {
  let rows;
  let start = req.query.start_date;
  let end = req.query.end_date;
  if (start && end) {
    rows = await db("tb_color").whereBetween("created_at", [start, end]);
  } else {
    rows = await db("tb_color");
  }
  res.send({
    status: true,
    colors: rows,
  });
});

router.get("/a", async function (req, res) {
  let rows;
  let from = req.query.fromdate;
  let to = req.query.todate;
  if (from && to) {
    rows = await db("tb_color").whereBetween("created_at", [from, to]);
  } else {
    rows = await db("tb_color");
  }
  res.send({
    status: true,
    colors: rows,
  });
});

router.put("/update", async function(req, res) {
    await db("tb_color")
        .where({ color_id: req.body.color_id })
        .update({
            name: req.body.name
        });
    res.send({ ok: true });
});

router.get("/delete", async function(req, res) {
    let row = await db("tb_color").where({ color_id: 1 });
    res.send({
        status: true,
        user: row
    });
});
router.delete("/delete/:color_id", async function(req, res) {
    await db("tb_color")
        .where("color_id", req.params.color_id)
        .del()
        .then(function(tb_color) {
            db.select()
                .from("tb_color")
                .then(function(tb_color) {
                    res.send({ status: true, tb_color });
                });
        });
});

module.exports = router;