var express = require("express");
var router = express.Router();
var db = require("../lib/db.js");

var conn = require("../lib/dbconn");

// ລາຍງານຈໍານວນລົດ ທັງໝົດ
router.get("/inspection/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id")
    .where("tb_inspection.branch_id", "=", req.params.branch_id);

  res.send({ inspectionsall: rows });
});
// ລາຍງານຈໍານວນລົດ ທັງໝົດ
router.get("/admin/inspection", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id");

  res.send({ inspectionsall: rows });
});

// ລາຍງານຈໍານວນລົດ ໃຊ້ງານ
router.get("/inspectionstatu/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id")
    .where("expired_at", ">", db.fn.now())
    .where("tb_inspection.branch_id", "=", req.params.branch_id);
  // .orderBy("tb_inspection.created_at", "desc");

  res.send({ inspectionstatu: rows });
});
// ລາຍງານຈໍານວນລົດ ໃຊ້ງານ
router.get("/admin/inspectionstatu", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id")
    .where("expired_at", ">", db.fn.now());
  // .orderBy("tb_inspection.created_at", "desc");

  res.send({ inspectionstatu: rows });
});
// ລາຍງານຈໍານວນລົດໝົດອາຍຸ

router.get("/inspectionsend/branch_id/:branch_id", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id")
    .where("expired_at", "<", db.fn.now())
    .where("tb_inspection.branch_id", "=", req.params.branch_id);
  // .orderBy("tb_inspection.created_at", "desc");

  res.send({ inspectionsend: rows });
});
// ລາຍງານຈໍານວນລົດໝົດອາຍຸ

router.get("/admin/inspectionsend", async function (req, res) {
  let rows = await db("tb_inspection")
    .count("inspection_id as inspection_id")
    .where("expired_at", "<", db.fn.now());
  // .orderBy("tb_inspection.created_at", "desc");

  res.send({ inspectionsend: rows });
});

router.get("/all/branch_id/:branch_id", async function (req, res) {
  let row = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin(
      "tb_fee",
      "tb_inspection.fee_id",
      "tb_fee.fee_id"
    )
    .innerJoin(
      "tb_register",
      "tb_fee.register_id",
      "tb_register.register_id"
    )
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
    .innerJoin("users", "tb_inspection.users_id", "users.users_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .select(
      "tb_register.register_id as register_id",
      "tb_register.owner_name as owner_name",
      "tb_register.gender as gender",
      "tb_register.phone as phone",
      "tb_register.platc_no as platc_no",
      "tb_register.steering_wheel",
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
      "tb_branch.name as branchname",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_type.price as PiName",
      "tb_type_register.name as TRName",
      "tb_color.name as CName",
      "tb_village.name as VName",
      "tb_district.name as DName",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "users.name as nameu",
      "tb_inspection.inspection_id as inspection_id",
      "tb_fee.register_id as register_id",
      "tb_inspection.fee_id as fee_id",

      "tb_inspection.brk_m as brk_m",
      "tb_inspection.brk_s as brk_s",
      "tb_inspection.cy_c as cy_c",
      "tb_inspection.re_m as re_m",
      "tb_inspection.v_w as v_w",
      "tb_inspection.s_n as s_n",
      "tb_inspection.handier as handier",
      "tb_inspection.am as am",
      "tb_inspection.side_slip as side_slip",
      "tb_inspection.pedal as pedal",

      "tb_inspection.hose as hose",
      "tb_inspection.reservoir_tank as reservoir_tank",
      "tb_inspection.tire as tire",
      "tb_inspection.wheel as wheel",
      "tb_inspection.bolt as bolt",
      "tb_inspection.chock_absorber as chock_absorber",
      "tb_inspection.spring as spring",
      "tb_inspection.air_cleaner as air_cleaner",
      "tb_inspection.fan_belt as fan_belt",
      "tb_inspection.radiator as radiator",

      "tb_inspection.carburator as carburator",
      "tb_inspection.injection_pump as injection_pump",
      "tb_inspection.co2 as co2",
      "tb_inspection.co as co",
      "tb_inspection.hc as hc",
      "tb_inspection.clutch as clutch",
      "tb_inspection.gear_lever as gear_lever",
      "tb_inspection.drive_shaft as drive_shaft",
      "tb_inspection.universal_join as universal_join",
      "tb_inspection.muffler as muffler",

      "tb_inspection.db as db",
      "tb_inspection.batterry as batterry",
      "tb_inspection.light as light",
      "tb_inspection.horn as horn",
      "tb_inspection.indictor_light as indictor_light",
      "tb_inspection.brake_light as brake_light",
      "tb_inspection.side_light as side_light",
      "tb_inspection.rear_light as rear_light",
      "tb_inspection.mirror as mirror",
      "tb_inspection.wiper as wiper",

      "tb_inspection.qr as qr",
      "tb_inspection.created_at as created_at",
      "tb_inspection.expired_at as expired_at",
      "tb_inspection.branch_id as branch_id"
    )
    .where("tb_inspection.branch_id", "=", req.params.branch_id)
    .orderBy("tb_inspection.created_at", "desc");
  res.send({
    status: true,
    inspections: row,
  });
});



