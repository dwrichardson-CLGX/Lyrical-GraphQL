const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean
} = graphql;
const Product = mongoose.model('product');

const ProductType = new GraphQLObjectType({
    name: 'ProductType',
    fields: () => ({
        id: {type: GraphQLID},
        ProductName: {type: GraphQLString},
        Links: { type: GraphQLString },
        Description: { type: GraphQLString},
        ContactName: { type: GraphQLString},
        ContactEmail: { type: GraphQLString},
        ContactPhone : { type: GraphQLString},
        IsFlagged: { type: GraphQLBoolean },
        ProductType: { type: GraphQLInt}
    //     contact: { type: new GraphQLObjectType({
    //          name:'ContactType',
    //          fields: () => ({
    //              name: {type: GraphQLString},
    //              email: {type: GraphQLString},
    //              phone: {type: GraphQLString}

    //          })
    //     })
    //  }
    })
});

module.exports = ProductType;