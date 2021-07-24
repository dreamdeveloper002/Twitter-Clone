const mongoose = require('mongoose');


const Schema = mongoose.Schema;

PostSchema = new Schema({
   content: {
     type: String,
     trim: true
   },
   postedBy: {
     type: Schema.Types.ObjectId,
     ref: 'User'
   },
   pinned: Boolean

}, {
  timestamps: true
});


var Post = mongoose.model('Post', PostSchema);

module.exports = Post;