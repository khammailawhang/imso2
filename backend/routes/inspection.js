var express = require("express");
var router = express.Router();
var db = require("../lib/db.js");

var conn = require("../lib/dbconn");

//Expired date
// router.get("/expired/branch_id/:branch_id", async function(req, res) {
//     let row = await db("tb_inspection")
//       .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
//       .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
//       .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
//       .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
//       .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
//       .innerJoin(
//         "tb_type_register",
//         "tb_register.tr_id",
//         "tb_type_register.tr_id"
//       )
//       .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
//       .innerJoin(
//         "tb_province",
//         "tb_register.province_id",
//         "tb_province.province_id"
//       )
//       .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
//       .innerJoin(
//         "tb_district",
//         "tb_register.district_id",
//         "tb_district.district_id"
//       )
//       .innerJoin(
//         "tb_village",
//         "tb_register.village_id",
//         "tb_village.village_id"
//       )

//       .select(
//         "tb_register.owner_name as owner_name",
//         "tb_register.gender as gender",
//         "tb_register.phone as phone",
//         "tb_register.platc_no as platc_no",
//         "tb_model.name as MName",
//         "tb_type.name as TName",
//         "tb_type.price as PiName",
//         "tb_type_register.name as TRName",
//         "tb_color.name as CName",
//         "tb_village.name as VName",
//         "tb_district.name as DName",
//         "tb_province.name as PName",
//         "tb_inspection.inspection_id as inspection_id",
//         "tb_inspection.created_at as created_at",
//         "tb_inspection.expired_at as expired_at",
//         "tb_inspection.branch_id as branch_id"
//       )
//       // .count("inspection_id as inspection_id")
//       .where("expired_at", "<", db.fn.now())
//       .where("tb_inspection.branch_id", "=", req.params.branch_id)
//       .orderBy("tb_inspection.created_at", "desc");
//     res.send({
//         status: true,
//         inspections: row,
//     });
// });

// Filter
router.get("/report/branch_id/:branch_id", async function(req, res) {
    let rows;
    let start = req.query.start_date;
    let end = req.query.end_date;
    if (start && end) {
        rows = await db("tb_inspection")
            .innerJoin(
                "tb_branch",
                "tb_inspection.branch_id",
                "tb_branch.branch_id"
            )
            .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc")
            .whereBetween("tb_inspection.created_at", [start, end]);
    } else {
        rows = await db("tb_inspection")
            .innerJoin(
                "tb_branch",
                "tb_inspection.branch_id",
                "tb_branch.branch_id"
            )
            .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc");
    }
    res.send({
        status: true,
        inspections: rows,
    });
});


// Active
router.get("/active/branch_id/:branch_id", async function(req, res) {
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc")
            .whereBetween("tb_inspection.created_at", [start, end]);
    } else {
        rows = await db("tb_inspection")
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
            .innerJoin(
                "tb_village",
                "tb_register.village_id",
                "tb_village.village_id"
            )

        .select(
                "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
                "tb_register.owner_name as ເຈົ້າຂອງລົດ",
                "tb_register.gender as ເພດ",
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc");
    }
    res.send({
        status: true,
        inspections: rows,
    });
});


