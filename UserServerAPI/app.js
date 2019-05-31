const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.use('/', require('./api/userapi'));
app.use( require('./utils/cors'));


app.listen(process.env.PORT || 5430,(err)=>{
    if(err){
        console.log('server couldnt start due to ',err);
    }else{
    console.log('Server Start.....')
}
})