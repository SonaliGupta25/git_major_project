const express = require('express');
const app = express();
const port = 8002;

// use express router
app.use('/', require('./routes'));



app.listen(port, function(err){
     
       if(err){
           console.log('Error in running the server',err);
           //console.log(`Error:${err}`);
       }
       console.log('Successful!! Server running on port',port);
});