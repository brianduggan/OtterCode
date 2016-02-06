var express = require('express');
var router = express.Router();

var Post = require('../models/post');


router.get('/', function(req, res){
  Post.find({}, function(err, dbPosts){
    res.json({posts: dbPosts});
  })
})

router.post('/', function(req, res){
  var newPost = new Post(req.body.post);
  newPost.save(function(err, dbPost){
    res.json({post: dbPost});
  })
})

router.delete('/:id', function(req, res){
  Post.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  })
})

router.patch('/:id', function(req, res){
  var post = req.body.post;
  console.log(req.params.id);
  console.log(req);
  // Post.findByIdAndUpdate(req.params.id, post, {new: true} , function(err, dbPost){
  //   res.json({post: dbPost});
  // })
})


module.exports = router;