// Expired
router.get("/expired/branch_id/:branch_id", async function(req, res) {
    let rows;
    let start = req.query.start_date;
    let end = req.query.end_date;
    if (start && end) {
        rows = await db("tb_inspection")
            .innerJoin(
                "tb_branch",
                "tb_inspection.branch_id",
                "tb_branch.branch_id"
            )
            .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
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
            .innerJoin(
                "tb_village",
                "tb_register.village_id",
                "tb_village.village_id"
            )

        .select(
                "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
                "tb_register.owner_name as ເຈົ້າຂອງລົດ",
                "tb_register.gender as ເພດ",
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc")
            .whereBetween("tb_inspection.created_at", [start, end]);
    } else {
        rows = await db("tb_inspection")
            .innerJoin(
                "tb_branch",
                "tb_inspection.branch_id",
                "tb_branch.branch_id"
            )
            .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
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
            .innerJoin(
                "tb_village",
                "tb_register.village_id",
                "tb_village.village_id"
            )

        .select(
                "tb_inspection.inspection_id as ລະຫັດກວດກາເທັກນິກ",
                "tb_register.owner_name as ເຈົ້າຂອງລົດ",
                "tb_register.gender as ເພດ",
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
            .where("tb_inspection.branch_id", "=", req.params.branch_id)
            .orderBy("tb_inspection.created_at", "desc");
    }
    res.send({
        status: true,
        inspections: rows,
    });
});


//Admin expired Page

// router.get("/adminexpired", async function(req, res) {
//     let row = await db("tb_inspection")
//         .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
//         .innerJoin(
//             "tb_register",
//             "tb_inspection.register_id",
//             "tb_register.register_id"
//         )
//         .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
//         .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
//         .innerJoin(
//             "tb_type_register",
//             "tb_register.tr_id",
//             "tb_type_register.tr_id"
//         )
//         .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
//         .innerJoin(
//             "tb_province",
//             "tb_register.province_id",
//             "tb_province.province_id"
//         )
//         .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
//         .innerJoin(
//             "tb_district",
//             "tb_register.district_id",
//             "tb_district.district_id"
//         )
//         .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")

//     .select(
//             "tb_register.register_id as register_id",
//             "tb_register.owner_name as owner_name",
//             "tb_register.gender as gender",
//             "tb_register.phone as phone",
//             "tb_register.platc_no as platc_no",
//             "tb_register.steering_wheel",
//             "tb_register.fuel as fuel",
//             "tb_register.cylinder as cylinder",
//             "tb_register.cylinder_size_cc as cylinder_size_cc",
//             "tb_register.engine_no as engine_no",
//             "tb_register.chassis_no as chassis_no",
//             "tb_register.width as width",
//             "tb_register.length as length",
//             "tb_register.height as height",
//             "tb_register.passenger_scats as passenger_scats",
//             "tb_register.vehicle_weight as vehicle_weight",
//             "tb_register.max_loading as max_loading",
//             "tb_register.total_weight as total_weight",
//             "tb_model.name as MName",
//             "tb_type.name as TName",
//             "tb_type.price as PiName",
//             "tb_type_register.name as TRName",
//             "tb_color.name as CName",
//             "tb_village.name as VName",
//             "tb_district.name as DName",
//             "tb_province.name as PName",
//             "tb_use.name as UName",
//             "tb_inspection.inspection_id as inspection_id",
//             "tb_inspection.register_id as register_id",

//             "tb_inspection.brk_m as brk_m",
//             "tb_inspection.brk_s as brk_s",
//             "tb_inspection.cy_c as cy_c",
//             "tb_inspection.re_m as re_m",
//             "tb_inspection.v_w as v_w",
//             "tb_inspection.s_n as s_n",
//             "tb_inspection.handier as handier",
//             "tb_inspection.am as am",
//             "tb_inspection.side_slip as side_slip",
//             "tb_inspection.pedal as pedal",

//             "tb_inspection.hose as hose",
//             "tb_inspection.reservoir_tank as reservoir_tank",
//             "tb_inspection.tire as tire",
//             "tb_inspection.wheel as wheel",
//             "tb_inspection.bolt as bolt",
//             "tb_inspection.chock_absorber as chock_absorber",
//             "tb_inspection.spring as spring",
//             "tb_inspection.air_cleaner as air_cleaner",
//             "tb_inspection.fan_belt as fan_belt",
//             "tb_inspection.radiator as radiator",

//             "tb_inspection.carburator as carburator",
//             "tb_inspection.injection_pump as injection_pump",
//             "tb_inspection.co2 as co2",
//             "tb_inspection.co as co",
//             "tb_inspection.hc as hc",
//             "tb_inspection.clutch as clutch",
//             "tb_inspection.gear_lever as gear_lever",
//             "tb_inspection.drive_shaft as drive_shaft",
//             "tb_inspection.universal_join as universal_join",
//             "tb_inspection.muffler as muffler",

//             "tb_inspection.db as db",
//             "tb_inspection.batterry as batterry",
//             "tb_inspection.light as light",
//             "tb_inspection.horn as horn",
//             "tb_inspection.indictor_light as indictor_light",
//             "tb_inspection.brake_light as brake_light",
//             "tb_inspection.side_light as side_light",
//             "tb_inspection.rear_light as rear_light",
//             "tb_inspection.mirror as mirror",
//             "tb_inspection.wiper as wiper",

//             "tb_inspection.photo as photo",
//             "tb_inspection.created_at as created_at",
//             "tb_inspection.expired_at as expired_at",
//             "tb_inspection.branch_id as branch_id"
//         )
//         .where("expired_at", "<", db.fn.now())
//         .orderBy("tb_inspection.created_at", "desc");
//     res.send({
//         status: true,
//         inspections: row,
//     });
// });

//Not yet expired
// router.get("/list/branch_id/:branch_id", async function (req, res) {
//   let row = conn.query(
//     "SELECT * FROM tb_inspection as i join tb_branch as b ON i.branch_id = b.branch_id join tb_register as r ON i.register_id = r.register_id join tb_model as m ON r.model_id = m.model_id join tb_type as t ON r.type_id = t.type_id join tb_color as c ON r.color_id = c.color_id join tb_type_register as tr on r.tr_id = tr.tr_id join tb_province as p on r.province_id  = p.province_id join tb_district as d on r.district_id = d.district_id join tb_village as v on r.village_id=v.village_id   WHERE inspection_id NOT IN (SELECT inspection_id FROM tb_inspection WHERE expired_at < NOW())",
//     function (err, rs) {
//       res.end(JSON.stringify({ inspections: rs }));
//     }
//   );
// });

router.get("/list/branch_id/:branch_id", async function(req, res) {
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
            "tb_model.name as MName",
            "tb_type.name as TName",
            "tb_type.price as PiName",
            "tb_type_register.name as TRName",
            "tb_color.name as CName",
            "tb_village.name as VName",
            "tb_district.name as DName",
            "tb_province.name as PName",
            "tb_use.name as UName",
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

            "tb_inspection.photo as photo",
            "tb_inspection.created_at as created_at",
            "tb_inspection.expired_at as expired_at",
            "tb_inspection.branch_id as branch_id"
        )
        .where("expired_at", ">", db.fn.now())
        .where("tb_inspection.branch_id", "=", req.params.branch_id)
        .orderBy("tb_inspection.created_at", "desc");
    res.send({
        status: true,
        inspections: row,
    });
});
//ກໍານົດສິດເຂົ້າໃຊ້ງານຂອງສາຂາ ແລະ ໜ້າສະແດງພິມໃບບຶນ
router.get("/branch_id/:branch_id", async function(req, res) {
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
        .innerJoin(
            "tb_village",
            "tb_register.village_id",
            "tb_village.village_id"
        )
        .innerJoin(
            "tablecarcohc",
            "tb_inspection.idcarcohc",
            "tablecarcohc.idcarcohc"
        )
        .innerJoin(
            "tablecardata",
            "tb_inspection.idAcceptNo",
            "tablecardata.idAcceptNo"
        )

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
            "tb_inspection.reservoir_tank as reservoir_tank", // ເຕົ້ານໍ້າມັນເບກ
            "tb_inspection.tire as tire", //ລົມຢາງຕີນລົດ
            "tb_inspection.wheel as wheel", //ຕີນລົດ
            "tb_inspection.bolt as bolt", //ນ໋ອດລໍ້
            "tb_inspection.chock_absorber as chock_absorber", //ຊົກອັບ
            "tb_inspection.spring as spring", //ໄສ້ເສືອ
            "tb_inspection.air_cleaner as air_cleaner", //ໝໍ້ກອງອາກາດ
            "tb_inspection.fan_belt as fan_belt", //ສາຍພານ
            "tb_inspection.radiator as radiator", //ໝໍ້ນໍ້າ

            "tb_inspection.carburator as carburator", //ຄາບິວ
            "tb_inspection.injection_pump as injection_pump", //ປໍ້າຊີດ
            "tb_inspection.co2 as co2", //
            "tb_inspection.co as co", // co
            "tb_inspection.hc as hc", // hc
            "tb_inspection.clutch as clutch", // ຈານຄາດ
            "tb_inspection.gear_lever as gear_lever", //ເກັຍ
            "tb_inspection.drive_shaft as drive_shaft", //ກາກດັ່ງ
            "tb_inspection.universal_join as universal_join", //ກາກບາດ
            "tb_inspection.muffler as muffler", // ທໍ່ອາຍເສັຍ

            "tb_inspection.db as db", //ລະດັບສຽງ
            "tb_inspection.batterry as batterry", // ໝໍ້ໄຟ
            "tb_inspection.light as light", //ໄຟຕາ
            "tb_inspection.horn as horn", //ແກ
            "tb_inspection.indictor_light as indictor_light", //ໄຟລ້ຽວ
            "tb_inspection.brake_light as brake_light", //ໄຟແບກ
            "tb_inspection.side_light as side_light", //ໄຟຕາລີ
            "tb_inspection.rear_light as rear_light", //ໝໍ້ໄຟ
            "tb_inspection.mirror as mirror", //ແວ່ນສ່ອງຫລັງ
            "tb_inspection.wiper as wiper", //ຝອຍປັດນໍ້າຝົນ

            // "tb_inspection.photo as photo",
            "tb_inspection.qr as qr",
            "tb_inspection.created_at as created_at",
            "tb_inspection.expired_at as expired_at",
            "tb_inspection.branch_id as branch_id",

            // ດຶ່ງ ຈາກ  access co, hc table co tablecarcohc
            "tablecarcohc.TstL_CO2 as co2access",
            "tablecarcohc.TstL__CO as coaccess",
            "tablecarcohc.TstL__HC as hcaccess",
            // ເບຣກຕີນ
            "tablecardata.Brk_L_FF as LFF",
            "tablecardata.Brk_R_FF as RFF",
            "tablecardata.BSum__FF as SFF",
            "tablecardata.BDiff_RF as RF",

            "tablecardata.Brk_L_RM as LRM",
            "tablecardata.Brk_R_RM as RRM",
            "tablecardata.BSum__RF as SRM",
            "tablecardata.BDiff_RM as RM",

            "tablecardata.Brk_L_RR as LRR",
            "tablecardata.Brk_R_RR as RRR",
            "tablecardata.BSum__RR as SRR",
            "tablecardata.BDiff_RR as RR",

            "tablecardata.Brk_L_RF as LRF",
            "tablecardata.Brk_R_RF as RRF",
            "tablecardata.BSum__RF as SRF",
            "tablecardata.BDiff_PB as PB",
            //Brk__SUM ລວມເບຣກ
            "tablecardata.Brk__SUM as BSUM",
            // ເບຣກມື
            "tablecardata.BSum__PB as PBSUM",

            // ເບຣກສຸກເສີນ
            "tablecardata.BSumP_PK as PKSUM",

            "tb_inspection.status as status",
            "tb_inspection.printed as printed",
            "tb_inspection.photo as photo"
        )
        .where("expired_at", ">", db.fn.now())
        .where("tb_inspection.branch_id", "=", req.params.branch_id)
        .orderBy("tb_inspection.created_at", "desc");
    res.send({
        status: true,
        inspections: row,
    });
});


