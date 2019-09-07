const express = require('express');
const path = require('path');
const app = express();
const port = 8002;

// use express router
app.use('/', require('./routes'));
app.use(express.static('assests'));

app.set('view engine','ejs');
//app.set('views','./views');

app.set('views',path.join(__dirname,'views'));

var todoList = [
    {
        description: "Why not add a task",
        date : "MAY 2,2019",
        category: ""
    },
    {
        description: "Let's Make a TODO App",
        date : "APR 28,2019",
        category: "SCHOOL"
    },
    {
        description: "Annual report submission deadline",
        date : "JUN 1,2019",
        category: "WORK"
    }
]

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