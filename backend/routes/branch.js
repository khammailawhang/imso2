var express = require('express');
var router = express.Router();
var db = require('../lib/db')

router.get('/', async function(req, res) {
        let row = await db('tb_branch').orderBy('created_at', 'desc')
        res.send({
            status: true,
            branchs: row
        })
    })
    // router.post('/create', async function(req, res) {
    //     let rows = await db('tb_branch')
    //         .insert({
    //             name: req.body.name,
    //             status: req.body.status
    //         })
    //     return res.send({ ok: true })
    // })
router.post("/create", async function(req, res) {
    let result = await db("tb_branch").where("name", "=", req.body.name);
    if (result == 0) {
        let rows = await db("tb_branch").insert({
            name: req.body.name,
            status: req.body.status
        });
        return res.send({ msg: "Success", branchs: rows, ok: true });
    } else {
        return res.send({ msg: "Error", status: false });
    }
});
router.get('/branch_id/:branch_id', async function(req, res) {
    let row = await db('tb_branch')
        .where('branch_id', '=', req.params.branch_id)
    if (row.length === 0) {
        res.send({ status: false })
    }
    res.send({
        status: true,
        branchs: row[0],
    })
})

router.put('/update', async function(req, res) {
    await db('tb_branch').where({ branch_id: req.body.branch_id }).update({
        name: req.body.name,
        status: req.body.status
    })
    res.send({ ok: true })
})



router.delete('/delete/:branch_id', async function(req, res) {
    await db('tb_branch').where('branch_id', req.params.branch_id)
        .del()
        .then(function(tb_branch) {
            db.select().from('tb_branch')
                .then(function(tb_branch) {
                    res.send({ status: true, tb_branch })
                })
        })
})

module.exports = router;