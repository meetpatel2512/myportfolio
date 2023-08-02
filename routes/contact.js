const express = require('express');
const route = express.Router();
const app = express();
const path = require('path');
const Contact = require('../models/contactmodel');
route.post('/', async (req, res) => {
    const contactdata = await new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    contactdata.save();
    res.send("Data Saved Successfully");
});

module.exports = route;
