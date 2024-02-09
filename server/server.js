const express = require('express')
const cors = require('cors')
const multer = require('multer')
const app = express()
app.use(cors())
app.use(express.json())

const storage =  multer.diskStorage({
    destination: function(req,file,cb){
    return cb(null,"./images")
    },
    filename:function (req,file,cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage})

app.get("/",(req,res)=>{
    res.send("welcome");
});
app.post("/upload",upload.array('photos', 12),(req,res)=>{
    console.log(req.body)
    console.log(req.file)
})
// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//     // req.files is array of `photos` files
//     // req.body will contain the text fields, if there were any
//   })
app.listen(8080,()=>{
    console.log("server is running");
})