// router.get("/expired_date/branch_id/:branch_id", async function(req, res) {
//     let row = await db("tb_inspection")
//       .innerJoin("tb_branch", "tb_inspection.branch_id", "tb_branch.branch_id")
//       .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
//       .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
//       .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
//       .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
//       .innerJoin(
//         "tb_type_register",
//         "tb_register.tr_id",
//         "tb_type_register.tr_id"
//       )
//       .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
//       .innerJoin(
//         "tb_province",
//         "tb_register.province_id",
//         "tb_province.province_id"
//       )
//       .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
//       .innerJoin("users", "tb_inspection.users_id", "users.users_id")
//       .innerJoin(
//         "tb_district",
//         "tb_register.district_id",
//         "tb_district.district_id"
//       )
//       .innerJoin(
//         "tb_village",
//         "tb_register.village_id",
//         "tb_village.village_id"
//       )

//       .select(
//         "tb_register.register_id as register_id",
//         "tb_register.owner_name as owner_name",
//         "tb_register.gender as gender",
//         "tb_register.phone as phone",
//         "tb_register.platc_no as platc_no",
//         "tb_register.steering_wheel",
//         "tb_register.fuel as fuel",
//         "tb_register.cylinder as cylinder",
//         "tb_register.cylinder_size_cc as cylinder_size_cc",
//         "tb_register.engine_no as engine_no",
//         "tb_register.chassis_no as chassis_no",
//         "tb_register.width as width",
//         "tb_register.length as length",
//         "tb_register.height as height",
//         "tb_register.passenger_scats as passenger_scats",
//         "tb_register.vehicle_weight as vehicle_weight",
//         "tb_register.max_loading as max_loading",
//         "tb_register.total_weight as total_weight",
//         "tb_branch.name as branchname",
//         "tb_model.name as MName",
//         "tb_type.name as TName",
//         "tb_type.price as PiName",
//         "tb_type_register.name as TRName",
//         "tb_color.name as CName",
//         "tb_village.name as VName",
//         "tb_district.name as DName",
//         "tb_province.name as PName",
//         "tb_use.name as UName",
//         "users.name as nameu",
//         "tb_inspection.inspection_id as inspection_id",
//         "tb_inspection.fee_id as fee_id",

