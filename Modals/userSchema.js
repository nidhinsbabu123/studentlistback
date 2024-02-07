const mongoose = require('mongoose')

const validator = require('validator')

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('Invalid E-mail Id')
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlenth:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }

})

const students = new mongoose.model('students',userSchema)

module.exports=students