//Defining the properties of mondo db batabse
//Mongodb running on atlas

const mongoose = require("mongoose");
const { isModuleNamespaceObject } = require("util/types");

const url = "mongodb+srv://DevangChopra:1234@cluster0.wi9hvmz.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery" , false);
mongoose.connect(url,{
    useNewUrlParser : true,
});

const db = mongoose.connection;
db.on("error" , console.error.bind(console, "connection error: "));
db.once("open" , function(){
    console.log("Connected to databse successfully");
});

module.exports={
    db
};
