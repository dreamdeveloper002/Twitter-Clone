const express = require('express');
const app = express();

const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../schemas/UserSchema');

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {
    res.status(200).render("register");
});


router.post("/", async (req, res, next) => {

  var firstName = req.body.firstName.trim();
  var username = req.body.username.trim();
  var email = req.body.email.trim();
  var password = req.body.password

  const payload = req.body;

  if( firstName && userName && email && password) {
      
     const user = await User.findOne({ 
        $or: [ 
          { username: username },
          { email: email }
        ]
      }).catch((error) => {
        
        console.log(error)

        payload.errorMessage = "Something went wrong.";
        res.status(200).render("register", payload);

      });

      if(user == null ) {

        //User doesn't exit
        var data = req.body;
        User.create(data)
        .then((user) => {
           console.log(user)
        })

      } else {
          //User found
          if(email == user.email) {

            payload.errorMessage = "Email already in use.";

          } else {

            payload.errorMessage = "Username already in use.";
          }
      }

  } else {
    
    payload.errorMessage = "Make sure each field have a valid value"
    res.status(200).render("register", payload);

  }
  
});




module.exports = router;
