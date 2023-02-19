const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({path:'./.env'})
app.use(express.json());
// require("./db/conn");
// app.use(require('./routes/auth.js'))
const PORT = process.env.PORT;

const middleware = (req,res, next)=>{
    console.log("middleware occures");
    next();
}

  app.listen(PORT, () => {
    console.log(`donationService listening http://localhost:${PORT}`);
  });
  