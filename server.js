const express = require('express');
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const dotenv = require('dotenv');

dotenv.config()

const connectDB = require('./database');

app.set('view engine', 'pug');
app.set('views', 'views');







app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes')

app.use('/login', loginRoute);
app.use('/register', registerRoute);



const port = 3010;


const server = app.listen(port, () => {
    console.log(`server listing on port ${port}`)
});



app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle : "Home"
    }
    res.status(200).render("home", payload)
});


