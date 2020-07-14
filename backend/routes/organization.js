var express = require('express');
var router = express.Router();

var db = require('../lib/db.js')
router.get('/',async function(req,res){
  let row = await db('tb_organization').orderBy('created_at', 'desc')
  res.send({
    status:true,
    organizations:row
  })
})
router.post('/create',async function(req,res){
  let rows = await db('tb_organization')
                            .insert({
                              organization_name:req.body.organization_name,
                              no_organization:req.body.no_organization,
                              phone:req.body.phone,
                              mobile:req.body.mobile,
                              email:req.body.email,
                              facebook:req.body.facebook,
                              website:req.body.website,
                              youtube:req.body.youtube,
                              address:req.body.address,
                              status:req.body.status
                            })
                            return res.send({ok:true})
})

router.get('/organization_id/:organization_id',async function(req,res){
  let row = await db('tb_organization')
  .where('organization_id','=',req.params.organization_id)
  if(row.length === 0){
    res.send({status:false})
  }
  res.send({
    status:true,
    organizations:row[0],
  })
})

router.put('/update',async function(req,res){
  await db('tb_organization').where({organization_id:req.body.organization_id}).update({
    organization_name:req.body.organization_name,
    no_organization:req.body.no_organization,
    phone:req.body.phone,
    mobile:req.body.mobile,
    email:req.body.email,
    facebook:req.body.facebook,
    website:req.body.website,
    youtube:req.body.youtube,
    address:req.body.address,
    status:req.body.status
    })
    res.send({ok:true})
})

router.delete('/delete/:organization_id', async function(req,res){
    await db('tb_organization').where('organization_id',req.params.organization_id)
                      .del()
                      .then(function(tb_organization){
                        db.select().from('tb_organization')
                          .then(function(tb_organization){
                            res.send({status:true,tb_organization})
                          })
                      })
  })

module.exports = router;