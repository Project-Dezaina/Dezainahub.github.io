const express = require("express");
const router = express.Router();

require('../db/conn.js');
// const ContactUs = require("../model/contactForm");
const ContactUs = require("../db/contactSchema")
router.get("/", (req, res) => {
    res.send("Hello home from  router.js");
});


router.post("/contactUs", async (req, res)=>{
    const {
        yname,
            CompanyName,
            MessageBoxInput,
            WebURL,
            MobileNo,
            EmailID,}=req.body;
        if (!yname||
        !CompanyName||
        !MessageBoxInput||
        !WebURL||
        !MobileNo||
        !EmailID) {
            return res.status(422).json({
                error: "plz"
            });
        };
        const contactUs = new ContactUs({
            yname,
            CompanyName,
            MessageBoxInput,
            WebURL,
            MobileNo,
            EmailID,
        });

        await contactUs.save();


        res.status(201).json({
            message: "send"
        });

    })


    module.exports =router;
    // Desaina@123
    // Dezaina