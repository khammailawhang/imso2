var express = require('express');
var router = express.Router();
var db = require('../lib/db')
    // ສະແດງລະຫັດ
router.get('/', async function(req, res, next) {
        let row = await db('tb_type_register').orderBy('created_at', 'desc')
        res.send({
            status: true,
            trs: row
        })
    })
    // ສ້າງລະຫັດ

// router.post('/create', async function(req, res) {
//     let rows = await db('tb_type_register')
//         .insert({
//             name: req.body.name
//         })
//     return res.send({ ok: true })
// })
router.post("/create", async function(req, res) {
    let result = await db("tb_type_register").where("name", "=", req.body.name);
    if (result == 0) {
        let rows = await db("tb_type_register").insert({
            name: req.body.name,
        });
        // return res.send({ msg: "Success", type: rows, ok: true });
    } else {
        return res.send({ msg: "Error", status: false });
    }
});
// ສ້າງລະຫັດ
router.get('/tr_id/:tr_id', async function(req, res) {
    let row = await db('tb_type_register')
        .where('tr_id', '=', req.params.tr_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        trs: row[0],
    })
})

// ແກ້ໄຂລະຫັດ
router.put('/update', async function(req, res) {
        await db('tb_type_register').where({ tr_id: req.body.tr_id }).update({
            name: req.body.name
        })
        res.send({ ok: true })
    })
    // ລືຶກລະຫັດ
router.delete('/delete/:tr_id', async function(req, res) {
    await db('tb_type_register').where('tr_id', req.params.tr_id)
        .del()
    res.send({ status: true })
})

module.exports = router;