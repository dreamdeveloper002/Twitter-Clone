const express = require('express');
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const session = require('express-session')
const dotenv = require('dotenv');

dotenv.config()

const connectDB = require('./database');

app.set('view engine', 'pug');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 8*60*60*1000 },
}));


//Routes
const loginRoute = require('./routes/loginRoutes');
const logoutRoute = require('./routes/logoutRoutes');
const registerRoute = require('./routes/registerRoutes');
const postRoutes = require('./routes/postRoutes');

//Api Routes
const postRoute = require('./routes/api/posts');

app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use('/api/posts', postRoute);
app.use('/posts', postRoutes);


const PORT = process.env.PORT || 5000;


const server = app.listen(PORT, () => {
    console.log(`server listing on port ${PORT}`)
});



app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle : "Home",
        userLoggedIn : req.session.user,
        userLoggedInJs : JSON.stringify(req.session.user),
    }
    res.status(200).render("home", payload)
});


//handle unhandled promise rejections
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);

    //close server & exit process
    server.close(() => process.exit(1));
})

