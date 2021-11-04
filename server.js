const path = require('path');

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs")


app.get('/contact', (res, req) => {
    req.render('contact');
})
app.get('/sent', (res, req) => {
    req.render('sent');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runnign in port ${PORT}`))