// Admin All inspection
router.get("/admin/all", async function (req, res) {
  let row = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
    .innerJoin("users", "tb_inspection.users_id", "users.users_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .select(
      "tb_register.register_id as register_id",
      "tb_register.owner_name as owner_name",
      "tb_register.gender as gender",
      "tb_register.phone as phone",
      "tb_register.platc_no as platc_no",
      "tb_register.steering_wheel",
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
      "tb_branch.name as branchname",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_type.price as PiName",
      "tb_type_register.name as TRName",
      "tb_color.name as CName",
      "tb_village.name as VName",
      "tb_district.name as DName",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "users.name as nameu",
      "tb_inspection.inspection_id as inspection_id",
      "tb_inspection.fee_id as fee_id",

      "tb_inspection.brk_m as brk_m",
      "tb_inspection.brk_s as brk_s",
      "tb_inspection.cy_c as cy_c",
      "tb_inspection.re_m as re_m",
      "tb_inspection.v_w as v_w",
      "tb_inspection.s_n as s_n",
      "tb_inspection.handier as handier",
      "tb_inspection.am as am",
      "tb_inspection.side_slip as side_slip",
      "tb_inspection.pedal as pedal",

      "tb_inspection.hose as hose",
      "tb_inspection.reservoir_tank as reservoir_tank",
      "tb_inspection.tire as tire",
      "tb_inspection.wheel as wheel",
      "tb_inspection.bolt as bolt",
      "tb_inspection.chock_absorber as chock_absorber",
      "tb_inspection.spring as spring",
      "tb_inspection.air_cleaner as air_cleaner",
      "tb_inspection.fan_belt as fan_belt",
      "tb_inspection.radiator as radiator",

      "tb_inspection.carburator as carburator",
      "tb_inspection.injection_pump as injection_pump",
      "tb_inspection.co2 as co2",
      "tb_inspection.co as co",
      "tb_inspection.hc as hc",
      "tb_inspection.clutch as clutch",
      "tb_inspection.gear_lever as gear_lever",
      "tb_inspection.drive_shaft as drive_shaft",
      "tb_inspection.universal_join as universal_join",
      "tb_inspection.muffler as muffler",

      "tb_inspection.db as db",
      "tb_inspection.batterry as batterry",
      "tb_inspection.light as light",
      "tb_inspection.horn as horn",
      "tb_inspection.indictor_light as indictor_light",
      "tb_inspection.brake_light as brake_light",
      "tb_inspection.side_light as side_light",
      "tb_inspection.rear_light as rear_light",
      "tb_inspection.mirror as mirror",
      "tb_inspection.wiper as wiper",

      "tb_inspection.qr as qr",
      "tb_inspection.created_at as created_at",
      "tb_inspection.expired_at as expired_at",
      "tb_inspection.branch_id as branch_id"
    )
    .orderBy("tb_inspection.created_at", "desc");
  res.send({
    status: true,
    inspections: row,
  });
});


// Filter
router.get("/admin/all_fetch", async function (req, res) {
  let rows;
  let start = req.query.start_date;
  let end = req.query.end_date;
  if (start && end) {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .orderBy("tb_inspection.created_at", "desc")
      .whereBetween("tb_inspection.created_at", [start, end]);
  } else {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .orderBy("tb_inspection.created_at", "desc");
  }
  res.send({
    status: true,
    inspections: rows,
  });
});



// admin expense

