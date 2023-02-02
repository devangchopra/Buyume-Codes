const Product = require("../models/product");

async function addProduct(req,res){
    const descriptions = req.body.description;
    const prices = req.body.price;
    try{
        const product = await Product.create({
            description : descriptions,
            price : prices
        });
        console.log("New Product Added" , product);
        res.send(product);
    }    
    catch(err){
        if(err){
            console.log(err);
        }
    }
}

module.exports={
    addProduct
}