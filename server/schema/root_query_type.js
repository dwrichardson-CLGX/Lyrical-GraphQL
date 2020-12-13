const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull,GraphQLBoolean } = graphql;
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const ProductType = require('./product_type');

const Lyric = mongoose.model('lyric');
const Song = mongoose.model('song');
const Product = mongoose.model('product');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Song.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Lyric.findById(id);
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(){
        return Product.find({});
      }
    },

    findFlaggedProducts: {
      type: new GraphQLList(ProductType),
      args:{ isFlagged: {type: GraphQLBoolean} },
      resolve(parentValue, {isFlagged}){
       return Product.find({ IsFlagged : isFlagged });
      }
    } 
    
    
  })
});

module.exports = RootQuery;
