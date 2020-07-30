var express = require("express");
var router = express.Router();
var db = require("../lib/db");

//ສົ່ງກໍານົດສິດໃຫ້ສາຂາ
router.get("/list/branch_id/:branch_id", async function(req, res) {
    let row = await db("tb_fee")
        .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
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
            "tb_branch.branch_id as branch_id",
            "tb_fee.price as price",
            "tb_fee.status as status",
            "tb_fee.printed as printed",
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
            "tb_type_register.name as TRName"
        )
        .where("tb_fee.branch_id", "=", req.params.branch_id)
        .orderBy("tb_fee.created_at", "desc");
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        fees: row,
    });
});


// History
router.get("/history/branch_id/:branch_id", async function(req, res) {
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
            "tb_fee.fee_id as fee_id",
            "tb_branch.branch_id as branch_id",
            "tb_fee.price as price",
            "tb_fee.status as status",
            "tb_fee.printed as printed",
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
            "tb_type_register.name as TRName"
        )
        .where("tb_inspection.expired_at", "<", db.fn.now())
        .where("tb_inspection.branch_id", "=", req.params.branch_id)
        .orderBy("tb_inspection.created_at", "desc");
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        fees: row,
    });
});



//ສົ່ງຂໍ້ມູນສະແດງທີ່ໜ້າເກັບຄ່າທໍານຽມປະຫວັດເລືອກພິມໃບບິນ
router.get("/list", async function(req, res, next) {
    let row = await db("tb_fee")
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
            "tb_inspection.register_id as register_id",

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

            "tb_inspection.status as status",
            "tb_inspection.created_at as created_at",

            "tb_fee.created_at as created_at",
            "tb_fee.status as status",
            "tb_fee.price as price",
            "tb_fee.fee_id as fee_id"
        );
    res.send({
        status: true,
        fees: row,
    });
});

// ສົ່ງສະແດງທີໜ້າລໍຖ້າເກັບຄ່າທໍານຽນພາຫະນາ
router.get("/payfee", async function(req, res, next) {
    let row = await db("tb_inspection")
        .innerJoin(
            "tb_register",
            "tb_inspection.register_id",
            "tb_register.register_id"
        )
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
            "tb_model.name as MName",
            "tb_type.type_id as type_id",
            "tb_type.name as TName",
            "tb_type.price as PiName",
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



router.post("/create", async function(req, res) {
    await db("tb_fee").insert({
        users_id: req.body.users_id,
        branch_id: req.body.branch_id,
        register_id: req.body.register_id,
        price: req.body.price,
        status: req.body.status,
        inspected: req.body.inspected,
        created_at: db.fn.now(),
    });

    return res.send({ msg: true });
});


//
router.get("/fee_id/:fee_id", async function(req, res) {
    let row = await db("tb_fee")
        .innerJoin("tb_register", "tb_fee.register_id", "tb_register.register_id")
        .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
        .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
        .innerJoin("tb_type_register", "tb_register.tr_id", "tb_type_register.tr_id")
        .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
        .innerJoin("tb_province", "tb_register.province_id", "tb_province.province_id")
        .innerJoin("tb_district", "tb_register.district_id", "tb_district.district_id")
        .innerJoin("tb_village", "tb_register.village_id", "tb_village.village_id")
        .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
        .innerJoin("users", "tb_fee.users_id", "users.users_id")
        // .innerJoin("tb_inspection", "tb_fee.inspection_id", "tb_inspection.inspection_id")
        .select(
            "tb_fee.fee_id as fee_id",
            "tb_fee.price as price",
            "tb_fee.status as status",

            "tb_register.register_id as register_id",
            "tb_register.owner_name as owner_name",
            "tb_register.gender as gender",
            "tb_register.phone as phone",
            "tb_register.platc_no as platc_no",
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

            "tb_type_register.name as TRName",
            "tb_type.price as PiName",
            "tb_type.price as price",
            "tb_model.name as MName",
            "tb_type.name as TName",
            "tb_color.name as CName",
            "tb_province.name as PName",
            "tb_district.name as DName",
            "tb_village.name as VName",
            "users.name as nameu",
            "tb_branch.name as branchname",
            // "tb_inspection.inspection_id as inspection_id",
            // "tb_inspection.created_at as created_at",
        )
        .where("fee_id", "=", req.params.fee_id);
    // .where(
    //   'inspection_id','=',req.params.inspection_id,
    //   'standard_setting_id','=',7)
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        fees: row[0],
    });
});

