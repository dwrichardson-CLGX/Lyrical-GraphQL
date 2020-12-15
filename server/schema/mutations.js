const graphql = require('graphql');
const { GraphQLObjectType,GraphQLList, GraphQLString, GraphQLID, GraphQLBoolean } = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const Lyric = mongoose.model('lyric');
const Product = mongoose.model('product');
const Client = mongoose.model('client');
const Contact = mongoose.model('contact');

const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const ProductType = require('./product_type');
const ClientType = require('./client_type');
const ContactType = require('./contact_type');

var Schema = mongoose.Schema; 

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: new graphql.GraphQLNonNull(GraphQLString) },
        artist: { type: new graphql.GraphQLNonNull(GraphQLString) }

      },
      resolve(parentValue, { title, artist }) {
        return (new Song({ title , artist })).save()
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.remove({ _id: id });
      }
    },
    addProduct:{
      type: ProductType,
      args: {
        ProductName: {type: GraphQLString},
        Links: {type: GraphQLString},
        Description: { type: GraphQLString},
        ContactName: { type: GraphQLString},
        ContactEmail: { type: GraphQLString},
        ContactPhone : { type: GraphQLString},
        IsFlagged: { type: GraphQLBoolean}
      },
      resolve(parentValue,{ ProductName, Links, Description, ContactName,ContactEmail,ContactPhone, IsFlagged}){
        return (new Product({ ProductName: ProductName, Links: Links, Description: Description, ContactName: ContactName, ContactEmail: ContactEmail, ContactPhone: ContactPhone, IsFlagged: IsFlagged})).save();
      }
    },
    addContact:{
        type:
          ContactType,
          args:{
            Name: { type: GraphQLString },
            Email: { type: GraphQLString },
            Phone: { type: GraphQLString },
            InternalContact: { type: GraphQLString },
            InternalEmail: { type: GraphQLString }
          },
          resolve(parentValue,{ Name, Email, Phone, InternalContact, InternalEmail}){
            return (new Contact({ Name, Email, Phone, InternalContact, InternalEmail })).save();
          }
        
    },
    addClient:{
      type: ClientType,
      args:{
        Name: {type: GraphQLString},
        PrimaryPlatform: { type: GraphQLString},
        PrimaryContact: { type: GraphQLString },
        ProductIds: { type : new GraphQLList(GraphQLID) },
        Products: { type : new GraphQLList(GraphQLID) }

      },
      resolve(parentValue, args){
        console.log(args);
        var ObjectId =  Schema.ObjectId;
        var id = new ObjectId("5fd6552df36d13f0c28211d1");
        var product = Product.findById(id);
        console.log(product.lean());       
        console.log(product.lean().model());
        var client = new Client();
       // client.Products.push(product);
        client.Name = args.Name;
        client.PrimaryPlatform = args.PrimaryPlatform;
        client.PrimaryContact = args.PrimaryContact;
        return client.save();

/*
        Client cli = new Client({ Name: args.Name, PrimaryPlatform: args.PrimaryPlatform,
         
          ProductIds: args.ProductIds
          });
          cli.Products.push(product);

          return cli;
*/
          
      }
    }
  
  }
});

module.exports = mutation;
