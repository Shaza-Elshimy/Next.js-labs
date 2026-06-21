import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },

  price:{
    type:Number,
    required:true
  },

  description:{
    type:String,
    required:true
  },

  category:{
    type:String,
    required:true
  },

  brand:{
    type:String,
    required:true
  },

  rating:{
    type:Number,
    default:0
  },

  image:{
    type:String,
    required:true
  }

});


export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);