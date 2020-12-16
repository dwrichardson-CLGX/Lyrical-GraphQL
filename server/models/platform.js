const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const PlatformSchema = new Schema({
    Name : { type: String}
 
  }, {usePushEach: true});
 
  mongoose.model('platform', PlatformSchema);
 