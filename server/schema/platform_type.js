const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
 
 

const PlatformType = new GraphQLObjectType({
    name: 'PlatformType',
    fields: () => ({
        id: { type: GraphQLID},
        Name: { type: GraphQLString }  
    })
});

module.exports = PlatformType;