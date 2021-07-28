// const express = require('express');
// const app = express();

// const router = express.Router();
// const bodyParser = require('body-parser');
// const Post = require('../../schemas/PostSchema');
// const User = require('../../schemas/UserSchema')


// app.use(bodyParser.urlencoded({ extended: false }));



// router.get("/", (req, res, next) => {
//   Post.find()
//   .populate("postedBy")
//   .sort({"createdAt": -1 })
//   .then( results => res.status(200).send(results))
//   .catch(error => {
//     console.log(error);
//     res.sendStatus(400);
// });

// });

// router.get("/", (req, res, next) => {
//   res.status(200).render("login")
// });

// router.post("/", async(req, res, next) => {
//   if(!req.body.content) {
//      console.log("Content wasn't send with the request");
//      return res.sendStatus(400)
//   };

//   var postData = {
//     content: req.body.content,
//     postedBy: req.session.user
//   };

//   Post.create(postData)
//   .then(async newPost =>{
//     newPost = await User.populate(newPost, { path: "postedBy"})
//     res.status(201).send(newPost)
//   })
//   .catch(error => {
//       console.log(error);
//       res.sendStatus(400)
//   });

// });


// router.put("/:id/like", async(req, res, next) => {
//   var postId = req.params.id;
//   var userId = req.session.user._id;

//   var isLiked = req.session.user.likes && req.session.user.likes.includes(postId);

//   var option = isLiked ? "$pull" : "$addToSet";

//   //Insert user like
//   req.session.user = await User.findByIdAndUpdate(userId, { [option]: { likes: postId }}, { new: true })
//   .catch(error => {
//     console.log(error);
//     res.status(400);
//   });

//   //Insert post like
//   var post = await Post.findByIdAndUpdate(postId, { [option]: { likes: userId }}, { new: true })
//   .catch(error => {
//     console.log(error);
//     res.status(400);
//   });

 
  
//   res.status(200).send(post)
// });


// router.post("/:id/retweet", async(req, res, next) => {
//   var postId = req.params.id;
//   var userId = req.session.user._id;

//   // Try and delete retweet if exist
// var deletePost = await Post.findOneAndDelete({ postedBy: userId, retweetData: postId })
// .catch(error => {
//     console.log(error);
//     res.status(400);
//   });

// // check if deleted retweeted post exist or not
//   var option = deletePost != null ? "$pull" : "$addToSet";

//   var repost = deletePost;

//   // if retweeted post doesn't exist, then retweet
//   if(repost == null) {
//      repost = await Post.create({ postedBy: userId, retweetData: postId })
//      .catch(error => {
//       console.log(error);
//       res.status(400);
//     });
//   }

//   //Update User
//   req.session.user = await User.findByIdAndUpdate(userId, {[option]: { retweets: repost._id }}, { new: true })
//   .catch(error => {
//     console.log(error);
//     res.status(400);
//   });

//   //Update Post
//   var post = await Post.findByIdAndUpdate(postId, {[option]: { retweetUsers: userId }}, { new: true })
//   .catch(error => {
//     console.log(error);
//     res.status(400);
//   });

 
  
//   res.status(200).send(post);
// });




// module.exports = router;