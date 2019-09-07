module.exports.home = function(req, res){
   console.log(req.cookies);
   // return res.end('<h1>Express is up for codeial!!</h1>');
   return res.render('home',{
        title : "Home"
   });
};

// module.exports.actionName = function(req, res){
//     return res.end('<h1>Hey there I am !!</h1>');
// };