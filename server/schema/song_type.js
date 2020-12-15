const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const LyricType = require('./lyric_type');
const Song = mongoose.model('song');

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    artist: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return Song.findLyrics(parentValue.id);
      }
    }
  })
});



const ProductType = new GraphQLObjectType({
   name: 'ProductType',
   fields: () => ({
     id: {type: GraphQLID},
     productName : { type: GraphQLString },
     isActive: { type: graphql.GraphQLBoolean }

   })
});

// const ClientType = new GraphQLObjectType({
//   name: 'ClientType',
//   fields: () =>({
//       id: { type: GraphQLID},
//       name: { type: GraphQLString },
//       products:{
//         type: new GraphQLList(ProductType),
//         resolve(parentValue) {
//             Song.find()
//         }
//       }
      
//   })
// })


// const ContactType = new GraphQLObjectType({
//   name: 'ContactType',
//   fields: () =>({
//       id: { type: GraphQLID},
//       name: { type: GraphQLString },
//       email : { type: GraphQLString },
//       phone: { type: GraphQLString }
      
//   })
// })

module.exports = SongType;
