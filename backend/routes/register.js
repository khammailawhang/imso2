var express = require("express");
var router = express.Router();
var db = require("../lib/db.js");

router.get("/price", async function (req, res) {
  let rows;
  if (req.query.type_id) {
    rows = await db("tb_fee_setting").where("type_id", "=", req.query.type_id);
  } else {
    rows = await db("tb_fee_setting");
  }
  res.send({
    status: true,
    prices: rows,
  });
});

router.get("/getFeePrice", async function (req, res) {
  let rows;
  if (req.query.model_id) {
    rows = await db("tb_fee_setting")
      // .innerJoin('tb_model','tb_fee_setting.model_id','tb_model.model_id')
      // .innerJoin('tb_type','tb_fee_setting.type_id','=','tb_type.type_id')
      // .select('tb_fee_setting.fs_id as fs_id','tb_fee_setting.price as price','tb_type.type_id as type_id','tb_type.name as TName','tb_model.model_id as model_id','tb_model.name as MName')
      .where("model_id", "=", req.query.model_id);
  } else {
    rows = await db("tb_fee_setting");
  }
  res.send({
    status: true,
    getFS: rows,
  });
});

router.get("/", async function (req, res) {
  let rows = await db("tb_register")
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
    .select(
      "tb_register.register_id as register_id",
      "tb_register.gender",
      "tb_register.owner_name",
      "tb_register.phone",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "tb_district.name as DName",
      "tb_village.name as VName",
      "tb_type_register.name as TRName",
      "tb_register.platc_no as platc_no",
      "tb_register.register_id as register_id",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_color.name as CName",
      "tb_register.steering_wheel as steering_wheel",
      "tb_register.fuel as fuel",
      "tb_register.platc_no as platc_no",
      "tb_register.cylinder as cylinder",
      "tb_register.cylinder_size_cc as cylinder_size_cc",
      "tb_register.engine_no as engine_no",
      "tb_register.chassis_no as chassis_no",
      "tb_register.width as width",
      "tb_register.length as length",
      "tb_register.height as height",
      "tb_register.passenger_scats as passenger_scats",
      "tb_register.vehicle_weight as vehicle_weight",
      "tb_register.max_loading as max_loading",
      "tb_register.total_weight as total_weight",
      "tb_register.created_at as created_at",
      "tb_register.price as price",
      "tb_register.created_at as created_at"
    )
    .orderBy("tb_register.created_at", "desc");
  res.send({
    status: true,
    registers: rows,
  });
});

router.get("/", async function (req, res) {
  let rows = await db("tb_register")
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")

    .select(
      "tb_register.register_id as register_id",
      "tb_register.gender",
      "tb_register.owner_name",
      "tb_register.phone",
      "tb_model.name as MName",
      // "users.username as UserName",
      // "users.phone as UserPhone",
      // "tb_branch.name as BranchName",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "tb_district.name as DName",
      "tb_village.name as VName",
      "tb_type_register.name as TRName",
      "tb_register.platc_no as platc_no",
      "tb_register.register_id as register_id",
      "tb_type.name as TName",
      "tb_color.name as CName",
      "tb_register.price as price",
      "tb_register.steering_wheel as steering_wheel",
      "tb_register.fuel as fuel",
      "tb_register.platc_no as platc_no",
      "tb_register.cylinder as cylinder",
      "tb_register.cylinder_size_cc as cylinder_size_cc",
      "tb_register.engine_no as engine_no",
      "tb_register.chassis_no as chassis_no",
      "tb_register.width as width",
      "tb_register.length as length",
      "tb_register.height as height",
      "tb_register.passenger_scats as passenger_scats",
      "tb_register.vehicle_weight as vehicle_weight",
      "tb_register.max_loading as max_loading",
      "tb_register.total_weight as total_weight",
      "tb_register.created_at as created_at",
      "tb_register.price as price",
      "tb_register.created_at as created_at"
    )
    .orderBy("tb_register.created_at", "desc");
  res.send({
    status: true,
    registers: rows,
  });
});
router.post("/create", async function (req, res) {
  let rows = await db("tb_register").insert({
    owner_name: req.body.owner_name,
    gender: req.body.gender,
    phone: req.body.phone,
    province_id: req.body.province_id,
    district_id: req.body.district_id,
    village_id: req.body.village_id,
    use_id: req.body.use_id,
    tr_id: req.body.tr_id,
    model_id: req.body.model_id,
    type_id: req.body.type_id,
    color_id: req.body.color_id,
    price: req.body.price,
    platc_no: req.body.platc_no,
    steering_wheel: req.body.steering_wheel,
    fuel: req.body.fuel,
    cylinder: req.body.cylinder,
    cylinder_size_cc: req.body.cylinder_size_cc,
    engine_no: req.body.engine_no,
    chassis_no: req.body.chassis_no,
    width: req.body.width,
    length: req.body.length,
    height: req.body.height,
    passenger_scats: req.body.passenger_scats,
    vehicle_weight: req.body.vehicle_weight,
    max_loading: req.body.max_loading,
    total_weight: req.body.total_weight
  });
  return res.send({ msg: true });
});

