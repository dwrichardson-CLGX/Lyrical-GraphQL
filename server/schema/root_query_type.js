const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull,GraphQLBoolean } = graphql;

const ContactType = require('./contact_type');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const PlatformType = require('./platform_type');

//

const ClientType = require('./client_type');
const ProductType = require('./product_type');

//
const Lyric = mongoose.model('lyric');
const Song = mongoose.model('song');
const Client = mongoose.model('client');
const Product = mongoose.model('product');
const Contact = mongoose.model('contact');
const Platform = mongoose.model('platform');


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
    client:{
      type: ClientType,
      args: { id: { type: GraphQLID}},
      resolve(parentValue, {id}){
        return Client.findById(id);
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
    clients: {
        type: new GraphQLList(ClientType),
        resolve(){
          return Client.find({});
        }
    },
    contacts:{
      type: new GraphQLList(ContactType),
      resolve(){
         return Contact.find({});
      }

    },
    platforms:{
      type:  new GraphQLList(PlatformType),
      resolve(){
        return Platform.find({});
      }
    },
    findFlaggedProducts: {
      type: new GraphQLList(ProductType),
      args:{ isFlagged: {type: GraphQLBoolean} },
      resolve(parentValue, {isFlagged}){
       return Product.find({ IsFlagged : isFlagged });
      }
    },
    findIntegrationProducts: {
      type: new GraphQLList(ProductType),
      args: { ProductType: { type: graphql.GraphQLInt}},
      resolve(parentValue, { ProductType }){
          return Product.find({ ProductType:ProductType });
      }
    },
    findProductById: {
      type: new GraphQLList(ProductType),
      args: { id : { type: GraphQLID}},
      resolve(parentValue, { id }){
        return Product.findById({id: id});
      }
    },
     
    
    findProductsByClient:{
      type: new GraphQLList(ClientType),
      args: { clientId: { type: GraphQLID}},
      resolve(parentValue, {clientId}){
        return Client.findProducts(clientId);
      }
    }
    // ,
    // findContacts:{
    //   type: new GraphQLList(ContactType),
    //   resolve(parentValue){
    //     return Contact.find({});
    //   }
    // }
    
    
  })
});

module.exports = RootQuery;
