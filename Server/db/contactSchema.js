const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    yname:{
        type : String,
        required: [true, "Name Required."],
            minLength: 1,
            maxLength: 25,
    },
    CompanyName:{
        type: String,
        required: [true, "Name Required."],
    },
    MessageBoxInput:{
        type:String,
        required:[true,"String required"]
    },
    WebURL:{
        type: String,
        required: [true, "about Required."],
    },
    MobileNo:{
        type:Number,
        required: [true, "about Required."],
    },
    EmailId:{
        type: String,
        required: [true, "about Required."],
    },
})

const ContactUs = mongoose.model('contactSchema', contactSchema);

module.exports = ContactUs;