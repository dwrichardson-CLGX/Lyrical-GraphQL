const express = require('express');
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI 
const MONGO_URI ='mongodb://localhost:27017/MyDb';
// 'mongodb://dwain:mfm6zCSgvLLlzL1V@dwainmongo-shard-00-00.6kmb3.mongodb.net:27017,dwainmongo-shard-00-01.6kmb3.mongodb.net:27017,dwainmongo-shard-00-02.6kmb3.mongodb.net:27017/test?ssl=true&replicaSet=atlas-btpgq6-shard-0&authSource=admin&retryWrites=true&w=majority' 
//'mongodb+srv://dwain:mfm6zCSgvLLlzL1V@dwainmongo.6kmb3.mongodb.net/test?retryWrites=true&w=majority';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
