const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const monogurl = "mongodb://127.0.0.1:27017/contact"

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/contact',require('./routes/contact'));

const staticpath = path.join(__dirname, '/views');
app.use(express.static(staticpath));


app.listen(5000, () => {
    console.log("server running in http://localhost:5000");
});

(async (err) => {
    await mongoose.connect(monogurl);
    if (err) throw err;
})()