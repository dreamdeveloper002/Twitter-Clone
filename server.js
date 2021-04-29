const express = require('express');
const middleware = require('./middleware')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

//Routes
const loginRoute = require('./routes/loginRoutes')

app.use('/login', loginRoute);



const port = 3000;


const server = app.listen(port, () => {
    console.log(`server listing on port ${port}`)
});



app.get("/", middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle : "Home"
    }
    res.status(200).render("home", payload)
})


