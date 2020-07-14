var express = require('express');
var router = express.Router();

var db = require('../lib/db')

router.get('/gettype',async function(req,res){
  let rows
  if(req.query.type_id){
    rows = await db('tb_fee_setting')
    .innerJoin('tb_type','tb_fee_setting.type_id','tb_type.type_id')
    .select('tb_type.type_id as type_id','tb_type.name as TypeName','tb_fee_setting.price as price','tb_fee_setting.fs_id as fs_id')
    .where('type_id','=',req.query.type_id)
  }else{
    rows = await db('tb_fee_setting')
    .innerJoin('tb_type','tb_fee_setting.type_id','tb_type.type_id')
    .select('tb_type.type_id as type_id','tb_type.name as TypeName','tb_fee_setting.price as price','tb_fee_setting.fs_id as fs_id')
  }
  res.send({
    status:true,
    gettypes:rows
  })
  
})

router.get('/getprice',async function(req,res){
    let row
    if(req.query.type_id){
      row = await db('tb_fee_setting')
      .where('type_id','=', req.query.type_id)
    }else{
      row = await db('tb_fee_setting')
    }
    res.send({
      status:true,
      getprices:row
    })
    
  })



router.post('/create',async function(req,res){
  let rows = await db('tb_district')
                            .insert({
                              name:req.body.name,
                              province_id:req.body.province_id,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/district_id/:district_id',async function(req,res){
  let row = await db('tb_district')
  .innerJoin('tb_province','tb_district.province_id','tb_province.province_id')
  .select('tb_district.district_id as district_id','tb_district.name as DName','tb_district.status as status','tb_district.created_at as created_at','tb_province.province_id as province_id','tb_province.name as PName')
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
    province_id:req.body.province_id,
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