//
router.get("/print/:fee_id", async function(req, res) {
    let row = await db("tb_fee")
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
        .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
        .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
        .innerJoin(
            "tb_type_register",
            "tb_register.tr_id",
            "tb_type_register.tr_id"
        )
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
            "tb_register.register_id as register_id",
            "tb_register.owner_name as owner_name",
            "tb_register.gender as gender",
            "tb_register.phone as phone",
            "tb_register.price as price",
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
            "tb_color.name as CName",
            "tb_province.name as PName",
            "tb_district.name as DName",
            "tb_village.name as VName",
            "tb_type_register.name as TRName",
            "tb_inspection.inspection_id as inspection_id",
            "tb_inspection.register_id as register_id",

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

            "tb_inspection.status as status",
            "tb_inspection.created_at as created_at"
        )
        .where("inspection_id", "=", req.params.inspection_id)
        .where(
            "inspection_id",
            "=",
            req.params.inspection_id,
            "standard_setting_id",
            "=",
            7
        );
    if (row.length === 0) {
        res.send({ status: false });
    }
    res.send({
        status: true,
        inspections: row[0],
    });
});

// Filter
router.get("/filter/branch_id/:branch_id", async function(req, res) {
    let rows;
    let start = req.query.start_date;
    let end = req.query.end_date;
    if (start && end) {
        rows = await db("tb_fee")
            .innerJoin(
                "tb_inspection",
                "tb_fee.inspection_id",
                "tb_inspection.inspection_id"
            )
            .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
            .innerJoin(
                "tb_register",
                "tb_inspection.register_id",
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
                "tb_fee.fee_id as fee_id",
                "tb_register.owner_name as owner_name",
                "tb_register.gender as gender",
                "tb_type_register.name as TRName",
                "tb_register.platc_no as platc_no",
                "tb_model.name as MName",
                "tb_type.name as TName",
                "tb_type.price as PiName",
                "tb_color.name as CName",
                "tb_fee.price as price",
                "tb_fee.created_at as created_at"
            )
            .where("tb_fee.branch_id", "=", req.params.branch_id)
            .orderBy("tb_fee.created_at", "desc")
            .whereBetween("tb_fee.created_at", [start, end]);
    } else {
        rows = await db("tb_fee")
            .innerJoin(
                "tb_inspection",
                "tb_fee.inspection_id",
                "tb_inspection.inspection_id"
            )
            .innerJoin("tb_branch", "tb_fee.branch_id", "tb_branch.branch_id")
            .innerJoin(
                "tb_register",
                "tb_inspection.register_id",
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
                "tb_fee.fee_id as fee_id",
                "tb_register.owner_name as owner_name",
                "tb_register.gender as gender",
                "tb_type_register.name as TRName",
                "tb_register.platc_no as platc_no",
                "tb_model.name as MName",
                "tb_type.name as TName",
                "tb_type.price as PiName",
                "tb_color.name as CName",
                "tb_fee.price as price",
                "tb_fee.created_at as created_at"
            )
            .where("tb_fee.branch_id", "=", req.params.branch_id)
            .orderBy("tb_fee.created_at", "desc");
    }
    res.send({
        status: true,
        fees: rows,
    });
});


// Filter
router.get("/report/branch_id/:branch_id", async function(req, res) {
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
            .where("tb_fee.branch_id", "=", req.params.branch_id)
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
            .where("tb_fee.branch_id", "=", req.params.branch_id)
            .orderBy("tb_fee.created_at", "desc");
    }
    res.send({
        status: true,
        fees: rows,
    });
});

router.put("/update", async function(req, res) {
    await db("tb_fee").where({ fee_id: req.body.fee_id }).update({
        users_id: req.body.users_id,
        branch_id: req.body.branch_id,
        inspection_id: req.body.inspection_id,
        price: req.body.price,
        status: req.body.status,
    });
    res.send({ msg: true });
});

router.delete("/delete/:fee_id", async function(req, res) {
    await db("tb_fee")
        .where("fee_id", req.params.fee_id)
        .del()
        .then(function(tb_fee) {
            db.select()
                .from("tb_fee")
                .then(function(tb_fee) {
                    res.send({ status: true, tb_fee });
                });
        });
});

router.put("/printed", async function(req, res) {
    await db("tb_fee")
        .where({ fee_id: req.body.fee_id })
        .update({
            printed: req.body.printed,
        });
    res.send({ ok: true });
});

module.exports = router;