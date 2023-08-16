// ------>Day4 Task :MongoDb queries


// //question1.Write MongoDb query to diaplay all the restaurant which is in the borough Bronx.
// Answer:db.restaurants.find({borough:Bronx})

// //question2.Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100. 
// Answer:db.restaurants.find({"grades.score":{$gt:80,$lt:100}})

// //question3.Write a MongoDb query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168
// Answer:
// db.restaurants.find({
//   $and: [
//     { "cuisine": { $ne: "American " } },
//     {
//       $and: [
//         { "grades.score": { $gt: 70 } },
//         { "address.coord.0": { $lt: -65.754168 } }
//       ]
//     }
//   ]
// })