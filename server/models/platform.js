const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const PlatformSchema = new Schema({
    Name : { type: String},
    Description: { type:  String },
    Links: { type: String},
    ContactName:  { type:String },
    ContactEmail: { type: String },
    ContactPhone: { type: String }, 
    PlatFormNotes: {type: String}
 
  }, {usePushEach: true});
 
  mongoose.model('platform', PlatformSchema);
 