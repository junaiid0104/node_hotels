const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum: ["chef","waiter","manager"]

    },
    mobile:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
   
    

})

const Person = new mongoose.model('Person',personSchema);
module.exports = Person;