//         "tb_inspection.brk_m as brk_m",
//         "tb_inspection.brk_s as brk_s",
//         "tb_inspection.cy_c as cy_c",
//         "tb_inspection.re_m as re_m",
//         "tb_inspection.v_w as v_w",
//         "tb_inspection.s_n as s_n",
//         "tb_inspection.handier as handier",
//         "tb_inspection.am as am",
//         "tb_inspection.side_slip as side_slip",
//         "tb_inspection.pedal as pedal",

//         "tb_inspection.hose as hose",
//         "tb_inspection.reservoir_tank as reservoir_tank",
//         "tb_inspection.tire as tire",
//         "tb_inspection.wheel as wheel",
//         "tb_inspection.bolt as bolt",
//         "tb_inspection.chock_absorber as chock_absorber",
//         "tb_inspection.spring as spring",
//         "tb_inspection.air_cleaner as air_cleaner",
//         "tb_inspection.fan_belt as fan_belt",
//         "tb_inspection.radiator as radiator",

//         "tb_inspection.carburator as carburator",
//         "tb_inspection.injection_pump as injection_pump",
//         "tb_inspection.co2 as co2",
//         "tb_inspection.co as co",
//         "tb_inspection.hc as hc",
//         "tb_inspection.clutch as clutch",
//         "tb_inspection.gear_lever as gear_lever",
//         "tb_inspection.drive_shaft as drive_shaft",
//         "tb_inspection.universal_join as universal_join",
//         "tb_inspection.muffler as muffler",

//         "tb_inspection.db as db",
//         "tb_inspection.batterry as batterry",
//         "tb_inspection.light as light",
//         "tb_inspection.horn as horn",
//         "tb_inspection.indictor_light as indictor_light",
//         "tb_inspection.brake_light as brake_light",
//         "tb_inspection.side_light as side_light",
//         "tb_inspection.rear_light as rear_light",
//         "tb_inspection.mirror as mirror",
//         "tb_inspection.wiper as wiper",

//         "tb_inspection.photo as photo",
//         "tb_inspection.qr as qr",
//         "tb_inspection.created_at as created_at",
//         "tb_inspection.expired_at as expired_at",
//         "tb_inspection.branch_id as branch_id"
//       )
//       .where("expired_at", "<", db.fn.now())
//       .where("tb_inspection.branch_id", "=", req.params.branch_id)
//       .orderBy("tb_inspection.created_at", "desc");
//     res.send({

