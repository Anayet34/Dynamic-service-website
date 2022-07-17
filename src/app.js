const express = require("express");
const hbs = require("hbs");
const app= express();
const mongoose =require("mongoose");
const bodyParser=require('body-parser')
const routes= require('./routes/main')
const Detail= require("./models/Detail")
// const Slider= require("./models/Slider")
const Service=require("./models/Service")


app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)


//hbs
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//db connection
mongoose.connect("mongodb+srv://anayet40:anayet40@cluster0.rlcgi2h.mongodb.net/anayet40?retryWrites=true&w=majority",()=>{
    console.log("db connect");

    // Service.create([
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title: 'Learn Project',
    //         description:'We provide courses that helps our student in learning and in placement.',
    //         linkText:'https://www.learn.com',
    //         link:'Learn'
    //     },
    //     {
    //         icon:'fab fa-accusoft',
    //         title: 'Provide Best Courses',
    //         description:'We provide courses that helps our student in learning and in placement.',
    //         linkText:'https://www.learn.com',
    //         link:'check'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title: 'Learn Project',
    //         description:'We provide courses that helps our student in learning and in placement.',
    //         linkText:'https://www.learn.com',
    //         link:'Learn'
    //     },
    // ])


    // Slider.create([
    //     {
    //         title:'Learn javascript in very easy manner',
    //         subTitle:'javascript is one of the most popular programming language.',
    //         imageUrl:"/static/images/pic.png"
    //     },
    //     {
    //         title:'javascript in very easy manner',
    //         subTitle:'node is one of the most popular programming language.',
    //         imageUrl:"/static/images/pic1.jpg"
    //     },
    //     {
    //         title:'very easy manner',
    //         subTitle:'express is one of the most popular programming language.',
    //         imageUrl:"/static/images/pic2.jpg"
    //     },
    // ])


    // Detail.create({
    //     brandName:"INFO",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
              
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
               
    //         },
    //         {
    //             label: "Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label: "About",
    //             url:"/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url:"/contact-us"
    //         },
    //     ],
    // })
})

mongoose.con



app.listen(process.env.PORT | 5556, ()=>{
    console.log("start")
});