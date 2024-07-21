const express = require('express')
const bp = require('body-parser')
const mongoose = require('mongoose')
const empc= require('./model')
const cors = require('cors');
const URL = "mongodb+srv://aa:gg11@cluster0.g3dqdcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URL)
    .then(() => {
        console.log('Mongo Connection Open')
    })
    .catch((err) => {
        console.log(err)
    })

var app = express()
app.use(bp.json())
app.use(cors())

app.post('/addproduct', (req, res) => {
    const product= new empc({...req.body})
    product.save().then(()=> console.log('user added'))
    res.send('user added')

})

app.get('/gg',async(req,res)=>{
    res.send("gg")
})

app.get('/loaddata',async(req,res)=>{
    const products= await empc.find();
    res.send(products)
})
app.get('/loaddata/:id',async(req,res)=>{
    const uid=req.params.id
    const products= await empc.findById(uid);
    res.send(products)
})
const startServer = async () => {
    await mongoose.connect(URL)
    app.listen(5000, () => {
        console.log('server is ready...!');
    })
}
startServer()
