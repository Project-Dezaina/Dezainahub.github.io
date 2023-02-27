const mongoose = require('mongoose');
const express = require('express')
const app = express();

const DB = 'mongodb+srv://mineshpatel029:Dezaina@cluster0.gjngof9.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB),{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}.then(() =>{
     console.log('Connectiion Successful');
}).catch((err) => console.log('NO connection'));

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



// mongodb+srv://mineshpatel029:Dezaina@cluster0.gjngof9.mongodb.net/?retryWrites=true&w=majority