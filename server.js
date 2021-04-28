const express = require('express');


const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');


const port = 3000;


const server = app.listen(port, () => {
    console.log(`server listing on port ${port}`)
});



app.get("/", (req, res, next) => {

    var payload = {
        pageTitle : "Home"
    }
    res.status(200).render("home", payload)
})