//         status: true,
//         inspections: row,
//     });
// });
// Expired date

// ດື່ງຂໍ້ມູນຈາກກວດກາເຕັກນິກ ໜ້າສະແດງພິມໃບບຶນ
// router.get('/', async function(req, res, next) {
//     let row = await db('tb_inspection')
//         .innerJoin('tb_register', 'tb_inspection.register_id', 'tb_register.register_id')
//         .innerJoin('tb_model', 'tb_register.model_id', 'tb_model.model_id')
//         .innerJoin('tb_type', 'tb_register.type_id', 'tb_type.type_id')
//         .innerJoin('tb_type_register', 'tb_register.tr_id', 'tb_type_register.tr_id')
//         .innerJoin('tb_color', 'tb_register.color_id', 'tb_color.color_id')
//         .innerJoin('tb_province', 'tb_register.province_id', 'tb_province.province_id')
//         .innerJoin('tb_use', 'tb_register.use_id', 'tb_use.use_id')
//         .innerJoin('tb_district', 'tb_register.district_id', 'tb_district.district_id')
//         .innerJoin('tb_village', 'tb_register.village_id', 'tb_village.village_id')
//         .innerJoin('tablecarcohc', 'tb_inspection.idcarcohc', 'tablecarcohc.idcarcohc')
//         .innerJoin('tablecardata', 'tb_inspection.idAcceptNo', 'tablecardata.idAcceptNo')
//         .select(
//             'tb_register.register_id as register_id',
//             'tb_register.owner_name as owner_name',
//             'tb_register.gender as gender',
//             'tb_register.phone as phone',
//             'tb_register.platc_no as platc_no',
//             'tb_register.steering_wheel',
//             'tb_register.fuel as fuel',
//             'tb_register.cylinder as cylinder',
//             'tb_register.cylinder_size_cc as cylinder_size_cc',
//             'tb_register.engine_no as engine_no',
//             'tb_register.chassis_no as chassis_no',
//             'tb_register.width as width',
//             'tb_register.length as length',
//             'tb_register.height as height',
//             'tb_register.passenger_scats as passenger_scats',
//             'tb_register.vehicle_weight as vehicle_weight',
//             'tb_register.max_loading as max_loading',
//             'tb_register.total_weight as total_weight',
//             'tb_register.tr_id as tr_id',
//             'tb_model.name as MName',
//             'tb_type.name as TName',
//             'tb_type.price as PiName',
//             'tb_type_register.name as TRName',

//             'tb_color.name as CName',
//             'tb_village.name as VName',
//             'tb_district.name as DName',
//             'tb_province.name as PName',
//             'tb_use.name as UName',
//             // ດຶ່ງ ຈາກ  access co, hc table co tablecarcohc
//             'tablecarcohc.TstL_CO2 as co2access',
//             'tablecarcohc.TstL__CO as coaccess',
//             'tablecarcohc.TstL__HC as hcaccess',
//             // ເບຣກຕີນ
//             'tablecardata.Brk_L_FF as LFF',
//             'tablecardata.Brk_R_FF as RFF',
//             'tablecardata.BSum__FF as SFF',
//             'tablecardata.BDiff_RF as RF',

//             'tablecardata.Brk_L_RM as LRM',
//             'tablecardata.Brk_R_RM as RRM',
//             'tablecardata.BSum__RF as SRM',
//             'tablecardata.BDiff_RM as RM',

//             'tablecardata.Brk_L_RR as LRR',
//             'tablecardata.Brk_R_RR as RRR',
//             'tablecardata.BSum__RR as SRR',
//             'tablecardata.BDiff_RR as RR',

//             'tablecardata.Brk_L_RF as LRF',
//             'tablecardata.Brk_R_RF as RRF',
//             'tablecardata.BSum__RF as SRF',
//             'tablecardata.BDiff_PB as PB',
//             //Brk__SUM ລວມເບຣກ
//             'tablecardata.Brk__SUM as BSUM',
//             // ເບຣກມື
//             'tablecardata.BSum__PB as PBSUM',

//             // ເບຣກສຸກເສີນ
//             'tablecardata.BSumP_PK as PKSUM',

//             'tb_inspection.inspection_id as inspection_id',
//             'tb_inspection.register_id as register_id',

//             'tb_inspection.brk_m as brk_m',
//             'tb_inspection.brk_s as brk_s',
//             'tb_inspection.cy_c as cy_c',
//             'tb_inspection.re_m as re_m',
//             'tb_inspection.v_w as v_w',
//             'tb_inspection.s_n as s_n',
//             'tb_inspection.handier as handier',
//             'tb_inspection.am as am',
//             'tb_inspection.side_slip as side_slip',
//             'tb_inspection.pedal as pedal',

//             'tb_inspection.hose as hose',
//             'tb_inspection.reservoir_tank as reservoir_tank',
//             'tb_inspection.tire as tire',
//             'tb_inspection.wheel as wheel',
//             'tb_inspection.bolt as bolt',
//             'tb_inspection.chock_absorber as chock_absorber',
//             'tb_inspection.spring as spring',
//             'tb_inspection.air_cleaner as air_cleaner',
//             'tb_inspection.fan_belt as fan_belt',
//             'tb_inspection.radiator as radiator',

