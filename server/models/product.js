const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Description: { type:  String },
    Links: String,
    Contact: { name:String, email: String, tel: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    } 
  }, {usePushEach: true});


  ProductSchema.static.addContact = function(id, name, email, tel){
    const Contact = mongoose.model('user');

    return this.findById(id)
      .then(product => {
        const contact = new Contact({name, email, tel })
        product.Contact = contact;
        return Promise.all([contact.save(), product.save()])
          .then(([contact,  product]) => product);
      });

  }

  mongoose.model('product', ProductSchema);


//   const Lyric = mongoose.model('lyric');

//   return this.findById(id)
//     .then(song => {
//       const lyric = new Lyric({ content, song })
//       song.lyrics.push(lyric)
//       return Promise.all([lyric.save(), song.save()])
//         .then(([lyric, song]) => song);
//     });

