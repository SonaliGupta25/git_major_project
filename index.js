const express = require('express');
const path = require('path');
const app = express();
const port = 8002;


const expressLayouts = require('express-ejs-layouts');

app.use(express.static('assests'));
app.use(expressLayouts);

// use express router
app.use('/', require('./routes'));


app.set('view engine','ejs');
//app.set('views','./views');
app.set('views',path.join(__dirname,'views'));



app.get('/',function(req, res){
      
    return res.render('home',{
        title: "TODO App",
        //todo_list: todoList
    });
});

app.listen(port, function(err){
     
       if(err){
           console.log('Error in running the server',err);
           //console.log(`Error:${err}`);
       }
       console.log('Successful!! Server running on port',port);
});