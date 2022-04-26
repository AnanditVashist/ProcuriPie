const mongoose=require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const companySchema=new mongoose.Schema({
    
    items: [{
        type: mongoose.Schema.ObjectId,
        ref:'Item'
        required: true
    }],
    requester:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required: true
    },
    admin:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required: true
    },
    status:{
        type:String,
        default:'UnderReview',
        enum;['UnderReview','Declined','Approved']
    }
    },
    {timestamps:true}
)
orderSchema.plugin(AutoIncrement,{inc_field: 'uId'})
module.exports=mongoose.model('Order',orderSchema)