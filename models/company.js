const mongoose=require('mongoose')

const companySchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    employees: [{
        type: mongoose.Schema.ObjectId,
        ref:'User'
        required: true
    }],
    }
)

module.exports=mongoose.model('Company',companySchema)