// const aws = require('aws-sdk')
// const multer = require('c')
const express = require('express')
    // const multerS3 = require('multer-s3')

var router = express.Router();
var db = require('../lib/db')

// var fileName = name
// const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com')
// const spaces = new aws.S3({
//     endpoint: spacesEndpoint,
//     accessKeyId: 'ZIUQE2KARPTALZMI7UUV',
//     secretAccessKey: '9OFYIzP4slKRwMoJieOmRGl8g6ICXocP1GnE0QM7A54'
//         // access และ secret key ได้จากการสร้างโดยกด manage keys เมื่อสร้างแล้ว
//         // ซักพัก secret จะไม่แสดงถ้าลืมต้องกด regenarate key หรือสร้างใหม่
// })

// const upload = multer({
//     storage: multerS3({
//         s3: spaces,
//         bucket: 'photoims/pdf', //ถ้าเซฟลง space ใช้แค่ photoims แต่เซฟลงโฟลเดอร์อีกทีเลย / ตามด้วยชื่อโฟลเดอร์
//         acl: 'public-read',
//         contentType: multerS3.AUTO_CONTENT_TYPE,
//         key: function(req, file, cb) {
//             console.log(file)
//             fileName = file.originalname
//             cb(name, file.originalname)
//         }
//     })
// }).array('file', 1)

// router.post('/upload', async function(req, res) {
//     let result = await db("tb_pdf").where("name", "=", req.body.name);

//     upload(req, res, function(Error) {

//         if (result == 0) {
//             let rows = await db("tb_pdf").insert({
//                 name: req.body.name,
//             });
//             // return res.send({ msg: "Success", indexpdfs: rows, ok: true });
//         } else {
//             // console.log('File has uploaded')
//             // response.redirect("/success");
//             // URL ของไฟล์ส่งกลับไปเพื่อนเก็บลิ้งไฟล์ลง database
//             const fileURL = `${spacesEndpoint.protocol}//photoims.${spacesEndpoint.host}/photoims/${fileName}`
//             res.send(fileURL)
//                 // return res.send({ msg: "Error", status: false });
//         }
//     })
// });


router.get("/", async function(req, res, next) {
    let row = await db("tb_pdf").orderBy("name", "desc");
    res.send({
        name: row,
    });
});


router.get("/id_pdf	/:id_pdf	", async function(req, res) {
    let row = await db("tb_pdf").where("id_pdf	", "=", req.params.id_pdf);
    if (row.length === 0) {
        res.send({ id_pdf: false });
    }
    res.send({
        // status: true,
        name: row[0],
    });
});


// router.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = router;