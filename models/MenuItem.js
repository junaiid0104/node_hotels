const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        enum: ["sour","sweet","spicy"],
        required:true
    },
    is_drink:{
        type:Boolean,
        required:false,
    },
    ingredients:{
        type:[String],
        default:[]

    },
    num_sales:{
        type:Number,
        default:[]
       
    },

})

const MenuItem = new mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;


