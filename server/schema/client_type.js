const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ProductType = require('./product_type');
const Client = mongoose.model('client');

const ClientType = new GraphQLObjectType({
    name: 'ClientType',
    fields: () =>({
        id: { type: GraphQLID},
        Name: { type: GraphQLString },
        PrimaryPlatform: {type: GraphQLString },
        ProductIds: { type : new GraphQLList(GraphQLID)},
        Products:{
          type: new GraphQLList(ProductType),
          resolve(parentValue) {
              return Client.findProducts(parentValue.id);
          }
        }
        
    })
  });



  module.exports = ClientType;