//             'tb_inspection.carburator as carburator',
//             'tb_inspection.injection_pump as injection_pump',
//             'tb_inspection.co2 as co2',
//             'tb_inspection.co as co',
//             'tb_inspection.hc as hc',
//             'tb_inspection.clutch as clutch',
//             'tb_inspection.gear_lever as gear_lever',
//             'tb_inspection.drive_shaft as drive_shaft',
//             'tb_inspection.universal_join as universal_join',
//             'tb_inspection.muffler as muffler',

//             'tb_inspection.db as db',
//             'tb_inspection.batterry as batterry',
//             'tb_inspection.light as light',
//             'tb_inspection.horn as horn',
//             'tb_inspection.indictor_light as indictor_light',
//             'tb_inspection.brake_light as brake_light',
//             'tb_inspection.side_light as side_light',
//             'tb_inspection.rear_light as rear_light',
//             'tb_inspection.mirror as mirror',
//             'tb_inspection.wiper as wiper',

//             'tb_inspection.photo as photo',
//             'tb_inspection.status as status',
//             'tb_inspection.created_at as created_at',

//         )
//         .orderBy('tb_inspection.created_at', 'desc')
//     res.send({
//         status: true,
//         inspections: row
//     })
// })

router.get("/payfee", async function(req, res, next) {
    let row = await db("tb_inspection")
        .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
        .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
        .innerJoin(
            "tb_type_register",
            "tb_register.tr_id",
            "tb_type_register.tr_id"
        )
        .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
        .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
        .select(
            "tb_register.register_id as register_id",
            "tb_register.owner_name as owner_name",
            "tb_register.platc_no as platc_no",
            "tb_register.engine_no as engine_no",
            "tb_register.chassis_no as chassis_no",
            "tb_type_register.tr_id as tr_id",
            "tb_type_register.name as TRName",
            "tb_model.model_id as model_id",
            "tb_model.name as MName",
            "tb_type.type_id as type_id",
            "tb_type.name as TName",
            "tb_inspection.inspection_id as inspection_id",
            "tb_inspection.created_at as created_at",

            "tb_inspection.status as status"
        )
        .where("status", "=", "NotPay");
    res.send({
        status: true,
        inspections: row,
    });
});

router.get("/toaccess", async function(req, res, next) {
    let row = await db("tablecardata").orderBy("idAcceptNo", "desc").limit(1);
    res.json({
        // status: true,
        toaccess: row,
    });
});
router.get("/idcarcohcc", async function(req, res, next) {
    let row = await db("tablecarcohc").orderBy("idcarcohc", "desc").limit(1);
    res.json({
        // status: true,
        idcarcohcc: row,
    });
});

router.get("/last", async function(req, res, next) {
    let row = await db("tb_inspection")
        .innerJoin("tb_fee", "tb_inspection.fee_id", "tb_fee.fee_id")
        .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
        .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
        .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
        .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
        .innerJoin("tb_use", "tb_register.use_id", "tb_use.use_id")
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
        .innerJoin(
            "tablecarcohc",
            "tb_inspection.idcarcohc",
            "tablecarcohc.idcarcohc"
        )
        .innerJoin(
            "tablecardata",
            "tb_inspection.idAcceptNo",
            "tablecardata.idAcceptNo"
        )
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
            "tb_register.tr_id as tr_id",
            "tb_model.name as MName",
            "tb_type.name as TName",
            "tb_type.price as PiName",
            "tb_color.name as CName",
            "tb_use.name as UName",
            "tb_province.name as PName",

            // ດຶ່ງຈາກ  access co, hc table co tablecarcohc
            "tablecarcohc.TstL_CO2 as co2access",
            "tablecarcohc.TstL__CO as coaccess",
            "tablecarcohc.TstL__HC as hcaccess",
            // ເບຣກເບຣກ ຕິນ
            "tablecardata.Brk_L_FF as LFF",
            "tablecardata.Brk_R_FF as RFF",
            "tablecardata.BSum__FF as sFF",
            "tablecardata.BDiff_RF as RF",

            "tablecardata.Brk_L_RM as LRM",
            "tablecardata.Brk_R_RM as RRM",
            "tablecardata.BSum__RF as sRF",
            "tablecardata.BDiff_RM as RM",

            "tablecardata.Brk_L_RR as LRR",
            "tablecardata.Brk_R_RR as RRR",
            "tablecardata.BSum__RR as sRR",
            "tablecardata.BDiff_RR as RR",

            "tablecardata.Brk_L_RF as LRF",
            "tablecardata.Brk_R_RF as RRF",
            "tablecardata.BSum__RF as sRF",
            "tablecardata.BDiff_PB as PB",

            //Brk__SUM ລວມເບຣກ
            "tablecardata.Brk__SUM as BSUM",
            // ເບຣກມື
            "tablecardata.BSum__PB as PBSUM",
            // ເບຣກສຸກເສີນ
            "tablecardata.BSumP_PK as PKSUM",

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

            "tb_inspection.photo as photo",
            "tb_inspection.qr as qr",
            // 'tb_inspection.created_at as created_at',
            "tb_inspection.expired_at as expired_at"
        )
        .orderBy("tb_inspection.created_at", "desc")
        .limit(6);
    res.send({
        status: true,
        inspections: row,
    });
});

