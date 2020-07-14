var express = require('express');
var router = express.Router();

var db = require('../lib/db')
router.get('/',async function(req,res){
  let row = await db('tb_owner')
                .innerJoin('tb_village','tb_owner.village_id','tb_village.village_id')
                .innerJoin('tb_district','tb_owner.district_id','tb_district.district_id')
                .innerJoin('tb_province','tb_owner.province_id','tb_province.province_id')
                .select('tb_owner.full_name as full_name','tb_owner.gender as gender','tb_owner.phone as phone','tb_owner.address as address','tb_owner.owner_id as owner_id','tb_village.name as VName','tb_district.name as DName','tb_province.name as PName','tb_owner.status as OStatus')
                .orderBy('tb_owner.created_at', 'desc')
  res.send({
    status:true,
    owners:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_owner')
                            .insert({
                              village_id:req.body.village_id,
                              district_id:req.body.district_id,
                              province_id:req.body.province_id,
                              full_name:req.body.full_name,
                              gender:req.body.gender,
                              phone:req.body.phone,
                              address:req.body.address,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/owner_id/:owner_id',async function(req,res){
  let row = await db('tb_owner')
  .where('owner_id','=',req.params.owner_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    owners:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_owner').where({owner_id:req.body.owner_id}).update({
    full_name:req.body.full_name,
    gender:req.body.gender,
    phone:req.body.phone,
    address:req.body.address,
    village_id:req.body.village_id,
    district_id:req.body.district_id,
    province_id:req.body.province_id,
    status:req.body.status
    })
    res.send({ok:true})
})

router.delete('/delete/:owner_id', async function(req,res){
    await db('tb_owner').where('owner_id',req.params.owner_id)
                      .del()
                      .then(function(tb_owner){
                        db.select().from('tb_owner')
                          .then(function(tb_owner){
                            res.send({status:true,tb_owner})
                          })
                      })
  })

module.exports = router;