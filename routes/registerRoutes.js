const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser')

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {
    res.status(200).render("register");
});


router.post("/", (req, res, next) => {

  var firstName = req.body.firstName.trim();
  var userName = req.body.username.trim();
  var email = req.body.email.trim();
  var password = req.body.password

  const payload = req.body;

  if( firstName && userName && email && password) {

  } else {
    
    payload.errorMessage = "Make sure each field have a valid value"
    res.status(200).render("register", payload);
  }
  
});




module.exports = router;
