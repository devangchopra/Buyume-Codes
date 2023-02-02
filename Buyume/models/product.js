const mongoose = require("mongoose");
//Here we will create schema

const productSchema = new mongoose.Schema(
    {
        description: {
            type : String
        },

        price: {
            type : Number
        }

    },

    {
        timestamps : true,
    }
);

//Now we will Create The Model

const Product = mongoose.model("Product",productSchema);

module.exports = Product;