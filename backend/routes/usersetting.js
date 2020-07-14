const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const db = require("../lib/dbconn.js");
const userMiddleware = require("../middleware/users.js");
// ແກ້ໄຂຜູ້ໃຊ້ງານ
router.put("/update", (req, res, next) => {
    db.query(
        `UPDATE users SET
    gender = ${db.escape(req.body.gender)},
    name = ${db.escape(req.body.name)},
    phone = ${db.escape(req.body.phone)},
    email = ${db.escape(req.body.email)},
    level_id = ${db.escape(req.body.level_id)},
    branch_id = ${db.escape(req.body.branch_id)},
    home = ${db.escape(req.body.home)},
    register = ${db.escape(req.body.register)},
    register_create = ${db.escape(req.body.register_create)},
    register_update = ${db.escape(req.body.register_update)},
    register_delete = ${db.escape(req.body.register_delete)},
    register_detail = ${db.escape(req.body.register_detail)},
    register_report = ${db.escape(req.body.register_report)},
    register_export = ${db.escape(req.body.register_export)},
    inspection = ${db.escape(req.body.inspection)},
    inspection_create = ${db.escape(req.body.inspection_create)},
    inspection_update = ${db.escape(req.body.inspection_update)},
    inspection_delete = ${db.escape(req.body.inspection_delete)},
    inspection_print_grid = ${db.escape(req.body.inspection_print_grid)},
    inspection_print_table = ${db.escape(req.body.inspection_print_table)},
    inspection_upload = ${db.escape(req.body.inspection_upload)},
    inspection_detail = ${db.escape(req.body.inspection_detail)},
    inspection_report = ${db.escape(req.body.inspection_report)},
    inspection_export = ${db.escape(req.body.inspection_export)},
    fee = ${db.escape(req.body.fee)},
    fee_create = ${db.escape(req.body.fee_create)},
    fee_update = ${db.escape(req.body.fee_update)},
    fee_delete = ${db.escape(req.body.fee_delete)},
    fee_print = ${db.escape(req.body.fee_print)},
    fee_detail = ${db.escape(req.body.fee_detail)},
    fee_report = ${db.escape(req.body.fee_report)},
    fee_export = ${db.escape(req.body.fee_export)},
    report = ${db.escape(req.body.report)},
    report_detail = ${db.escape(req.body.report_detail)},
    report_report = ${db.escape(req.body.report_report)},
    report_export = ${db.escape(req.body.report_export)},
    setting = ${db.escape(req.body.setting)},
    model = ${db.escape(req.body.model)},
    model_create = ${db.escape(req.body.model_create)},
    model_update = ${db.escape(req.body.model_update)},
    model_delete = ${db.escape(req.body.model_delete)},
    model_report = ${db.escape(req.body.model_report)},
    model_export = ${db.escape(req.body.model_export)},
    type = ${db.escape(req.body.type)},
    type_create = ${db.escape(req.body.type_create)},
    type_update = ${db.escape(req.body.type_update)},
    type_delete = ${db.escape(req.body.type_delete)},
    type_report = ${db.escape(req.body.type_report)},
    type_export = ${db.escape(req.body.type_export)},
    color = ${db.escape(req.body.color)},
    color_create = ${db.escape(req.body.color_create)},
    color_update = ${db.escape(req.body.color_update)},
    color_delete = ${db.escape(req.body.color_delete)},
    color_report = ${db.escape(req.body.color_report)},
    color_export = ${db.escape(req.body.color_export)},
    village = ${db.escape(req.body.village)},
    village_create = ${db.escape(req.body.village_create)},
    village_update = ${db.escape(req.body.village_update)},
    village_delete = ${db.escape(req.body.village_delete)},
    village_report = ${db.escape(req.body.village_report)},
    village_export = ${db.escape(req.body.village_export)},
    district = ${db.escape(req.body.district)},
    district_create = ${db.escape(req.body.district_create)},
    district_update = ${db.escape(req.body.district_update)},
    district_delete = ${db.escape(req.body.district_delete)},
    district_report = ${db.escape(req.body.district_report)},
    district_export = ${db.escape(req.body.district_export)},
    province = ${db.escape(req.body.province)},
    province_create = ${db.escape(req.body.province_create)},
    province_update = ${db.escape(req.body.province_update)},
    province_delete = ${db.escape(req.body.province_delete)},
    province_report = ${db.escape(req.body.province_report)},
    province_export = ${db.escape(req.body.province_export)},
    company_information = ${db.escape(req.body.company_information)},
    company_information_create = ${db.escape(req.body.company_information_create)},
    company_information_update = ${db.escape(req.body.company_information_update)},
    company_information_delete = ${db.escape(req.body.company_information_delete)},
    company_information_upload = ${db.escape(req.body.company_information_upload)},
    company_information_report = ${db.escape(req.body.company_information_report)},
    company_information_export = ${db.escape(req.body.company_information_export)},
    fee_setting = ${db.escape(req.body.fee_setting)},
    fee_setting_create = ${db.escape(req.body.fee_setting_create)},
    fee_setting_update = ${db.escape(req.body.fee_setting_update)},
    fee_setting_delete = ${db.escape(req.body.fee_setting_delete)},
    fee_setting_report = ${db.escape(req.body.fee_setting_report)},
    fee_setting_export = ${db.escape(req.body.fee_setting_export)},
    type_register = ${db.escape(req.body.type_register)},
    type_register_create = ${db.escape(req.body.type_register_create)},
    type_register_update = ${db.escape(req.body.type_register_update)},
    type_register_delete = ${db.escape(req.body.type_register_delete)},
    type_register_report = ${db.escape(req.body.type_register_report)},
    type_register_export = ${db.escape(req.body.type_register_export)},
    standard_setting = ${db.escape(req.body.standard_setting)},
    standard_setting_create = ${db.escape(req.body.standard_setting_create)},
    standard_setting_update = ${db.escape(req.body.standard_setting_update)},
    standard_setting_delete = ${db.escape(req.body.standard_setting_delete)},
    standard_setting_report = ${db.escape(req.body.standard_setting_report)},
    standard_setting_export = ${db.escape(req.body.standard_setting_export)},
    branch = ${db.escape(req.body.branch)},
    branch_create = ${db.escape(req.body.branch_create)},
    branch_update = ${db.escape(req.body.branch_update)},
    branch_delete = ${db.escape(req.body.branch_delete)},
    branch_report = ${db.escape(req.body.branch_report)},
    branch_export = ${db.escape(req.body.branch_export)},
    user_authorization = ${db.escape(req.body.user_authorization)},
    user_authorization_create = ${db.escape(req.body.user_authorization_create)},
    user_authorization_update = ${db.escape(req.body.user_authorization_update)},
    user_authorization_delete = ${db.escape(req.body.user_authorization_delete)},
    user_authorization_detail = ${db.escape(req.body.user_authorization_detail)},
    user_authorization_upload = ${db.escape(req.body.user_authorization_upload)},
    user_authorization_report = ${db.escape(req.body.user_authorization_report)},
    user_authorization_export = ${db.escape(req.body.user_authorization_export)},
    status = ${db.escape(req.body.status)} 
    WHERE users_id = ${db.escape(req.body.users_id)}`,
        (err, result) => {
            if (err) {
                throw err;
                return res.status(400).send({
                    msg: err,
                });
            }
            return res.status(201).send({
                msg: true,
            });
        }
    );
});

router.put(
    "/updatePassword",
    userMiddleware.validateRegister,
    (req, res, next) => {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).send({
                    msg: err,
                });
            } else {
                // has hashed pw => add to database
                db.query(
                    `UPDATE users SET
            username = ${db.escape(req.body.username)},
            password =${db.escape(hash)}
            WHERE users_id = ${db.escape(req.body.users_id)}`,
                    (err, result) => {
                        if (err) {
                            throw err;
                            return res.status(400).send({
                                msg: err,
                            });
                        }
                        return res.status(201).send({
                            msg: true,
                        });
                    }
                );
            }
        });
    }
);

module.exports = router;