router.post("/create", async function(req, res) {
    let rows;

    rows = await db("tb_fee")
        .update({
            inspected: req.body.inspected,
        })
        .where("fee_id", "=", req.body.fee_id);

    rows = await db("tb_inspection").insert({
        register_id: req.body.register_id,
        fee_id: req.body.fee_id,
        users_id: req.body.users_id,
        branch_id: req.body.branch_id,
        idAcceptNo: req.body.idAcceptNo,
        idcarcohc: req.body.carcohc,

        brk_m: req.body.brk_m,
        brk_s: req.body.brk_s,
        cy_c: req.body.cy_c,
        re_m: req.body.re_m,
        v_w: req.body.v_w,
        s_n: req.body.s_n,
        handier: req.body.handier,
        am: req.body.am,
        side_slip: req.body.side_slip,
        pedal: req.body.pedal,

        hose: req.body.hose,
        reservoir_tank: req.body.reservoir_tank,
        tire: req.body.tire,
        wheel: req.body.wheel,
        bolt: req.body.bolt,
        chock_absorber: req.body.chock_absorber,
        spring: req.body.spring,
        air_cleaner: req.body.air_cleaner,
        fan_belt: req.body.fan_belt,
        radiator: req.body.radiator,

        carburator: req.body.carburator,
        injection_pump: req.body.injection_pump,
        co2: req.body.co2,
        co: req.body.co,
        hc: req.body.hc,
        clutch: req.body.clutch,
        gear_lever: req.body.gear_lever,
        drive_shaft: req.body.drive_shaft,
        universal_join: req.body.universal_join,
        muffler: req.body.muffler,

        db: req.body.db,
        batterry: req.body.batterry,
        light: req.body.light,
        horn: req.body.horn,
        indictor_light: req.body.indictor_light,
        brake_light: req.body.brake_light,
        side_light: req.body.side_light,
        rear_light: req.body.rear_light,
        mirror: req.body.mirror,
        wiper: req.body.wiper,

        photo: req.body.photo,
        qr: req.body.qr,
        status: req.body.status,
        // created_at: req.body.created_at,
        expired_at: req.body.expired_date,
    });

    // return res.send({msg: true})
    return res.status(201).send({
        msg: true,
    });
});

// router.post("/create", async function(req, res) {
//     let rows = await db("tb_inspection").insert({
//         fee_id: req.body.fee_id,
//         users_id: req.body.users_id,
//         branch_id: req.body.branch_id,
//         idAcceptNo: req.body.idAcceptNo,
//         idcarcohc: req.body.carcohc,

//         brk_m: req.body.brk_m,
//         brk_s: req.body.brk_s,
//         cy_c: req.body.cy_c,
//         re_m: req.body.re_m,
//         v_w: req.body.v_w,
//         s_n: req.body.s_n,
//         handier: req.body.handier,
//         am: req.body.am,
//         side_slip: req.body.side_slip,
//         pedal: req.body.pedal,

//         hose: req.body.hose,
//         reservoir_tank: req.body.reservoir_tank,
//         tire: req.body.tire,
//         wheel: req.body.wheel,
//         bolt: req.body.bolt,
//         chock_absorber: req.body.chock_absorber,
//         spring: req.body.spring,
//         air_cleaner: req.body.air_cleaner,
//         fan_belt: req.body.fan_belt,
//         radiator: req.body.radiator,

//         carburator: req.body.carburator,
//         injection_pump: req.body.injection_pump,
//         co2: req.body.co2,
//         co: req.body.co,
//         hc: req.body.hc,
//         clutch: req.body.clutch,
//         gear_lever: req.body.gear_lever,
//         drive_shaft: req.body.drive_shaft,
//         universal_join: req.body.universal_join,
//         muffler: req.body.muffler,

//         db: req.body.db,
//         batterry: req.body.batterry,
//         light: req.body.light,
//         horn: req.body.horn,
//         indictor_light: req.body.indictor_light,
//         brake_light: req.body.brake_light,
//         side_light: req.body.side_light,
//         rear_light: req.body.rear_light,
//         mirror: req.body.mirror,
//         wiper: req.body.wiper,

//         inspected: req.body.inspected,
//         photo: req.body.photo,
//         qr: req.body.qr,
//         status: req.body.status,
//         // created_at: req.body.created_at,
//         expired_at: req.body.expired_date,
//     });
//     return res.send({ ok: true });
// });