router.get("/admin", async function (req, res) {
  let row = await db("tb_fee")
    .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
    .select(
      "tb_fee.fee_id as fee_id",
      "tb_fee.price as price",
      "tb_fee.status as status",
      "tb_fee.created_at as created_at",
      "tb_fee.users_id as users_id",
      "tb_register.register_id as register_id",
      "tb_register.owner_name as owner_name",
      "tb_register.gender as gender",
      "tb_register.phone as phone",
      "tb_register.platc_no as platc_no",
      "tb_register.steering_wheel",
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
      "tb_register.owner_name as owner_name",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_type.price as PiName",
      "tb_color.name as CName",
      "tb_province.name as PName",
      "tb_type_register.name as TRName",
      "tb_inspection.inspection_id as inspection_id",
      "tb_inspection.fee_id as fee_id",

      "tb_inspection.brk_m as brk_m",
      "tb_inspection.brk_s as brk_s",
      "tb_inspection.cy_c as cy_c",
      "tb_inspection.re_m as re_m",
      "tb_inspection.v_w as v_w",
      "tb_inspection.s_n as s_n",
      "tb_inspection.handier as handier",
      "tb_inspection.am as am",
      "tb_inspection.side_slip as side_slip",
      "tb_inspection.pedal as pedal",

      "tb_inspection.hose as hose",
      "tb_inspection.reservoir_tank as reservoir_tank",
      "tb_inspection.tire as tire",
      "tb_inspection.wheel as wheel",
      "tb_inspection.bolt as bolt",
      "tb_inspection.chock_absorber as chock_absorber",
      "tb_inspection.spring as spring",
      "tb_inspection.air_cleaner as air_cleaner",
      "tb_inspection.fan_belt as fan_belt",
      "tb_inspection.radiator as radiator",

      "tb_inspection.carburator as carburator",
      "tb_inspection.injection_pump as injection_pump",
      "tb_inspection.co2 as co2",
      "tb_inspection.co as co",
      "tb_inspection.hc as hc",
      "tb_inspection.clutch as clutch",
      "tb_inspection.gear_lever as gear_lever",
      "tb_inspection.drive_shaft as drive_shaft",
      "tb_inspection.universal_join as universal_join",
      "tb_inspection.muffler as muffler",

      "tb_inspection.db as db",
      "tb_inspection.batterry as batterry",
      "tb_inspection.light as light",
      "tb_inspection.horn as horn",
      "tb_inspection.indictor_light as indictor_light",
      "tb_inspection.brake_light as brake_light",
      "tb_inspection.side_light as side_light",
      "tb_inspection.rear_light as rear_light",
      "tb_inspection.mirror as mirror",
      "tb_inspection.wiper as wiper",

      "tb_inspection.status as status"
      // 'tb_inspection.created_at as created_at',
    )
    .orderBy("tb_fee.created_at", "desc");
  if (row.length === 0) {
    res.send({ status: false });
  }
  res.send({
    status: true,
    fees: row,
  });
});


// Filter
router.get("/admin/filter", async function (req, res) {
  let rows;
  let start = req.query.start_date;
  let end = req.query.end_date;
  if (start && end) {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )
      .select(
        "tb_fee.fee_id as ລະຫັດເສຍຄ່າທຳນຽມ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_fee.price as ລາຄາ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .orderBy("tb_fee.created_at", "desc")
      .whereBetween("tb_fee.created_at", [start, end]);
  } else {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )
      .select(
        "tb_fee.fee_id as ລະຫັດເສຍຄ່າທຳນຽມ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_fee.price as ລາຄາ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .orderBy("tb_fee.created_at", "desc");
  }
  res.send({
    status: true,
    fees: rows,
  });
});


