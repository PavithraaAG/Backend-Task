// console.log("welcome");
// console.log(__filename);
// console.log(__dirname);
// const area=require("./ext.js")
// console.log(area);
const express = require("express");
const admin = require("./admin");
const app = express();//intialising express app
//method calling  used for creating a server instance

// app.get("/", (req, res,next) =>{
//  setTimeout(()=>{
//     try{
//         console.log("Async code Example")
//         throw new Error("hello Error!");
//     }catch(e){
//         next(e)
//     };
//  },1000)
// })

//app.get("url", function(req, res))

// app.use("/user",(req, res,next) => {
//     console.log("hello user");
//     next();//middleware
// })
//


// app.use('/admin',admin)
// app.get("/home", (req, res) =>{
//     //console.log("<h2>welcome</h2>");
//     res.send("<h2>welcome to home page</h2>");
   
// })

// const errorHandler =require("./errorHandler");
// const getUser=()=>undefined;
// app.get("/", (req, res,next)=>{
//     try{
//         const user = getUser();
//         if(!user){
//             throw new Error("user not found");
//         }
//     }catch(error){
//         next(error)
//     }
// });
// app.use(errorHandler)


// const authenticate = (req,res,next)=>{
//     const random=(min,max)=>Math.floor(Math.random()*(max-min))+min;
//     const isAuthenticated=random(0,2)
//     if(isAuthenticated){
//         next();
//     }
//     else{
//         res.send("user is not authenticated")
//     }
// }
// app.get("/",authenticate,(req, res)=>{
//     res.send("Login");
// })



// app.get("/search/:name/:age",(req,res)=>{
//     res.send(req.params);
// })


// app.post("/search/:name/:age",(req,res)=>{
//     const name = req.params.name;
//     const age=req.params.age;
//     res.send(name,age);
// })

// const bodyParser=require("body-parser")
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.post("/",(req,res)=>{
//     var name=req.body.name;
//     var salary=req.body.salary;
//     if(!name && !salary){
//         res.status(400).send("Error");
//     }else{
//         res.status(200).send({success:"success"})
//     }
// })


// ------------>Day 2<---------------
// app.get('/hello', function(req, res){
//     res.send("Welcome")
// });

// app.get("/search/:name/:age",(req,res)=>{
//     res.send(req.params);
// });

// app.post("/search/:name/:age",(req,res)=>{
//     var user=req.params.name;
//     var age=req.params.age;
//     res.send(user,age);

// })
// const bodyParser=require("body-parser")
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.post("/",(req,res)=>{
//     var name=req.body.name;
//     var salary=req.body.salary;
//     if(!name && !salary){
//         res.status(400).send("Error");
//     }else{
//         res.status(200).send({success:"success"})
//     }
// })


app.listen(8080,() => {
    console.log("server is running");
});