const express = require('express');
const userRoute = express.Router();



userRoute.post('/register', (request, response)=>{
    // var data = '';
    // request.on('data',(chunk)=>{
    //     data+=chunk;
    // })
    // request.on('end', ()=>{
    //     console.log(data);
    //     const json = JSON.parse(data);
    //     console.log(json);
    //     const userOperations = require('../db/helpers/usercrud');
    //     userOperations.register(json, response);
    // })
    const json = request.body;
    const userOperations = require('../db/helpers/usercrud');
    userOperations.register(json, response);
})

userRoute.post('/login',(request, response)=>{
    var data = '';
    request.on('data', (chunk)=>{
        data+=chunk;
    })
    request.on('end', ()=>{
        console.log(data);
        json = JSON.parse(data);
        console.log(json);
        userOperations.login(json, response);
    })
})
module.exports = userRoute;