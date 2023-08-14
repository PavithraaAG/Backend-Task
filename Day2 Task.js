// ------>Day2<-----

const express = require("express");
const app = express();

 
const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.post("/",(req,res)=>{
    var name=req.body.name;
    var salary=req.body.salary;
    let alpha=/^[a-zA-Z]+$/;
    let number=/^[0-9]+$/;
    if(name && salary ){
        if(alpha.test(name) && number.test(salary) && typeof(name)==="string" && typeof(salary)==="number"){
            res.status(200).send({success:"success"})
        }
        else{
            res.status(400).send("Error");
        }
    }else{
        res.status(400).send("Error");
    }

})
app.post("/search/:name/:age",(req,res)=>{
    const name = req.params.name;
    const age=req.params.age;
    let alpha=/^[a-zA-Z]+$/;
    let number=/^[0-9]+$/;
    if(name && salary ){
        if(alpha.test(name) && number.test(age) && typeof(name)==="string" && typeof(age)==="number"){
            res.status(200).send({success:"success"})
        }
        else{
            res.status(400).send("Error");
        }
    }else{
        res.status(400).send("Error");
    } 
})


app.listen(3000,() => {
    console.log("listening on ");
});

