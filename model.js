const mongoose = require('mongoose')

const empc = mongoose.model('product',{
    id:String,
    title:String,
    category:String,
    price:Number,
    description :String,
    image:String
})

module.exports=empc