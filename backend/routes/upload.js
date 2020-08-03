const express = require("express");
const router = express.Router();
const db = require("../lib/dbconn.js");
const multer = require("multer");
const mysql = require("mysql");


app.use(cors())
app.use(express.static('./1'))
app.use(bodyParser.json({ limit: '100mb' }));

app.post('/upload', (req, res) => {
    const { image } = req.body;
    base64Img.img(image, './1', Date.now(), function(err, filepath) {
        const pathArr = filepath.split('/')
        const fileName = pathArr[pathArr.length - 1];

        res.status(200).json({
            success: true,
            url: `http://127.0.0.1:${port}/${fileName}`
        })
    });
});

// var path = require("path");
// var DIR = "./uploads";
// let storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//     callback(null, DIR);
//   },
//   filename: function(req, file, cb) { 
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// let upload = multer({ storage: storage });
// router.post("/create", upload.single("name"), function(req, res) {
//   message: "Error! in image upload.";
//   if (!req.file) {
//     console.log("No file received");
//     message = "Error! in image upload.";
//     res.send({ message: message, status: "danger" });
//   } else {
//     console.log("file received");
//     console.log(req);
//     var sql = "INSERT INTO tb_file (title,name) VALUES ('" + req.body.title + "','" + req.file.filename + "')";
//     var query = db.query(sql, function(err, rs) {
//       res.send({ status: true });
//     });
//   } 
// });

// router.get('/',function(req,res,next){
//   let rows =  db.query('SELECT * FROM tb_file ', function(err,rs){
//     res.json('list-upload',{shows:rows});
//   });
// });

// router.post('/save',function(req,res){
//   let = rows = db.query(`INSERT INTO tb_file(title,name) VALUES(${db.escape(req.body.title)},${db.escape(req.body.name)})`)
//   res.send({status:true})
// })

module.exports = router;