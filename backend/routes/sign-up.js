const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const db = require('../lib/dbconn.js');
const userMiddleware = require('../middleware/users.js');

// ເພີມຜູ້ໃຊ້ງານ ບັນທຶກ
router.post('/', userMiddleware.validateRegister, (req, res, next) => {
    db.query(
        `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
        req.body.username
      )});`,
        (err, result) => {
            if (result.length) {
                return res.status(409).send({
                    msg: 'This username is already in use!'
                });
            } else {
                // username is available
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).send({
                            msg: err
                        });
                    } else {


                        // ເພີມຜູ້ໃຊ້ງານ ບັນທຶກ
                        db.query(
                          `INSERT INTO users (
                  id,
                  gender,
                  name,
                  phone,
                  email,
                  username,
                  password,
                  level,
                  branch_id,
                  home,
                  register,
                  register_create,
                  register_update,
                  register_delete,
                  register_detail,
                  register_report,
                  register_export,
                  inspection,
                  inspection_create,
                  inspection_update,
                  inspection_delete,
                  inspection_print_grid,
                  inspection_print_table,
                  inspection_detail,
                  inspection_upload,
                  inspection_report,
                  inspection_export,
                  fee,
                  fee_create,
                  fee_update,
                  fee_delete,
                  fee_print,
                  fee_detail,
                  fee_report,
                  fee_export,
                  report,
                  report_inspection,
                  report_fee,
                  report_report,
                  report_export,
                  setting,
                  model,
                  model_create,
                  model_update,
                  model_delete,
                  model_report,
                  model_export,
                  type,
                  type_create,
                  type_update,
                  type_delete,
                  type_report,
                  type_export,
                  color,
                  color_create,
                  color_update,
                  color_delete,
                  color_report,
                  color_export,
                  village,
                  village_create,
                  village_update,
                  village_delete,
                  village_report,
                  village_export,
                  district,
                  district_create,
                  district_update,
                  district_delete,
                  district_report,
                  district_export,
                  province,
                  province_create,
                  province_update,
                  province_delete,
                  province_report,
                  province_export,
                  company_information,
                  company_information_create,
                  company_information_update,
                  company_information_delete,
                  company_information_upload,
                  company_information_report,
                  company_information_export,
                  fee_setting,
                  fee_setting_create,
                  fee_setting_update,
                  fee_setting_delete,
                  fee_setting_report,
                  fee_setting_export,
                  type_register,
                  type_register_create,
                  type_register_update,
                  type_register_delete,
                  type_register_report,
                  type_register_export,
                  standard_setting,
                  standard_setting_create,
                  standard_setting_update,
                  standard_setting_delete,
                  standard_setting_report,
                  standard_setting_export,
                  branch,
                  branch_create,
                  branch_update,
                  branch_delete,
                  branch_report,
                  branch_export,
                  user_authorization,
                  user_authorization_create,
                  user_authorization_update,
                  user_authorization_delete,
                  user_authorization_detail,
                  user_authorization_upload,
                  user_authorization_report,
                  user_authorization_export,
                  admin,
                  status,
                  registered) VALUES ('
                  ${uuid.v4()}', 
                  ${db.escape(req.body.gender)}, 
                  ${db.escape(req.body.name)}, 
                  ${db.escape(req.body.phone)}, 
                  ${db.escape(req.body.email)}, 
                  ${db.escape(req.body.username)}, 
                  ${db.escape(hash)},
                  ${db.escape(req.body.level)},
                  ${db.escape(req.body.branch_id)},
                  ${db.escape(req.body.home)},
                  ${db.escape(req.body.register)},
                  ${db.escape(req.body.register_create)},
                  ${db.escape(req.body.register_update)},
                  ${db.escape(req.body.register_delete)},
                  ${db.escape(req.body.register_detail)},
                  ${db.escape(req.body.register_report)},
                  ${db.escape(req.body.register_export)},
                  ${db.escape(req.body.inspection)},
                  ${db.escape(req.body.inspection_create)},
                  ${db.escape(req.body.inspection_update)},
                  ${db.escape(req.body.inspection_delete)},
                  ${db.escape(req.body.inspection_print_grid)},
                  ${db.escape(req.body.inspection_print_table)},
                  ${db.escape(req.body.inspection_detail)},
                  ${db.escape(req.body.inspection_upload)},
                  ${db.escape(req.body.inspection_report)},
                  ${db.escape(req.body.inspection_export)},
                  ${db.escape(req.body.fee)},
                  ${db.escape(req.body.fee_create)},
                  ${db.escape(req.body.fee_update)},
                  ${db.escape(req.body.fee_delete)},
                  ${db.escape(req.body.fee_print)},
                  ${db.escape(req.body.fee_detail)},
                  ${db.escape(req.body.fee_report)},
                  ${db.escape(req.body.fee_export)},
                  ${db.escape(req.body.report)},
                  ${db.escape(req.body.report_inspection)},
                  ${db.escape(req.body.report_fee)},
                  ${db.escape(req.body.report_report)},
                  ${db.escape(req.body.report_export)},
                  ${db.escape(req.body.setting)},
                  ${db.escape(req.body.model)},
                  ${db.escape(req.body.model_create)},
                  ${db.escape(req.body.model_update)},
                  ${db.escape(req.body.model_delete)},
                  ${db.escape(req.body.model_report)},
                  ${db.escape(req.body.model_export)},
                  ${db.escape(req.body.type)},
                  ${db.escape(req.body.type_create)},
                  ${db.escape(req.body.type_update)},
                  ${db.escape(req.body.type_delete)},
                  ${db.escape(req.body.type_report)},
                  ${db.escape(req.body.type_export)},
                  ${db.escape(req.body.color)},
                  ${db.escape(req.body.color_create)},
                  ${db.escape(req.body.color_update)},
                  ${db.escape(req.body.color_delete)},
                  ${db.escape(req.body.color_report)},
                  ${db.escape(req.body.color_export)},
                  ${db.escape(req.body.village)},
                  ${db.escape(req.body.village_create)},
                  ${db.escape(req.body.village_update)},
                  ${db.escape(req.body.village_delete)},
                  ${db.escape(req.body.village_report)},
                  ${db.escape(req.body.village_export)},
                  ${db.escape(req.body.district)},
                  ${db.escape(req.body.district_create)},
                  ${db.escape(req.body.district_update)},
                  ${db.escape(req.body.district_delete)},
                  ${db.escape(req.body.district_report)},
                  ${db.escape(req.body.district_export)},
                  ${db.escape(req.body.province)},
                  ${db.escape(req.body.province_create)},
                  ${db.escape(req.body.province_update)},
                  ${db.escape(req.body.province_delete)},
                  ${db.escape(req.body.province_report)},
                  ${db.escape(req.body.province_export)},
                  ${db.escape(req.body.company_information)},
                  ${db.escape(req.body.company_information_create)},
                  ${db.escape(req.body.company_information_update)},
                  ${db.escape(req.body.company_information_delete)},
                  ${db.escape(req.body.company_information_upload)},
                  ${db.escape(req.body.company_information_report)},
                  ${db.escape(req.body.company_information_export)},
                  ${db.escape(req.body.fee_setting)},
                  ${db.escape(req.body.fee_setting_create)},
                  ${db.escape(req.body.fee_setting_update)},
                  ${db.escape(req.body.fee_setting_delete)},
                  ${db.escape(req.body.fee_setting_report)},
                  ${db.escape(req.body.fee_setting_export)},
                  ${db.escape(req.body.type_register)},
                  ${db.escape(req.body.type_register_create)},
                  ${db.escape(req.body.type_register_update)},
                  ${db.escape(req.body.type_register_delete)},
                  ${db.escape(req.body.type_register_report)},
                  ${db.escape(req.body.type_register_export)},
                  ${db.escape(req.body.standard_setting)},
                  ${db.escape(req.body.standard_setting_create)},
                  ${db.escape(req.body.standard_setting_update)},
                  ${db.escape(req.body.standard_setting_delete)},
                  ${db.escape(req.body.standard_setting_report)},
                  ${db.escape(req.body.standard_setting_export)},
                  ${db.escape(req.body.branch)},
                  ${db.escape(req.body.branch_create)},
                  ${db.escape(req.body.branch_update)},
                  ${db.escape(req.body.branch_delete)},
                  ${db.escape(req.body.branch_report)},
                  ${db.escape(req.body.branch_export)},
                  ${db.escape(req.body.user_authorization)},
                  ${db.escape(req.body.user_authorization_create)},
                  ${db.escape(req.body.user_authorization_update)},
                  ${db.escape(req.body.user_authorization_delete)},
                  ${db.escape(req.body.user_authorization_detail)},
                  ${db.escape(req.body.user_authorization_upload)},
                  ${db.escape(req.body.user_authorization_report)},
                  ${db.escape(req.body.user_authorization_export)},
                  ${db.escape(req.body.admin)},
                  ${db.escape(req.body.status)},
                  now())`,
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
        }
    );
});
module.exports = router;