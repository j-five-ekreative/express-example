const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
const PostModel = mongoose.model('Post', schema);

exports.PostModel = PostModel;
