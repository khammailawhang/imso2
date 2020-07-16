var express = require('express');
var router = express.Router();
var db = require('../lib/db')

router.get('/type', async function(req, res) {
    let rows
    if (req.query.model_id) {
        rows = await db('tb_type')
            .where('model_id', '=', req.query.model_id)
    } else {
        rows = await db('tb_type')
    }
    res.send({
        status: true,
        types: rows
    })

})

router.get('/', async function(req, res, next) {
        let row = await db('tb_type')
            .innerJoin('tb_model', 'tb_type.model_id', 'tb_model.model_id')
            .select('tb_type.type_id as type_id', 'tb_type.name as TName', 'tb_type.price as PName', 'tb_type.created_at as created_at', 'tb_model.model_id as model_id', 'tb_model.name as MName')
            .orderBy('created_at', 'desc')
        res.send({
            status: true,
            types: row
        })
    })
    // router.post('/create', async function(req, res) {
    //     let rows = await db('tb_type')
    //         .insert({
    //             model_id: req.body.model_id,
    //             name: req.body.name,
    //             price: req.body.price
    //         })
    //     res.send({ msg: true })
    // })

router.post("/create", async function(req, res) {
    let result = await db("tb_type").where("name", "=", req.body.name);
    if (result == 0) {
        let rows = await db("tb_type").insert({
            model_id: req.body.model_id,
            name: req.body.name,
            price: req.body.price
        });
        return res.send({ msg: "Success", types: rows, ok: true });
    } else {
        return res.send({ msg: "Error", status: false });
    }
});

router.get('/type_id/:type_id', async function(req, res) {
    let row = await db('tb_type')
        .innerJoin('tb_model', 'tb_type.model_id', 'tb_model.model_id')
        .select('tb_type.type_id as type_id', 'tb_type.name as TName', 'tb_type.price as PName', 'tb_type.created_at as created_at', 'tb_model.model_id as model_id', 'tb_model.name as MName')
        .where('type_id', '=', req.params.type_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        types: row[0],
    })
})

router.put('/update', async function(req, res) {
    await db('tb_type').where({ type_id: req.body.type_id }).update({
        model_id: req.body.model_id,
        name: req.body.name,
        price: req.body.price,
    })
    res.send({ ok: true })
})

router.delete('/delete/:type_id', async function(req, res) {
    await db('tb_type').where('type_id', req.params.type_id)
        .del()
        .then(function(tb_model) {
            db.select().from('tb_type')
                .then(function(tb_type) {
                    res.send({ status: true, tb_type })
                })
        })
})

module.exports = router;