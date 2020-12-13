const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductName: {type: String },
    Description: { type:  String },
    Links: String,
    ContactName:  { type:String },
    ContactEmail: { type: String },
    ContactPhone: { type: String },
    IsFlagged: { type: Boolean }
   
  }, {usePushEach: true});



  mongoose.model('product', ProductSchema);


//   const Lyric = mongoose.model('lyric');

//   return this.findById(id)
//     .then(song => {
//       const lyric = new Lyric({ content, song })
//       song.lyrics.push(lyric)
//       return Promise.all([lyric.save(), song.save()])
//         .then(([lyric, song]) => song);
//     });

