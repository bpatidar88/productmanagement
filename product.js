const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        price:{
            type:Number,
            required:true,
            trim:true
        },
        category:{
            type:String,
            required:true,
            trim:true
        },
        instock:{
            type:Boolean,
            default:true
        },
        image:{
            type:String,
        }
    }
)

const Product = mongoose.model('Product', productSchema);
module.exports = Product;