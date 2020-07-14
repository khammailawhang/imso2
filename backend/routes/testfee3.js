var express = require('express');
var router = express.Router();

var db = require('../lib/db')


router.get('/getAll',async function(req,res){
  let rows
  if(req.query.model_id){
    rows = await db('tb_type')
    .where('model_id','=', req.query.model_id)
  }else{
    rows = await db('tb_type')
  }
  res.send({
    status:true,
    getalldata:rows
  })
  
})

router.get('/all',async function(req,res){
  let rows
  if(req.query.type_id){
    rows = await db('tb_fee_setting')
    .where('type_id','=', req.query.type_id)
  }else{
    rows = await db('tb_fee_setting')
  }
  res.send({
    status:true,
    getall:rows
  })
  
})


module.exports = router; 