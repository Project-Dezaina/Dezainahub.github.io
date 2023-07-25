const express = require("express");
const dotenv = require("dotenv");
const app = express();
// app.use( cors())
dotenv.config({path:'./.env'})
require("./db/conn");
// const Donor = require("./models/donoeSchema")
app.use(express.json());
app.use(require('./routes/auth.js'))


const PORT = process.env.PORT;

// --------Trying For Node Mailer --------
// let PORT = 5000; 

const sendMail = require("./components/SendMail/SendMail");

app.get("/", (req,res)=> {
  res.send("I am a server")
});

app.get("/SendMail", sendMail)
const start = async() => {
  try {
    app.listen(PORT, ()=> {
      console.log('I am live in Port no. ${PORT}');
    });
    
  }catch (error){}
}

// --------Try end For Node Mailer --------



const middleware = (req,res, next)=>{
    console.log("middleware occures");
    next();
}


  app.listen(PORT, () => {
    console.log(`donationService listening http://localhost:${PORT}`);
  });