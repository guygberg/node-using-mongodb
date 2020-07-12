const mongoose = require('mongoose')
const Schema = mongoose.Schema;
export const ProductSchema = new Schema({name: String,
desctription: String,
category:String,
price: Number,
created_date: { type: Date, default: Date.now }})