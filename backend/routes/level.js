var express = require('express');
var router = express.Router();
var db = require('../lib/db')

router.get('/',async function(req,res){
  let row = await db('tb_level')
  .innerJoin('tb_branch','tb_level.branch_id','tb_branch.branch_id')
  .select('tb_level.level_id as level_id','tb_level.name as name','tb_level.status as status','tb_level.created_at as created_at',
  'tb_branch.branch_id as branch_id','tb_branch.name as BName')
  .orderBy('created_at', 'desc')
  res.send({
    status:true,
    levels:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_level')
                            .insert({
                              branch_id:req.body.branch_id,
                              name:req.body.name,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/level_id/:level_id',async function(req,res){
  let row = await db('tb_level')
  .innerJoin('tb_branch','tb_level.branch_id','tb_branch.branch_id')
  .select('tb_level.level_id as level_id','tb_level.name as name','tb_level.status as status','tb_level.created_at as created_at',
  'tb_branch.branch_id as branch_id','tb_branch.name as BName')
  .where('level_id','=',req.params.level_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    levels:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_level').where({level_id:req.body.level_id}).update({
    branch_id:req.body.branch_id,
    name:req.body.name,
    status:req.body.status
    })
    res.send({ok:true})
})



router.delete('/delete/:level_id', async function(req,res){
    await db('tb_level').where('level_id',req.params.level_id)
                      .del()
                      .then(function(tb_level){
                        db.select().from('tb_level')
                          .then(function(tb_level){
                            res.send({status:true,tb_level})
                          })
                      })
  })

module.exports = router;