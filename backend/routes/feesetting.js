var express = require('express');
var router = express.Router();
var db = require('../lib/db')




router.get('/', async function(req, res) {
    let row = await db('tb_fee_setting')
        .innerJoin('tb_model', 'tb_fee_setting.model_id', 'tb_model.model_id')
        .innerJoin('tb_type', 'tb_fee_setting.type_id', 'tb_type.type_id')
        .select('tb_model.model_id as model_id', 'tb_type.type_id as type_id', 'tb_model.name as ModelName', 'tb_type.name as TypeName', 'tb_fee_setting.status as fsStatus', 'tb_fee_setting.price as price', 'tb_fee_setting.fs_id as fs_id', 'tb_fee_setting.created_at as tb_fee_setting', 'tb_fee_setting.created_at as created_at', 'tb_fee_setting.status')
        .orderBy('tb_fee_setting.created_at', 'desc')
    res.send({
        status: true,
        feesettings: row
    })
})
router.post('/create', async function(req, res) {
    let rows = await db('tb_fee_setting')
        .insert({
            model_id: req.body.model_id,
            type_id: req.body.type_id,
            price: req.body.price,
            status: req.body.status
        })
    return res.send({ ok: true })
})

router.get('/fs_id/:fs_id', async function(req, res) {
    let row = await db('tb_fee_setting')
        .innerJoin('tb_model', 'tb_fee_setting.model_id', 'tb_model.model_id')
        .innerJoin('tb_type', 'tb_fee_setting.type_id', 'tb_type.type_id')
        .select('tb_model.model_id as model_id', 'tb_type.type_id as type_id', 'tb_model.name as ModelName', 'tb_type.name as TypeName', 'tb_fee_setting.status as fsStatus', 'tb_fee_setting.price as price', 'tb_fee_setting.fs_id as fs_id', 'tb_fee_setting.created_at as created_at', 'tb_fee_setting.status')
        .where('fs_id', '=', req.params.fs_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        feesettings: row[0],
    })
})

router.put('/update', async function(req, res) {
    await db('tb_fee_setting').where({ fs_id: req.body.fs_id }).update({
        price: req.body.price,
        model_id: req.body.model_id,
        type_id: req.body.type_id,
        status: req.body.status
    })
    res.send({ ok: true })
})

router.delete('/delete/:fs_id', async function(req, res) {
    await db('tb_fee_setting').where('fs_id', req.params.fs_id)
        .del()
        .then(function(tb_fee_setting) {
            db.select().from('tb_fee_setting')
                .then(function(tb_fee_setting) {
                    res.send({ status: true, tb_fee_setting })
                })
        })
})

module.exports = router;