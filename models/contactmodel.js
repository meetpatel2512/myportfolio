const mongoose = require('mongoose');

const ContactShema = mongoose.Schema({
    name: {
        type: 'String',
        require: true
    },
    email: {
        type: 'String',
        require: true
    },
    subject: {
        type: 'String',
    },
    message: {
        type: 'String',
    },
    Date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
})

const Contactmodel = mongoose.model('portfoliodb', ContactShema);
module.exports = Contactmodel;