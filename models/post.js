var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  title: {type: String},
  location: {type: String},
  description: {type: String},
  keywords: {type: String}
}, {timestamps:true});

module.exports = mongoose.model('Post', PostSchema);
