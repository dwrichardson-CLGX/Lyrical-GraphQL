const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const products = require('./product')

const ClientSchema = new Schema({
    Name: String,
    PrimaryPlatform: String,
    PrimaryContact: String,
    CorelogicContactName: String,
    CorelogicContactEmail: String,
    CorelogicContactPhone: String,
    ClientContactName: String,
    ClientContactEmail: String,
    ClientContactPhone: String,
    ClientNotes: String,
    ClientIdentifier: String,
    ProductIds: [{type: String}],
    Products: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }]


});

  

ClientSchema.statics.findProducts = function(id){
 /*   var prods =[];
    var prodids = [""];
    const Product = mongoose.model('product');
    //console.log(this.findById({_id: id}));

    this.findById(id).lean().exec(function(err, clients){
        console.log(clients);
    });
    let ids =  this.findById({_id: id}, function(err,client){
        console.log(client.ProductIds.length);
        for(var i =0; i< client.ProductIds.length; i++){
                prodids.push(client.ProductIds[i]);
               /// console.log(client.ProductIds[i]);
               Product.findById({_id: client.ProductIds[i]}).lean()
               .exec(function(er,products){
                  // console.log(products);
                   prods.push(products);
                    console.log(prods);
                    return prods;
               })
            }
        
    });
    console.log(prods);
    return prods;
*/
    return this.findById(id)
            .populate('products')
            .then(client => client.Products);

}

ClientSchema.statics.addProduct = function(id,ProductName,Description,Links,ContactName,ContactEmail,ContactPhone){
    const Product = mongoose.model('product');
    return this.findById(id)
    .then(client => {
        const product = new Product({ 
            ProductName,Description,Links,ContactName,ContactEmail,ContactPhone
        })
        client.products.push(product);
        return Promise.all([client.save()])
            .then(([client]) => client);
    })

}
mongoose.model('client', ClientSchema);
