import mongoose from "mongoose";
const wishlist_schema=new mongoose.Schema({
    cust_id:{type:String},
    prod_id:{type:String},
    name:{type:String},
    category:{type:String},
    description:{type:String},
    price:{type:String},
    banner:{type:String}
})

export default mongoose.model.Wishlist||mongoose.model("wishlist",wishlist_schema)