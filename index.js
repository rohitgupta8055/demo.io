const express=require('express');
const port=8000;

const app=express();
// setup ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');

//use express routes
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('server runing');
});