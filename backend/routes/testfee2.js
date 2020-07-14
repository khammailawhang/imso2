var express = require("express");
var router = express.Router();

var db = require("../lib/db");

router.get("/model", async function(req, res) {
  let rows;
  if (req.query.model_id) {
    rows = await db("tb_fee_setting")
      .innerJoin("tb_model", "tb_fee_setting.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_fee_setting.type_id", "tb_type.type_id")
      .select(
        "tb_model.model_id as model_id",
        "tb_model.name as ModelName",
        "tb_type.type_id as type_id",
        "tb_type.name as TName",
        "tb_fee_setting.price as price",
        "tb_fee_setting.fs_id as fs_id"
      )
      .where("model_id", "=", req.query.model_id);
  } else {
    rows = await db("tb_fee_setting")
    .innerJoin("tb_model", "tb_fee_setting.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_fee_setting.type_id", "tb_type.type_id")
    .select(
      "tb_model.model_id as model_id",
      "tb_model.name as ModelName",
      "tb_type.type_id as type_id",
      "tb_type.name as TName",
      "tb_fee_setting.price as price",
      "tb_fee_setting.fs_id as fs_id"
    )
  }
  res.send({
    status: true,
    models: rows
  });
});

router.get("/type", async function(req, res) {
  let row;
  if (req.query.model_id) {
    row = await db("tb_fee_setting")
    .where("model_id", "=", req.query.model_id);
  } else {
    row = await db("tb_fee_setting")
  }
  res.send({
    status: true,
    types: row
  });
});

router.get('/gettype',async function(req,res){
  let rows
  if(req.query.type_id){
    rows = await db('tb_fee_setting')
    .innerJoin('tb_type','tb_fee_setting.type_id','tb_type.type_id')
    .select('tb_type.type_id as type_id','tb_type.name as TypeName','tb_fee_setting.price as price','tb_fee_setting.fs_id as fs_id')
    .where('type_id','=',req.query.type_id)
  }else{
    rows = await db('tb_fee_setting')
    .innerJoin('tb_type','tb_fee_setting.type_id','tb_type.type_id')
    .select('tb_type.type_id as type_id','tb_type.name as TypeName','tb_fee_setting.price as price','tb_fee_setting.fs_id as fs_id')
  }
  res.send({
    status:true,
    gettypes:rows
  })
  
})

router.get("/price", async function(req, res) {
  let row;
  if (req.query.type_id) {
    row = await db("tb_fee_setting").where("type_id", "=", req.query.type_id);
  } else {
    row = await db("tb_fee_setting");
  }
  res.send({
    status: true,
    prices: row
  });
});

module.exports = router;
