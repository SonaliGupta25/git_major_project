// module.exports.name = function(req, res){
//    return res.end('<h1>Hey Enter Your Name !!</h1>');
// }
const Post = require('../models/post');
module.exports.create = function(req, res){
   Post.create({
      content: req.body.content,
      user: req.use._id
   }, function(err, post){
      if(err){
         console.log('Error in creating the post');
         return;
      }
      return res.redirect('back');
   });

}