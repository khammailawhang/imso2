const aws = require('aws-sdk')
const multer = require('multer')
const express = require('express')
const multerS3 = require('multer-s3')
const route = express.Router()

var fileName = null
const spacesEndpoint = new aws.Endpoint('sgp1.digitaloceanspaces.com')
const spaces = new aws.S3({
    endpoint: spacesEndpoint,
    accessKeyId: 'SPN2B7MCT5SSCCJZ64SJ',
    secretAccessKey: 'jYDjALUsRBXWHap4e35CS/CD2AKMeJweIu1FWmqe8DA'
        // access และ secret key ได้จากการสร้างโดยกด manage keys เมื่อสร้างแล้ว
        // ซักพัก secret จะไม่แสดงถ้าลืมต้องกด regenarate key หรือสร้างใหม่
})

const upload = multer({
    storage: multerS3({
        s3: spaces,
        bucket: 'photoims/pdf', //ถ้าเซฟลง space ใช้แค่ photoims แต่เซฟลงโฟลเดอร์อีกทีเลย / ตามด้วยชื่อโฟลเดอร์
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function(request, file, cb) {
            console.log(file)
            fileName = file.originalname
            cb(null, file.originalname)
        }
    })
}).array('file', 1)

route.post('/', function(request, response, next) {
    fileName = null
    upload(request, response, function(error) {
            if (error) {
                console.log(error)
                response.status(500).json({ message: 'Server cannot save the file, please wait and try again later.', error: error })
            } else {
                console.log('File has uploaded')
                const fileURL = `${spacesEndpoint.protocol}//photoims.${spacesEndpoint.host}/pdf/${fileName}`
                response.send({ fileUrl: fileURL, fileName: fileName })
            }
        })
        // response.status(500).json({ message: 'Server crash please wait and try again later.' })
})

module.exports = route