// all inspection
//ກໍານົດສິດເຂົ້າໃຊ້ງານຂອງສາຂາ ແລະ ໜ້າສະແດງພິມໃບບຶນ
router.get("/admin/inspection/all/active", async function (req, res) {
  let row = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
    .innerJoin("users", "tb_inspection.users_id", "users.users_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")

    .select(
      "tb_register.register_id as register_id",
      "tb_register.owner_name as owner_name",
      "tb_register.gender as gender",
      "tb_register.phone as phone",
      "tb_register.platc_no as platc_no",
      "tb_register.steering_wheel",
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
      "tb_branch.name as branchname",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_type.price as PiName",
      "tb_type_register.name as TRName",
      "tb_color.name as CName",
      "tb_village.name as VName",
      "tb_district.name as DName",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "users.name as nameu",
      "tb_inspection.inspection_id as inspection_id",
      "tb_inspection.fee_id as fee_id",

      "tb_inspection.brk_m as brk_m",
      "tb_inspection.brk_s as brk_s",
      "tb_inspection.cy_c as cy_c",
      "tb_inspection.re_m as re_m",
      "tb_inspection.v_w as v_w",
      "tb_inspection.s_n as s_n",
      "tb_inspection.handier as handier",
      "tb_inspection.am as am",
      "tb_inspection.side_slip as side_slip",
      "tb_inspection.pedal as pedal",

      "tb_inspection.hose as hose",
      "tb_inspection.reservoir_tank as reservoir_tank",
      "tb_inspection.tire as tire",
      "tb_inspection.wheel as wheel",
      "tb_inspection.bolt as bolt",
      "tb_inspection.chock_absorber as chock_absorber",
      "tb_inspection.spring as spring",
      "tb_inspection.air_cleaner as air_cleaner",
      "tb_inspection.fan_belt as fan_belt",
      "tb_inspection.radiator as radiator",

      "tb_inspection.carburator as carburator",
      "tb_inspection.injection_pump as injection_pump",
      "tb_inspection.co2 as co2",
      "tb_inspection.co as co",
      "tb_inspection.hc as hc",
      "tb_inspection.clutch as clutch",
      "tb_inspection.gear_lever as gear_lever",
      "tb_inspection.drive_shaft as drive_shaft",
      "tb_inspection.universal_join as universal_join",
      "tb_inspection.muffler as muffler",

      "tb_inspection.db as db",
      "tb_inspection.batterry as batterry",
      "tb_inspection.light as light",
      "tb_inspection.horn as horn",
      "tb_inspection.indictor_light as indictor_light",
      "tb_inspection.brake_light as brake_light",
      "tb_inspection.side_light as side_light",
      "tb_inspection.rear_light as rear_light",
      "tb_inspection.mirror as mirror",
      "tb_inspection.wiper as wiper",
      "tb_inspection.qr as qr",
      "tb_inspection.created_at as created_at",
      "tb_inspection.expired_at as expired_at",
      "tb_inspection.branch_id as branch_id"
    )
    .where("expired_at", ">", db.fn.now())
    .orderBy("tb_inspection.created_at", "desc");
  res.send({
    status: true,
    inspections: row,
  });
});

// all inspection
//ກໍານົດສິດເຂົ້າໃຊ້ງານຂອງສາຂາ ແລະ ໜ້າສະແດງພິມໃບບຶນ
router.get("/admin/inspection/all/expired", async function (req, res) {
  let row = await db("tb_inspection")
    .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
    .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
    .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
    .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
    .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
    .innerJoin(
      "tb_type_register",
      "tb_register.tr_id",
      "tb_type_register.tr_id"
    )
    .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
    .innerJoin(
      "tb_province",
      "tb_register.province_id",
      "tb_province.province_id"
    )
    .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
    .innerJoin("users", "tb_inspection.users_id", "users.users_id")
    .innerJoin(
      "tb_district",
      "tb_register.district_id",
      "tb_district.district_id"
    )
    .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")

    .select(
      "tb_register.register_id as register_id",
      "tb_register.owner_name as owner_name",
      "tb_register.gender as gender",
      "tb_register.phone as phone",
      "tb_register.platc_no as platc_no",
      "tb_register.steering_wheel",
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
      "tb_branch.name as branchname",
      "tb_model.name as MName",
      "tb_type.name as TName",
      "tb_type.price as PiName",
      "tb_type_register.name as TRName",
      "tb_color.name as CName",
      "tb_village.name as VName",
      "tb_district.name as DName",
      "tb_province.name as PName",
      "tb_use.name as UName",
      "users.name as nameu",
      "tb_inspection.inspection_id as inspection_id",
      "tb_inspection.fee_id as fee_id",

      "tb_inspection.brk_m as brk_m",
      "tb_inspection.brk_s as brk_s",
      "tb_inspection.cy_c as cy_c",
      "tb_inspection.re_m as re_m",
      "tb_inspection.v_w as v_w",
      "tb_inspection.s_n as s_n",
      "tb_inspection.handier as handier",
      "tb_inspection.am as am",
      "tb_inspection.side_slip as side_slip",
      "tb_inspection.pedal as pedal",

      "tb_inspection.hose as hose",
      "tb_inspection.reservoir_tank as reservoir_tank",
      "tb_inspection.tire as tire",
      "tb_inspection.wheel as wheel",
      "tb_inspection.bolt as bolt",
      "tb_inspection.chock_absorber as chock_absorber",
      "tb_inspection.spring as spring",
      "tb_inspection.air_cleaner as air_cleaner",
      "tb_inspection.fan_belt as fan_belt",
      "tb_inspection.radiator as radiator",

      "tb_inspection.carburator as carburator",
      "tb_inspection.injection_pump as injection_pump",
      "tb_inspection.co2 as co2",
      "tb_inspection.co as co",
      "tb_inspection.hc as hc",
      "tb_inspection.clutch as clutch",
      "tb_inspection.gear_lever as gear_lever",
      "tb_inspection.drive_shaft as drive_shaft",
      "tb_inspection.universal_join as universal_join",
      "tb_inspection.muffler as muffler",

      "tb_inspection.db as db",
      "tb_inspection.batterry as batterry",
      "tb_inspection.light as light",
      "tb_inspection.horn as horn",
      "tb_inspection.indictor_light as indictor_light",
      "tb_inspection.brake_light as brake_light",
      "tb_inspection.side_light as side_light",
      "tb_inspection.rear_light as rear_light",
      "tb_inspection.mirror as mirror",
      "tb_inspection.wiper as wiper",
      "tb_inspection.qr as qr",
      "tb_inspection.created_at as created_at",
      "tb_inspection.expired_at as expired_at",
      "tb_inspection.branch_id as branch_id"
    )
    .where("expired_at", "<", db.fn.now())
    .orderBy("tb_inspection.created_at", "desc");
  res.send({
    status: true,
    inspections: row,
  });
});


