const { Slider } = require("@material-ui/core")
const express=require("express")
const { route } = require("express/lib/application")
const async = require("hbs/lib/async")
const Contact = require("../models/Contact")

const Detail = require("../models/Detail")
const Service = require("../models/Service")
// const Slider = require("../models/Slider")

const routes= express.Router();

routes.get("/", async (req,res) =>{

    const details= await Detail.findOne({"_id":"629aad33ef3a1b864aee6138"})
    // const slides= await Slider.findOne

    const services=await Service.find()

    res.render("index",{
        details:details,
        // slides:slides
        services:services
    });
});

routes.get("/gallery", async(req,res) =>{
    const details= await Detail.findOne({"_id":"629aad33ef3a1b864aee6138"})
    res.render("gallery", {
        details: details,
    });
});


routes.post("/process-contact-form",async (request, response)=>{
    console.log("form is submitted");
    console.log(request.body);
    //save the data to db
    try{

        const data=await Contact.create(request.body)
        console.log(data);
        response.redirect("/")

    }catch(err)
    {
        console.log(err);
        response.redirect("/")
    }
})


module.exports=routes;