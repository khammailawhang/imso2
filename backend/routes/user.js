var express = require('express');
var router = express.Router();

var db = require('../lib/db')


router.get('/', async function(req, res, next) {
        let row = await db('users')
            .innerJoin('tb_branch', 'users.branch_id', 'tb_branch.branch_id')
            .select('users.users_id as users_id', 'users.name as UName', 'users.gender as gender', 'users.registered as registered', 'users.phone as phone', 'users.username as username', 'users.status as status', 'tb_branch.branch_id as branch_id', 'tb_branch.name as BName')
            .orderBy('registered', 'desc')
        res.json({
            status: true,
            users: row
        })
    })
    // router.get('/', async function(req, res) {
    //     let row = await db('users')
    //         .orderBy('registered', 'desc')
    //     res.send({
    //         status: true,
    //         users: row
    //     })
    // })

router.get('/users_id/:users_id', async function(req, res) {
        let row = await db('users')
            .where('users_id', '=', req.params.users_id)
        if (row.length === 0) {
            res.send({ status: false })
        }
        res.send({
            status: true,
            users: row[0],
        })
    })
    // router.post('/create', async function(req, res) {
    //     let rows = await db('tb_user_setting')
    //         .insert({
    //             gender: req.body.gender,
    //             name: req.body.name,
    //             address: req.body.address,
    //             telephone: req.body.telephone,
    //             level: req.body.level,
    //             email: req.body.email,
    //             password: req.body.password,
    //             article_registration: req.body.article_registration,
    //             article_registration_add: req.body.article_registration_add,
    //             article_registration_edit: req.body.article_registration_edit,
    //             article_registration_delete: req.body.article_registration,
    //             article_registration_detail: req.body.article_registration_detail,
    //             article_registration_export: req.body.article_registration_export,
    //             article_registration_upload: req.body.article_registration_upload,
    //             article_inspectioin_vehicle: req.body.article_inspectioin_vehicle,
    //             article_inspectioin_vehicle_add: req.body.article_inspectioin_vehicle_add,
    //             article_inspectioin_vehicle_edit: req.body.article_inspectioin_vehicle_add,
    //             article_inspectioin_vehicle_edit: req.body.article_inspectioin_vehicle_edit,
    //             article_inspectioin_vehicle_delete: req.body.article_inspectioin_vehicle_delete,
    //             article_inspectioin_vehicle_detail: req.body.article_inspectioin_vehicle_detail,
    //             article_inspectioin_vehicle_export: req.body.article_inspectioin_vehicle_export,
    //             article_inspectioin_vehicle_upload: req.body.article_inspectioin_vehicle_upload,
    //             article_fee: req.body.article_fee,
    //             article_fee_add: req.body.article_fee_add,
    //             article_fee_edit: req.body.article_fee_edit,
    //             article_fee_delete: req.body.article_fee_edit,
    //             article_fee_detail: req.body.article_fee_detail,
    //             article_fee_export: req.body.article_fee_export,
    //             article_fee_upload: req.body.article_fee_upload,
    //             article_report: req.body.article_report,
    //             article_report_export: req.body.article_report_export,
    //             status: req.body.status
    //         })
    //     return res.send({ ok: true })
    // })



// router.put('/update', async function(req, res) {
//     await db('tb_user_setting').where({ user_id: req.body.user_id }).update({
//         gender: req.body.gender,
//         name: req.body.name,
//         address: req.body.address,
//         telephone: req.body.telephone,
//         level: req.body.level,
//         email: req.body.email,
//         password: req.body.password,
//         article_registration: req.body.article_registration,
//         article_registration_add: req.body.article_registration_add,
//         article_registration_edit: req.body.article_registration_edit,
//         article_registration_delete: req.body.article_registration,
//         article_registration_detail: req.body.article_registration_detail,
//         article_registration_export: req.body.article_registration_export,
//         article_registration_upload: req.body.article_registration_upload,
//         article_inspectioin_vehicle: req.body.article_inspectioin_vehicle,
//         article_inspectioin_vehicle_add: req.body.article_inspectioin_vehicle_add,
//         article_inspectioin_vehicle_edit: req.body.article_inspectioin_vehicle_add,
//         article_inspectioin_vehicle_edit: req.body.article_inspectioin_vehicle_edit,
//         article_inspectioin_vehicle_delete: req.body.article_inspectioin_vehicle_delete,
//         article_inspectioin_vehicle_detail: req.body.article_inspectioin_vehicle_detail,
//         article_inspectioin_vehicle_export: req.body.article_inspectioin_vehicle_export,
//         article_inspectioin_vehicle_upload: req.body.article_inspectioin_vehicle_upload,
//         article_fee: req.body.article_fee,
//         article_fee_add: req.body.article_fee_add,
//         article_fee_edit: req.body.article_fee_edit,
//         article_fee_delete: req.body.article_fee_edit,
//         article_fee_detail: req.body.article_fee_detail,
//         article_fee_export: req.body.article_fee_export,
//         article_fee_upload: req.body.article_fee_upload,
//         article_report: req.body.article_report,
//         article_report_export: req.body.article_report_export,
//         status: req.body.status
//     })
//     res.send({ ok: true })
// })




router.delete('/delete/:users_id', async function(req, res) {
    await db('users').where('users_id', req.params.users_id)
        .del()
        .then(function(users) {
            db.select().from('users')
                .then(function(users) {
                    res.send({ status: true, users })
                })
        })
})

module.exports = router;