router.get("/register_id/:register_id", async function (req, res) {
  let row = await db("tb_register")
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")

    .select(
      "tb_register.owner_name",
      "tb_register.gender",
      "tb_register.phone",
      "tb_village.name as VName",
      "tb_village.village_id as village_id",
      "tb_district.name as DName",
      "tb_district.district_id as district_id",
      "tb_province.name as PName",
      "tb_province.province_id as province_id",
      "tb_use.use_id as use_id",
      "tb_use.name as UName",
      "tb_type_register.name as TRName",
      "tb_type_register.tr_id as tr_id",
      "tb_register.register_id as register_id",
      "tb_register.platc_no as platc_no",
      "tb_register.price as price",
      "tb_register.steering_wheel as steering_wheel",
      "tb_register.fuel as fuel",
      "tb_register.cylinder as cylinder",
      "tb_register.cylinder_size_cc as cylinder_size_cc",
      "tb_register.engine_no as engine_no",
      "tb_register.chassis_no as chassis_no",
      "tb_register.width as width",
      "tb_register.length as length",
      "tb_register.height as height",
      "tb_register.passenger_scats as passenger_scats",
      "tb_register.vehicle_weight as vehicle_weight",
      "tb_register.max_loading as max_loading",
      "tb_register.total_weight as total_weight",
      "tb_register.created_at as created_at",
      "tb_model.name as MName",
      "tb_model.model_id as model_id",
      "tb_type.name as TName",
      "tb_type.type_id as type_id",
      "tb_color.name as CName",
      "tb_color.color_id as color_id"
    )
    .where("register_id", "=", req.params.register_id);
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    registers: row[0],
  });
});

router.get("/created_at=:created_at", async function (req, res) {
  let row = await db("tb_register").where(
    "created_at",
    "=",
    req.params.created_at
  );
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    registers: row[0],
  });
});

router.get("/owner_name=:owner_name&phone=:phone", async function (req, res) {
  let row = await db("tb_register").where({
    owner_name: req.params.owner_name,
    phone: req.params.phone,
  });
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    registers: row[0],
  });
});

router.get("/created_at/:start_date/:end_date", async function (
  req,
  res
) {
  let row = await db("tb_register").whereBetween("created_at", [
    start_date,
    end_date,
  ]);
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    registers: row[0],
  });
});

router.get("/owner_name/:owner_name", async function (req, res) {
  let row = await db("tb_register").where(
    "owner_name",
    "=",
    req.params.owner_name
  );
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    registers: row[0],
  });
});



router.put("/update", async function (req, res) {
  await db("tb_register").where({ register_id: req.body.register_id }).update({
    owner_name: req.body.owner_name,
    gender: req.body.gender,
    phone: req.body.phone,
    province_id: req.body.province_id,
    district_id: req.body.district_id,
    village_id: req.body.village_id,
    use_id: req.body.use_id,
    tr_id: req.body.tr_id,
    model_id: req.body.model_id,
    type_id: req.body.type_id,
    color_id: req.body.color_id,
    price: req.body.price,
    platc_no: req.body.platc_no,
    steering_wheel: req.body.steering_wheel,
    fuel: req.body.fuel,
    cylinder: req.body.cylinder,
    cylinder_size_cc: req.body.cylinder_size_cc,
    engine_no: req.body.engine_no,
    chassis_no: req.body.chassis_no,
    width: req.body.width,
    length: req.body.length,
    height: req.body.height,
    passenger_scats: req.body.passenger_scats,
    vehicle_weight: req.body.vehicle_weight,
    max_loading: req.body.max_loading,
    total_weight: req.body.total_weight,
    created_at: req.body.created_at,
  });
  res.send({ ok: true });
});

router.delete("/delete/:register_id", async function (req, res) {
  await db("tb_register")
    .where("register_id", req.params.register_id)
    .del()
    .then(function (tb_register) {
      db.select()
        .from("tb_register")
        .then(function (tb_register) {
          res.send({ status: true, tb_register });
        });
    });
});

module.exports = router;
