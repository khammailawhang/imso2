var express = require('express');
var router = express.Router();

var db = require('../lib/db')
router.get('/',async function(req,res,next){
  let row = await db('tb_use').orderBy('created_at', 'desc')
  res.send({
    status:true,
    uses:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_use')
                            .insert({
                              name:req.body.name,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/use_id/:use_id',async function(req,res){
  let row = await db('tb_use')
  .where('use_id','=',req.params.use_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    uses:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_use')
  .where({use_id:req.body.use_id})
  .update({
    name:req.body.name,
    status:req.body.status
    })
    res.send({ok:true})
})

router.delete('/delete/:use_id', async function(req,res){
    await db('tb_use').where('use_id',req.params.use_id)
                      .del()
                      .then(function(tb_use){
                        db.select().from('tb_use')
                          .then(function(tb_use){
                            res.send({status:true,tb_use})
                          })
                      })
  })

module.exports = router;