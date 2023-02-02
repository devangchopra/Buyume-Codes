const Product = require("./models/product");

async function addProduct(){
    try{
        const product = await Product.create({
            description : "New Aging Cream",
            price : 1000
        });
        console.log("New Product Added" , product);
    }    
    catch(err){
        if(err){
            console.log(err);
        }
    }
}


addProduct();