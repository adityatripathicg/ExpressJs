// const express = require("express");
// const app = express();

// //console.dir(app);

// let port = 8080;
// app.listen(port,()=>{
//     console.log(`app listening on port ${port}\n Server initiated!!!`);
// })
// app.use((req,res)=>{
//     console.log(req);
    
//     console.log("Request Received");
//     res.send("Response Received from Server!");
//     res.send({
//          name: "CG",
//          age: "20",
//      });
//     res.send("<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>")
// });
// app.get("/",(req,res)=>{
//     res.send("You Contacted ROOT Path");
// })
app.get("/:apple/:id",(req,res)=>{
    console.log(req.params);
    res.send("You Contacted APPLE Path");
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("No Results");
})
// app.get("/orange",(req,res)=>{
//     res.send("You Contacted orange Path");
// })
// app.get("*",(req,res)=>{
//     res.send("This path does not exist, please correct your Route");
// });

// app.post("/",(req,res)=>{
//     res.send("You sent a post request to root path");
// })

const express = require('express');
const app = express();
let port = 3000;
app.listen(port,()=>{
   console.log(`APP LISTENING TO ${port}`);
});
let count = 0;
app.use((req, res)=>{
    count++;
    console.log(`${count} request received`);
    res.send("HOME PAGE");
});
app.get("/",(req,res)=>{
    res.send("HOME PAGE");
});