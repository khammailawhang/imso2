var express = require('express');
var router = express.Router();

var db = require('../lib/db')
router.get('/',async function(req,res){
  let row = await db('tb_standard_setting').select('tb_standard_setting.title as SDtitle','tb_standard_setting.value as SDvalue','tb_standard_setting.detail as SDdetail','tb_standard_setting.status as SDstatus','tb_standard_setting.standard_setting_id as standard_setting_id').orderBy('created_at', 'desc')
  res.send({
    status:true,
    standards:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_standard_setting')
                            .insert({
                              title:req.body.title,
                              value:req.body.value,
                              detail:req.body.detail,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/standard_setting_id/:standard_setting_id',async function(req,res){
  let row = await db('tb_standard_setting')
  .where('standard_setting_id','=',req.params.standard_setting_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    standards:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_standard_setting').where({standard_setting_id:req.body.standard_setting_id}).update({
    title:req.body.title,
    value:req.body.value,
    detail:req.body.detail,
    status:req.body.status
    })
    res.send({ok:true})
})

router.delete('/delete/:standard_setting_id', async function(req,res){
    await db('tb_standard_setting').where('standard_setting_id',req.params.standard_setting_id)
                      .del()
                      .then(function(tb_standard_setting){
                        db.select().from('tb_standard_setting')
                          .then(function(tb_standard_setting){
                            res.send({status:true,tb_standard_setting})
                          })
                      })
  })

module.exports = router;