var express = require('express');
var router = express.Router();
var db = require('../lib/db')
router.get('/', async function(req, res, next) {
    let row = await db('user')
    res.send({
        status: true,
        user: row
    })
})
router.post('/create', async function(req, res) {
    let rows = await db('user')
        .insert({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
    return res.send({ status: true })
})

router.get('/model_id/:model_id', async function(req, res) {
    let row = await db('tb_model')
        .where('model_id', '=', req.params.model_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        models: row[0],
    })
})

router.put('/update', async function(req, res) {
    await db('tb_model').where({ model_id: req.body.model_id }).update({
        name: req.body.name,
        status: req.body.status
    })
    res.send({ ok: true })
})



router.get('/delete', async function(req, res, next) {
    let row = await db('tb_model')
        .where({ model_id: 1 })
    res.send({
        status: true,
        user: row
    })
})
router.delete('/delete/:model_id', async function(req, res) {
    await db('tb_model').where('model_id', req.params.model_id)
        .del()
        .then(function(tb_model) {
            db.select().from('tb_model')
                .then(function(tb_model) {
                    res.send({ status: true, tb_model })
                })
        })
})

module.exports = router;