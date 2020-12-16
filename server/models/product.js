const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    //id : {type: String},
    ProductName: {type: String },
    Description: { type:  String },
    Links: { type: String},
    ContactName:  { type:String },
    ContactEmail: { type: String },
    ContactPhone: { type: String },
    IsFlagged: { type: Boolean },
    ProductType: { type: Number},
    ProductNotes: {type: String}
   
  }, {usePushEach: true});



  mongoose.model('product', ProductSchema);


