const mongoose = require("mongoose");

const DB = process.env.DB

mongoose.connect(DB).then(()=>{
    console.log(' connection succesfull');
}).catch((err)=> console.log('no connection'));