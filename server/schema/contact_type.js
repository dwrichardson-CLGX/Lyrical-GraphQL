const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
 
 

const ContactType = new GraphQLObjectType({
    name: 'ContactType',
    fields: () => ({
        id: { type: GraphQLID},
        Name: { type: GraphQLString },
        Email: { type: GraphQLString},
        Phone : { type: GraphQLString },
        InternalContact: { type: GraphQLString },
        InternalEmail: { type: GraphQLString }

    })
});

module.exports = ContactType;