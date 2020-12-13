const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const products = require('./product')

const ClientSchema = new Schema({
    ClientName: String,
    PrimaryPlatform: String,
    Products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]


});