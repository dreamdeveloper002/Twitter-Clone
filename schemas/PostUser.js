const mongoose = require('mongoose');


const Schema = mongoose.Schema;

PostSchema = new Schema({
   content: {
     type: String,
     trim: true
   },
   postedBy: {
     type: Schema.Types.ObjectId,
     ref: 'user'
   },
   pinned: Boolean

}, {
  timestamps: true
});


var Post = mongoose.model('User', PostSchema);

module.exports = Post;