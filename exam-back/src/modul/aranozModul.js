import mongoose from "mongoose";

const aranozSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
  });
  
 export const Aranoz = mongoose.model("Aranoz", aranozSchema);