const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    //id : {type: String},
    ProductName: {type: String },
    Description: { type:  String },
    Links: String,
    ContactName:  { type:String },
    ContactEmail: { type: String },
    ContactPhone: { type: String },
    IsFlagged: { type: Boolean },
    ProductType: { type: Number}
   
  }, {usePushEach: true});



  mongoose.model('product', ProductSchema);