// Active
router.get("/admin/inspection/active", async function (req, res) {
  let rows;
  let start = req.query.start_date;
  let end = req.query.end_date;
  if (start && end) {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .where("tb_inspection.expired_at", ">", db.fn.now())
      .orderBy("tb_inspection.created_at", "desc")
      .whereBetween("tb_inspection.created_at", [start, end]);
  } else {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .where("tb_inspection.expired_at", ">", db.fn.now())
      .orderBy("tb_inspection.created_at", "desc");
  }
  res.send({
    status: true,
    inspections: rows,
  });
});


// Expired
router.get("/admin/inspection/expired", async function (req, res) {
  let rows;
  let start = req.query.start_date;
  let end = req.query.end_date;
  if (start && end) {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee","tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register","tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_fee.fee_id as ລະຫັດເສຍຄ່າທຳນຽມ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .where("tb_inspection.expired_at", "<", db.fn.now())
      .orderBy("tb_inspection.created_at", "desc")
      .whereBetween("tb_inspection.created_at", [start, end]);
  } else {
    rows = await db("tb_inspection")
      .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
      .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
      .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
      .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
      .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
      .innerJoin(
        "tb_type_register",
        "tb_register.tr_id",
        "tb_type_register.tr_id"
      )
      .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
      .innerJoin(
        "tb_province",
        "tb_register.province_id",
        "tb_province.province_id"
      )
      .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
      .innerJoin("users", "tb_inspection.users_id", "users.users_id")
      .innerJoin(
        "tb_district",
        "tb_register.district_id",
        "tb_district.district_id"
      )
      .innerJoin(
        "tb_village",
        "tb_register.village_id",
        "tb_village.village_id"
      )

      .select(
        "tb_fee.fee_id as ລະຫັດເສຍຄ່າທຳນຽມ",
        "tb_register.owner_name as ເຈົ້າຂອງລົດ",
        "tb_register.gender as ເພດ",
        "tb_register.phone as ເບີໂທລະສັບ",
        "tb_province.name as ແຂວງ",
        "tb_branch.name as ສາຂາ",
        "tb_type_register.name as ປະເພດທະບຽນ",
        "tb_register.platc_no as ເລກທະບຽນ",
        "tb_model.name as ຍີ່ຫໍ້",
        "tb_type.name as ປະເພດ",
        "tb_color.name as ສີ",
        "tb_inspection.created_at as ວັນທີ"
      )
      .where("expired_at", "<", db.fn.now())
      .orderBy("tb_inspection.created_at", "desc");
  }
  res.send({
    status: true,
    inspections: rows,
  });
});



module.exports = router;
