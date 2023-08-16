// Task Date:14/08/2023 ---------------------> Day6
// Question: CRUD Operation using params
// Create different routes in express to perform crud operation with params
//  Answer: CRUD Operation
const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url="mongodb://0.0.0.0:27017/Assignment"
const client = new MongoClient(url);
const fs = require("fs");

app.get('/crud/1/:name/:salary', (req, res) => {
    let name = req.params.name
    let salary = req.params.salary
    let obj = { name: name, salary: salary}
    client.connect(url).then(()=>{
            console.log("connected")
            const DB=client.db("Assignment");
            // DB.createCollection("crud");
            const add=DB.collection("crud");
            add.insertOne(obj,()=>
            {
                console.log("added")
            })
            console.log("created collection");
            
        })
        console.log(obj)
    res.send("Created collection!");
})

app.get('/crud/2/:name', (req, res) => {
    let name = req.params.name
    client.connect(url).then(()=>{
        console.log("connected")
        const DB=client.db("Assignment");
        const add=DB.collection("crud");
        add.find({name}).toArray().then((data)=>{
            res.send(data);
        })
      
        
    })
   console.log('Reading collection!');
})

app.get('/crud/3/:name/:updatedname', (req, res) => {
    let name = req.params.name
    let updatedname = req.params.updatedname
    client.connect(url).then(()=>{
        console.log("connected")
        const DB=client.db("Assignment");
        const add=DB.collection("crud");
        add.updateOne({name:name},{$set:{name:updatedname}})
        .then((data)=>{
            res.send(data)
        })
        
    })
    console.log('update Running!');
})
app.get("/crud/3/:salary/:updatedsalary",(req,res)=>{
    let salary=req.params.salary;
    let updatedsalary=req.params.updatedsalary;
    console.log("connected")
        const DB=client.db("Assignment");
        const add=DB.collection("crud");
        add.updateOne({salary:salary},{$set:{salary:updatedsalary}})
        .then((data)=>{
            res.send(data)
        })
})

app.get('/crud/4/:name', (req, res) => {
    let name = req.params.name
    client.connect(url).then(()=>{
        console.log("connected")
        const DB=client.db("Assignment");
        const add=DB.collection("crud");
        add.deleteOne({name:name})
        .then((data)=>{
            console.log(data)
        }); 
    })
    res.send('delete');
})


//Question: Fetch the data from a collections and write it to a textfile.
//   Answer: Fetch the Mongodb data and convert it into txt file format
client.connect(url).then(()=>{
    console.log("connected")
    const DB=client.db("Assignment");
    const add=DB.collection("restaurants");
    add.find({}).toArray().then((data)=>{
       console.log(data)
        fs.writeFile("MongoDB.txt",JSON.stringify(data),(err, res) => {
            if(err) throw err;
            else{
                console.log("written");
            }
        })
    })
    
})



app.listen(8080,() => {
    console.log("server is running!");
});

//3.write a MongoDB query to find the higesht score for restaurants
//db.hotel.aggregate([{$group:{_id:"$name",max:{$max:{$max:"$grades.score"}}}}])

//4.write a MongoDB query to find the lowest score for each restaurants
//db.hotel.aggregate([{$group:{_id:"$name",min:{$min:{min:{$min:"$grades.score"}}}}}])

//5.write a MongoDB query to find the count of restaurants in each borough
//db.hotel.aggregate({$group:{_id:"$borough",sum:{$sum:1}}})

//6.write a MongoDB query to find the count of restaurants that receive grade of A for each cuisine.
//db.hotel.aggregate({$match:{"grades.grade":"A"}},{$group:{_id:"$cuisine",sum:{$sum:1}}})