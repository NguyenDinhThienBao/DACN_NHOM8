// Using Node.js `require()`
const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1/HeThongERP');
        console.log('Connect to mongodb successfully');
    }
    catch(err){
        console.error('Error connecting to mongodb');
        console.error(err);
    }
}
module.exports = { connect };