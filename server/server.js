const express = require("express")
const app = express()

// Connect to the mongo server
const mongoClient = require("mongodb").MongoClient

// Connecting with the URL, we use localhost // own domain: louise.com:27017
const mongoUrl = "mongodb://localhost:27017"

// THE DATABASE
let db = ''


// ########################### ROUTES ###################### //

app.get("/users", (req,res)=>{


    // TRY CATCH SHOULD BE ADDED

    // Connecting to the server and server, the useUnified (middelware), error and response
    mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, (err, response) => {

        if(err){ console.log("database error"); return }

        // Connect to a specific datbase
        db = response.db("company")

        // Getting the request from the frontend
        let searchFor = req.query.searchFor;

        //  REGEX for the input from the frontend
        var regexConst = new RegExp( searchFor, 'i') // A, a incasesentive

        // Mongo query
        db.collection("users").find({"name": regexConst}).toArray ( (err, ajUsers) => {

            // Check if theres i a error
            if(err){ console.log("database error - cannot read");
            
            // ...
            res.status(500).send([]);
             return } 
    
            // Assigning the result to our ajusers
            // let ajUsers = result;

            // Let the system differnet ports talk to eachother 
            res.header("Access-Control-Allow-Origin", "*")

            // JSON, same as JSON.PARSE
            res.status(200).json(ajUsers)
    
        } )

    })

})












app.listen(80, err => {

    if(err){console.log("Server cant listen ..."); return}
    console.log("Server listening ....")
})


// CHECK IF ERROR,SO NOT CRASHING
process.on("uncaughtException", (err, data) => {

    // If i have an error
    if(err){console.log("Critical error, yet system keeps running")}
    return

})


// const express = require("express")
// const app = express();

// const mongoClient = require("mongodb").MongoClient
// const mongoUrl = "mongodb://localhost:27017/"
// global.db = ''




// app.get("/users", (req, res) => {
//     mongoClient.connect( mongoUrl, { useUnifiedTopology: true}, (err, res) => {
//         if(err){ console.log("database error"); return; }
//         db = res.db("company")
//         // console.log("database listening...")
   

//         let searchFor = req.querry.searchFor;
//         var regexConst = new RegExp(searchFor, "i")
//     try {
//         db.collection("users").find({"name": regexConst}).toArray( (err, ajUsers) =>{
//             if(err){ console.log("database error - cannot read");
//             res.status(500).send([]);
//              return; }
//             // console.log(res);
//             // res.send(dbResponse)
//             res.header("Acces-Control-Allow-Origin", "*")

//             res.status(200).json(ajUsers)
//         })
//     }catch(ex){
//         return res.status(500).send("system under update")
//     }
//     // res.send(ajUsers)
// })
// })

// app.listen( 80, err => {
//     if(err){ console.log("server error"); return}
//     console.log("server is listening...")
// })
// process.on("uncaughtException", (err, data) => {
//     if (err) {
//     console.log("critical error, yet system keeps running");
//     }
// })