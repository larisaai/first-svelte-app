const express = require("express")
const app = express()
const formidable = require('formidable');
const ObjectID = require('mongodb').ObjectID;

// Connect to the mongo server
const mongoClient = require("mongodb").MongoClient

// Connecting with the URL, we use localhost // own domain: louise.com:27017
const mongoUrl = "mongodb://localhost:27017"

// THE DATABASE
let db = '';
let usersCollection = '';
let postsCollection = '';

// Connecting to the server and server, the useUnified (middelware), error and response
mongoClient.connect(mongoUrl, { useUnifiedTopology: true }, function (err, response) {
    if(err){ console.log("database error"); return }
    // Connect to a specific datbase
    db = response.db("company")
    usersCollection = db.collection('users')
})


// ########################### ROUTES ###################### //
        app.get("/users", (req,res)=>{
            // TRY CATCH SHOULD BE ADDED
        // Getting the request from the frontend
        let searchFor = req.query.searchFor;

        //  REGEX for the input from the frontend
        var regexConst = new RegExp( searchFor, 'i') // A, a incasesentive

        // Mongo query
        db.collection("users").find({"firstName": regexConst}).toArray ( (err, ajUsers) => {

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

    app.get("/users/user/friends", (req,res)=>{
        // TRY CATCH SHOULD BE ADDED
        const userId = "5eb41a83f7d7773700a4d72f"
        db.collection("users").find({"_id": new ObjectID(userId)}).toArray( (err, result) => {
        if(err){ console.log("database error - cannot read");  res.status(500).send([]); return } 

        res.header("Access-Control-Allow-Origin", "*")

        // JSON, same as JSON.PARSE
        console.log(result[0].friends)
        res.json(result[0].friends)
        // res.json(result.value.posts)

    } )

})



///// post a post on fb

// app.post("/posts", (req, res) =>{

//     let userId ="5e95eb18684c3d5388494eea";
//     let message = "testing22222"
//     const collection = db.collection("test")
//     collection.insertOne( {"message": message }, function(err, res) {
//         if(err){console.log('cannot insert'); return }
//         console.log('everything went well')
//         res.send("x")
//     })

// })

//register user
app.post("/users", (req, res) =>{
    const form = formidable({ multiples: true });
        form.parse(req, (err, fields, files) => {
        // validate the data
        // const usersCollection = db.collection('users');
        const firstName = fields.firstName;
        const lastName = fields.lastName;
        const email = fields.email;
        const password = fields.password;
        const confirmPassword = fields.confirmPassword;
        const onlineStatus = 1; 
        const friends = [];
        const posts = [];

        usersCollection.insertOne( {"firstName": firstName,"lastName": lastName,"email": email, "password":password, "onlineStatus": onlineStatus,  "friends":friends, "posts":posts }, function(err, res) {
            if(err){console.log('cannot insert user'); return }
            console.log('user added')
            res.send(`${username} ${password}`)
        })
});
} )

app.post('/posts', (req,res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        const userId = '5eb41a83f7d7773700a4d72f';
        const message = fields.message;
        const collection = db.collection('users');
        // const postsCollection = db.collection('posts');
        
        // Insert in the user with id 5eb3d6c4a8f5795ba8946014 in the posts array
        collection.findOneAndUpdate(
            { _id: new ObjectID(userId) },
            { $push: { posts: { _id: new ObjectID(), message } } },
            (err, result) => err ? res.json(err) : res.json(result.value.posts)
            
            // res.json(result.value.posts[result.value.posts.length -1 ]._id)
    );
    
});
});

app.post('/addFriend', (req,res) => {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files) => {
        const userId = '5eb41a83f7d7773700a4d72f';
        const firstName = fields.firstName;
        const lastName = fields.lastName;
        const profilePicture = "https://res.cloudinary.com/hololink-io/image/upload/v1588697241/Use%20cases%20-%20higher%20resolution/iphone_ce8ebf.png"
        const collection = db.collection('users');
        
        // Insert in the user with id 5eb3d6c4a8f5795ba8946014 in the posts array
        collection.findOneAndUpdate(
            { _id: new ObjectID(userId) },
            { $push: { friends: { _id: new ObjectID(), firstName, lastName, profilePicture } } },
            (err, result) => err ? res.json(err) : res.json(result.value.posts)
            
            // res.json(result.value.posts[result.value.posts.length -1 ]._id)
    );
});
});


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