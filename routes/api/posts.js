const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');
const Post = require('../../schemas/PostUser');


app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    res.status(200).render("login")
});

router.post("/", async (req, res, next) => {
  if(!req.body.content) {
     console.log("Content wasn't send with the request");
     return res.sendStatus(400)
  };

  var postData = {
    content: req.body.content,
    postedBy: req.session.user
  };

  Post.create(postData)
  .then(newPost =>{
    return res.status(201).send(newPost)
  }).catch(error => {
      console.log(error);
      res.sendStatus(400)
  });

});




module.exports = router;