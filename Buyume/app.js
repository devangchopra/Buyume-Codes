const express = require("express");
const port = 8000;
const app = express();


app.get("/" , function(req,res){
    res.end("<h1>Buyume</h1>");
});


app.post("/addproduct",require("./controllers/main").addProduct);
//Either Pass via Query
//Or pass via postman

app.listen(port,function(err){
    if(err){
        console.log("Error... " , err);
    }
    console.log("Working fine on port : " , port);
});
