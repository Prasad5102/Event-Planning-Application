const mongoose = require("mongoose");
const validator=require("validator");


mongoose.connect("mongodb+srv://prasadbodke5102:Prasad5102@cluster0.rlzznwl.mongodb.net/mernproject");

const userschema=new mongoose.Schema({
    name :{
        type:String,
        required: [true, "Name Required!"],
        minLength:[3,"Name must contains at least 3 charactors"],

    },
    email : {
        type:String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please provide valid email!"],   
    },
    subject :{
        type: String,
        required: [true, "Subject Required!"],
        minLength:[5, "Subject must contain at least 5 characters!"],

    },
    message:{
        type:String,
        required: [true, "Message Required!"],
        minLength: [10, "Message must contain at least 10 characters!"],


    }
})


const user=mongoose.model("message",userschema);
module.exports={
    user
}