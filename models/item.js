const mongoose=require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const itemSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity: {
        type: mongoose.Schema.ObjectId,
        ref:'User'
        required: true
    },
    units:{
        type:String,
        default: 'each'
        enum:['each','pounds','kg'],
        required: true
    },
    vendor;{
        type: mongoose.Schema.ObjectId,
        ref:'Vendor',
        required: true
    }},
    { timestamps: true } 
    
)
itemSchema.plugin(AutoIncrement,{inc_field: 'uId'})
module.exports=mongoose.model('Item',itemSchema)