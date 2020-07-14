var express = require("express");
var router = express.Router();
var db = require("../lib/db.js");
// router.get("/",async function(req,res){
//   let row = await db("tb_customer")
//                     .innerJoin("tb_village","tb_customer.village_id","tb_village.village_id")
//                     .innerJoin("tb_district","tb_customer.district_id","tb_district.district_id")
//                     .innerJoin("tb_customer","tb_customer.province_id","tb_province.province_id")
//                     .select("tb_village.name as VName","tb_district.name as DName","tb_province.name as PName","tb_customer.status as CStatus")
//                     .orderBy("tb_customer.created_at", "desc")
//   res.send({
//     status:true,
//     customers:row
//   })
// })
router.get("/", async function(req, res) {
    let rows = await db("tb_register")
        .innerJoin("tb_owner", "tb_register.owner_id", "tb_owner.owner_id")
        .innerJoin("tb_model", "tb_register.model_id", "tb_model.model_id")
        .innerJoin("tb_type", "tb_register.type_id", "tb_type.type_id")
        .innerJoin("tb_color", "tb_register.color_id", "tb_color.color_id")
        .select("tb_register.register_id as register_id", "tb_register.price as price", "tb_register.platc_no as platc_no", "tb_register.steering_wheel", "tb_register.fuel as fuel", "tb_register.cylinder as cylinder", "tb_register.cylinder_size_cc as cylinder_size_cc", "tb_register.engine_no as engine_no", "tb_register.chassis_no as chassis_no", "tb_register.width as width", "tb_register.length as length", "tb_register.height as height", "tb_register.passenger_scats as passenger_scats", "tb_register.vehicle_weight as vehicle_weight", "tb_register.max_loading as max_loading", "tb_register.total_weight as total_weight", "tb_owner.full_name as full_name", "tb_owner.owner_id as owner_id", "tb_model.name as MName", "tb_type.name as TName", "tb_color.name as CName", "tb_register.status as status")
        .orderBy("tb_register.created_at", "desc")
    res.send({
        status: true,
        registers: rows
    });
});
router.post("/create", async function(req, res) {
    let rows = await db("tb_register")
        .insert({
            village_id: req.body.village_id,
            district_id: req.body.district_id,
            province_id: req.body.province_id,
            full_name: req.body.full_name,
            gender: req.body.gender,
            phone: req.body.phone,
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
            status: req.body.status
        });
    return res.send({ ok: true })
});

router.get("/register_id/:register_id", async function(req, res) {
    let row = await db("tb_register")
        .where("register_id", "=", req.params.register_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        registers: row[0],
    });
});

router.put("/update", async function(req, res) {
    await db("tb_register").where({ register_id: req.body.register_id }).update({
        owner_id: req.body.owner_id,
        model_id: req.body.model_id,
        type_id: req.body.type_id,
        color_id: req.body.color_id,
        price: req.body.price,
        platc_no: req.body.platc_no,
        steering_wheel: req.body.steering_wheel,
        fuel: req.body.fuel,
        cylinder: req.body.cylinder,
        cylinder_size_cc: req.body.vehicle_weight,
        engine_no: req.body.engine_no,
        chassis_no: req.body.chassis_no,
        width: req.body.width,
        length: req.body.length,
        height: req.body.height,
        passenger_scats: req.body.passenger_scats,
        vehicle_weight: req.body.vehicle_weight,
        max_loading: req.body.max_loading,
        total_weight: req.body.total_weight,
        status: req.body.status
    });
    res.send({ ok: true });
});

router.delete("/delete/:register_id", async function(req, res) {
    await db("tb_register").where("register_id", req.params.register_id)
        .del()
        .then(function(tb_register) {
            db.select().from("tb_register")
                .then(function(tb_register) {
                    res.send({ status: true, tb_register });
                });
        });
});

module.exports = router;