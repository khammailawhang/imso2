var express = require('express');
var router = express.Router();

var db = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost', 
    user : 'root',
    password : '',
    database : 'online-inspetion-management-system'
  }
});
router.get('/',async function(req,res){
  let row = await db('tablecardata').orderBy('ABS__Stt', 'desc')
  res.send({
    status:true,
    cardatas:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_district')
                            .insert({
                              name:req.body.name,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/district_id/:district_id',async function(req,res){
  let row = await db('tb_district')
  .where('district_id','=',req.params.district_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    districts:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_district').where({district_id:req.body.district_id}).update({
    name:req.body.name,
    status:req.body.status
    })
    res.send({ok:true})
})

router.delete('/delete/:district_id', async function(req,res){
    await db('tb_district').where('district_id',req.params.district_id)
                      .del()
                      .then(function(tb_district){
                        db.select().from('tb_district')
                          .then(function(tb_district){
                            res.send({status:true,tb_district})
                          })
                      })
  })

module.exports = router;