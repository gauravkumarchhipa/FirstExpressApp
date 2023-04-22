const express = require("express");
const app = express();
const port = 4000;
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use("/api/v1", router);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.listen(port, ()=>{
    console.log(`Server is working on port : ${port}`);
})



// practice
// get file form
// app.get("/",(req,res)=>{
//     // console.log(path.join(__dirname + "/index.html"));
//     res.sendFile(path.join(__dirname + "/index.html"));
// });
// // post file data
// app.post("/api/v1/login",(req,res)=>{
//     res.send(`<p>Hello <b>${req.body.name}</b> your Login Sucessfully</p><br/>
//     <p>Your Email is ${req.body.email}</p>`);
//     console.log(req.body);
// });

// app.get("/about",(req,res)=>{
//     res.send("<h1>About Page</h1>")
// });

// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contact Page</h1>")
// });

// GET, POST, PUT, DELETE

// **************************************************
// api 

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname+"/index.html"));
//     // res.json({
//     //     name : "Gaurav",
//     //     email : "gaurav@gmail.com",
//     //     password : "1234"
//     // })
// });


// app.listen(port, ()=>{
//     console.log(`Server is working on port : ${port}`);
// })