router.put("/update", async function(req, res) {
    await db("tb_inspection")
        .where({ inspection_id: req.body.inspection_id })
        .update({
            fee_id: req.body.fee_id,
            users_id: req.body.users_id,
            branch_id: req.body.branch_id,
            idAcceptNo: req.body.idAcceptNo,
            idcarcohc: req.body.idcarcohc,

            brk_m: req.body.brk_m,
            brk_s: req.body.brk_s,
            cy_c: req.body.cy_c,
            re_m: req.body.re_m,
            v_w: req.body.v_w,
            s_n: req.body.s_n,
            handier: req.body.handier,
            am: req.body.am,
            side_slip: req.body.side_slip,
            pedal: req.body.pedal,

            hose: req.body.hose,
            reservoir_tank: req.body.reservoir_tank,
            tire: req.body.tire,
            wheel: req.body.wheel,
            bolt: req.body.bolt,
            chock_absorber: req.body.chock_absorber,
            spring: req.body.spring,
            air_cleaner: req.body.air_cleaner,
            fan_belt: req.body.fan_belt,
            radiator: req.body.radiator,

            carburator: req.body.carburator,
            injection_pump: req.body.injection_pump,
            co2: req.body.co2,
            co: req.body.co,
            hc: req.body.hc,
            opacity: req.body.opacity,
            clutch: req.body.clutch,
            gear_lever: req.body.gear_lever,
            drive_shaft: req.body.drive_shaft,
            universal_join: req.body.universal_join,

            muffler: req.body.muffler,
            db: req.body.db,
            batterry: req.body.batterry,
            light: req.body.light,
            horn: req.body.horn,
            indictor_light: req.body.indictor_light,
            brake_light: req.body.brake_light,
            side_light: req.body.side_light,
            rear_light: req.body.rear_light,
            mirror: req.body.mirror,
            wiper: req.body.wiper,

            inspected: req.body.inspected,
            photo: req.body.photo,
            qr: req.body.qr,
            status: req.body.status,
            // created_at: req.body.created_at,
            expired_at: req.body.expired_date,
        });
    return res.send({ ok: true });
});

router.delete("/delete/:inspection_id", async function(req, res) {
    await db("tb_inspection")
        .where("inspection_id", req.params.inspection_id)
        .del()
        .then(function(tb_inspection) {
            db.select()
                .from("tb_inspection")
                .then(function(tb_inspection) {
                    res.send({ status: true, tb_inspection });
                });
        });
});

router.get("/inspection_id/:inspection_id", async function(req, res) {
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
        .innerJoin(
            "tb_village",
            "tb_register.village_id",
            "tb_village.village_id"
        )
        .innerJoin(
            "tablecarcohc",
            "tb_inspection.idcarcohc",
            "tablecarcohc.idcarcohc"
        )
        .innerJoin(
            "tablecardata",
            "tb_inspection.idAcceptNo",
            "tablecardata.idAcceptNo"
        )
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
            "tb_use.name as UName",
            "users.name as nameu",
            "tb_province.name as PName",
            "tb_district.name as DName",
            "tb_village.name as VName",

            // ດຶ່ງ ຈາກ  access co, hc table co tablecarcohc
            "tablecarcohc.TstL_CO2 as co2access",
            "tablecarcohc.TstL__CO as coaccess",
            "tablecarcohc.TstL__HC as hcaccess",
            // ເບຣກຕີນ
            "tablecardata.Brk_L_FF as LFF",
            "tablecardata.Brk_R_FF as RFF",
            "tablecardata.BSum__FF as sFF",
            "tablecardata.BDiff_RF as RF",

            "tablecardata.Brk_L_RM as LRM",
            "tablecardata.Brk_R_RM as RRM",
            "tablecardata.BSum__RF as sRF",
            "tablecardata.BDiff_RM as RM",

            "tablecardata.Brk_L_RR as LRR",
            "tablecardata.Brk_R_RR as RRR",
            "tablecardata.BSum__RR as sRR",
            "tablecardata.BDiff_RR as RR",

            "tablecardata.Brk_L_RF as LRF",
            "tablecardata.Brk_R_RF as RRF",
            "tablecardata.BSum__RF as sRF",
            "tablecardata.BDiff_PB as PB",
            //Brk__SUM ລວມເບຣກ
            "tablecardata.Brk__SUM as BSUM",
            // ເບຣກມື
            "tablecardata.BSum__PB as PBSUM",
            // ເບຣກສຸກເສີນ
            "tablecardata.BSumP_PK as PKSUM",
            // ເບຣກ
            "tb_inspection.inspection_id as inspection_id",
            "tb_inspection.fee_id as fee_id",
            "tb_fee.register_id as register_id",

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

            "tb_inspection.photo as photo",
            "tb_inspection.qr as qr",
            "tb_inspection.status as status",
            "tb_inspection.created_at as created_at"
        )
        .where("inspection_id", "=", req.params.inspection_id);
    // .where(
    //   'inspection_id','=',req.params.inspection_id,
    //   'standard_setting_id','=',7)
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        inspections: row[0],
    });
});

router.put("/printed", async function(req, res) {
    await db("tb_inspection")
        .where({ inspection_id: req.body.inspection_id })
        .update({
            printed: req.body.printed,
        });
    res.send({ ok: true });
});


module.exports = router;