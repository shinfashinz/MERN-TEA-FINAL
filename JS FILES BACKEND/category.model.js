import mongoose from "mongoose";
const category_schema=new mongoose.Schema({
    category:{type:String},
    about:{type:String}
})
 
export default mongoose.model.Category||mongoose.model("category",category_schema)