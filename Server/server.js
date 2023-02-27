const mongoose = require('mongoose');
const express = require('express');
const dotenv = require("dotenv");
const app = express();
dotenv.config({path:'./.env'})
const PORT = process.env.PORT;
const DB = process.env. DB
// mongoose.connect(DB)
// mongoose.connect(DB),{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// }.then(() =>{
//      console.log('Connectiion Successful');
// }).catch((err) => console.log('NO connection'));

const middleware =(req,res,next) => {
console.log ('Hello my middleware');

}
// middleware();

app.get('/' , (req,res) =>{
    res.send ('Hello World from the server');

});
app.get('/about' ,middleware, (req,res) =>{
    res.send ('Hello World from the server');

});
app.get('/COntact' , (req,res) =>{
    res.send ('Hello World from the server');

});
app.get('/' , (req,res) =>{
    res.send ('Hello World from the server');

});
app.listen(PORT, () => {
  console.log(`donationService listening http://localhost:${PORT}`);
});



// mongodb+srv://mineshpatel029:Dezaina@cluster0.gjngof9.mongodb.net/?retryWrites=true&w=majority

// const express = require("express");

// const app = express();

// app.use(express.json());
// // require("./db/conn");
// // app.use(require('./routes/auth.js'))


// const middleware = (req,res, next)=>{
//     console.log("middleware occures");
//     next();
// }
// app.get('/' , (req,res) =>{
//   res.send ('Hello World from the server');

// });

