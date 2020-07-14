const express = require("express");
const router = express.Router();
const db = require("../lib/dbconn.js");
const multer = require("multer");
const mysql = require("mysql");

var path = require("path");
var DIR = "./inspections";
let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, DIR);
    },
    filename: function(req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});
let upload = multer({ storage: storage });

//ຫນ້າເລີມບັນທືກວດເຕັກນິກ

router.post("/create", upload.single("photo"),
    function(req, res) {
        message: "Error! in image upload.";
        if (!req.file) {
            console.log("No file received");
            message = "Error! in image upload.";
            res.send({ message: message, status: "danger" });
        } else {
            console.log("file received");
            console.log(req);
            var sql =
                "INSERT INTO tb_inspection (register_id,users_id,branch_id,idAcceptNo,idcarcohc,brk_m,brk_s,cy_c,re_m,v_w,s_n,handier,am,side_slip,pedal,hose,reservoir_tank,tire,wheel,bolt,chock_absorber,spring,air_cleaner,fan_belt,radiator,carburator,injection_pump,co2,co,hc,clutch,gear_lever,drive_shaft,universal_join,muffler,db,batterry,light,horn,indictor_light,brake_light,side_light,rear_light,mirror,wiper,photo,status,created_at) VALUES ('" +
                req.body.register_id +
                "','" +
                req.body.users_id +
                "','" +
                req.body.branch_id +
                "','" +
                req.body.idAcceptNo +
                "','" +
                req.body.idcarcohc +
                "','" +
                req.body.brk_m +
                "','" +
                req.body.brk_s +
                "','" +
                req.body.cy_c +
                "','" +
                req.body.re_m +
                "','" +
                req.body.v_w +
                "','" +

                req.body.s_n +
                "','" +

                req.body.handier +
                "','" +
                req.body.am +
                "','" +
                req.body.side_slip +
                "','" +
                req.body.pedal +
                "','" +
                req.body.hose +
                "','" +
                req.body.reservoir_tank +
                "','" +
                req.body.tire +
                "','" +
                req.body.wheel +
                "','" +
                req.body.bolt +
                "','" +
                req.body.chock_absorber +
                "','" +
                req.body.spring +
                "','" +
                req.body.air_cleaner +
                "','" +
                req.body.fan_belt +
                "','" +
                req.body.radiator +
                "','" +
                req.body.carburator +
                "','" +
                req.body.injection_pump +
                "','" +
                req.body.co2 +
                "','" +
                req.body.co +
                "','" +
                req.body.hc +
                "','" +
                req.body.clutch +
                "','" +
                req.body.gear_lever +
                "','" +
                req.body.drive_shaft +
                "','" +
                req.body.universal_join +
                "','" +
                req.body.muffler +
                "','" +
                req.body.db +
                "','" +
                req.body.batterry +
                "','" +
                req.body.light +
                "','" +
                req.body.horn +
                "','" +
                req.body.indictor_light +
                "','" +
                req.body.side_light +
                "','" +
                req.body.brake_light +
                "','" +
                req.body.rear_light +
                "','" +
                req.body.mirror +
                "','" +
                req.body.wiper +
                "','" +
                req.file.filename +
                "','" +
                req.body.status +
                "',now())";
            var query = db.query(sql, function(err, rs) {
                res.send({ status: true });
            });
        }
    });

// ໜ້າແກ້ໄຂກວດເຕັກນິກໃໝ່


// router.put('/update', async function(req, res) {
//     await db('tb_inspection').where({ inspection_id: req.body.inspection_id }).update({
//         register_id: req.body.register_id,

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
//         co: req.body.co,
//         hc: req.body.hc,
//         opacity: req.body.opacity,
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

//         photo: req.body.photo,
//         status: req.body.status,

//     })
//     res.send({ ok: true })
// })

router.post("/created", upload.single("photo"), function(req, res) {
    message: "Error! in image upload.";
    if (!req.file) {
        console.log("No file received");
        message = "Error! in image upload.";
        res.send({ message: message, status: "danger" });
    } else {
        console.log("file received");
        console.log(req);
        var sql =
            "INSERT INTO tb_inspection (register_id,users_id,branch_id,idAcceptNo,idcarcohc,brk_m,brk_s,cy_c,re_m,v_w,s_n,handier,am,side_slip,pedal,hose,reservoir_tank,tire,wheel,bolt,chock_absorber,spring,air_cleaner,fan_belt,radiator,carburator,injection_pump,co2,co,hc,clutch,gear_lever,drive_shaft,universal_join,muffler,db,batterry,light,horn,indictor_light,brake_light,side_light,rear_light,mirror,wiper,photo,status,created_at) VALUES ('" +
            req.body.register_id +
            "','" +
            req.body.users_id +
            "','" +
            req.body.branch_id +
            "','" +
            req.body.idAcceptNo +
            "','" +
            req.body.idcarcohc +
            "','" +
            req.body.brk_m +
            "','" +
            req.body.brk_s +
            "','" +
            req.body.cy_c +
            "','" +
            req.body.re_m +
            "','" +
            req.body.v_w +
            "','" +

            req.body.s_n +
            "','" +
            req.body.handier +
            "','" +
            req.body.am +
            "','" +
            req.body.side_slip +
            "','" +
            req.body.pedal +
            "','" +
            req.body.hose +
            "','" +
            req.body.reservoir_tank +
            "','" +
            req.body.tire +
            "','" +
            req.body.wheel +
            "','" +
            req.body.bolt +
            "','" +
            req.body.chock_absorber +
            "','" +
            req.body.spring +
            "','" +

            req.body.air_cleaner +
            "','" +
            req.body.fan_belt +
            "','" +
            req.body.radiator +
            "','" +
            req.body.carburator +
            "','" +
            req.body.injection_pump +
            "','" +
            req.body.co2 +
            "','" +
            req.body.co +
            "','" +
            req.body.hc +
            "','" +
            req.body.clutch +
            "','" +
            req.body.gear_lever +
            "','" +
            req.body.drive_shaft +
            "','" +
            req.body.universal_join +
            "','" +
            req.body.muffler +
            "','" +
            req.body.db +
            "','" +
            req.body.batterry +
            "','" +
            req.body.light +
            "','" +
            req.body.horn +
            "','" +
            req.body.indictor_light +
            "','" +
            req.body.side_light +
            "','" +
            req.body.brake_light +
            "','" +
            req.body.rear_light +
            "','" +
            req.body.mirror +
            "','" +
            req.body.wiper +
            "','" +
            req.file.filename +
            "','" +
            req.body.status +
            "',now())";
        var query = db.query(sql, function(err, rs) {
            res.send({ status: true });
        });
    }
});

module.exports = router;