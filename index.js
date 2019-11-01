const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8003;


const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const sassMiddleware = require('node-sass-middleware');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(sassMiddleware({
    src:'./assests/scss',
    dest:'./assests/css',
    debug:true,
    outputStyle: 'extended',
    prefix: '/css'

}));

app.use(express.urlencoded());
app.use(cookieParser());


app.use(express.static('assests'));
app.use(expressLayouts);
app.set('layouts extractStyles',true);
app.set('layouts extractScripts',true);

app.set('view engine','ejs');
//app.set('views','./views');
app.set('views',path.join(__dirname,'views'));

app.use(session({
  name:'codeial',
  secret: 'blahsomething',
  saveUninitialized: false,
  resave: false,
  cookie :{
      maxAge:(1000*60*100)
  },
  store : new MongoStore({
      
          mongooseConnection : db,
          autoRemove : 'disabled'
  }, function(err){
      console.log(err || 'connect-mongodb setup not ok');
  })
})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
app.use(flash());

app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));

// app.get('/',function(req, res){
      
//     return res.render('home',{
//         title: "TODO App",
//         //todo_list: todoList
//     });
// });

app.listen(port, function(err){
     
       if(err){
           console.log('Error in running the server',err);
           //console.log(`Error:${err}`);
       }
       console.log('Successful!! Server running on port',port);
});