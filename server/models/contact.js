const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const ContactSchema = new Schema({
    Name : { type: String},
    Email : { type: String},
    Phone: {type: String},
    InternalContact: {type: String},
    InternalEmail: {type: String}
 
  }, {usePushEach: true});
 
  mongoose.model('contact', ContactSchema);
 