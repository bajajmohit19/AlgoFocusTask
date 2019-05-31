const moongoose = require('mongoose');
const url = require('../utils/env');

moongoose.connect(url.db);

moongoose.connection.on('open',()=>{
    console.log("connection made...")
})
module.exports = moongoose;