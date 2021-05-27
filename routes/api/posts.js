const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');





app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
    res.status(200).render("login")
});

router.post("/", async (req, res, next) => {
  if(!req.body.content) {
     console.log("Content wasn't send with the request");
     return res.sendStatus(400)
  }

  res.status(200).send("it worked")
});




module.exports = router;