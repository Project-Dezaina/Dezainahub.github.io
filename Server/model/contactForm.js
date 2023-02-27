const mongoose = require("mongoose");



const donorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required."],
        minLength: 3,
        maxLength: 25,
    },
    email:{
        type: String,
        required:[true, " email is required "]
        
    },
    phone: {
        type: Number,
        required: [true, "Phone Number Required."],
        unique: true,
      },
      CompanyName:{
        type: String,
        required: [true, "Name Required."],
        minLength: 3,
        maxLength: 25,
    },
    WebsiteURl:{
        type: String,
        required: [true, "Url Required."],
        // minLength: 3,
        // maxLength: 25,
    },
    
  
})

const User = mongoose.model('donorSchema', donorSchema);

module.exports = User;