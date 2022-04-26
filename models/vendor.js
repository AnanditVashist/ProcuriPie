const mongoose=require('mongoose')

const vendorSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactName:{
        type: String,
    },
    phoneNumber:{
        type: String
    }
    }
)

module.exports=mongoose.model('Vendor',vendorSchema)