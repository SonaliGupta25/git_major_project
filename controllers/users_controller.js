const User = require('../models/user');


module.exports.profile = function(req, res){
   // return res.end('<h1>Users Profile</h1>');
   return res.render('user_profile',{
       title: 'Users'
   });
};

module.exports.signUp = function(req, res){

    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Codeial|Sign Up"
    });

};
module.exports.signIn = function(req, res){



    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Codeial|Sign In"
    });

};

module.exports.create = function(req, res){
    //TODO later

    console.log('____________________----body')
     console.log(req.body) ;


     console.log(req.body.password,'---------------------') ;
     console.log(req.body.confirm_password) ;



    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    console.log('here aa gya ') ;

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
             return;
            }

        if (!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('error in creating user while signing up');
                     return;
                    }


                 console.log('**************************8ban gya bhai');
                 console.log(user) ;   

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    });

}
module.exports.createSession = function(req, res){
    //TODO later
    return res.redirect('/');

}

module.exports.destroySession = function(req, res){
    req.logout();

    return res.redirect('/');
}
