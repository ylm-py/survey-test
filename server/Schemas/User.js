let Ratings = require('./Ratings');
const mongoose = require('mongoose');

Schema = mongoose.Schema;
const user = new Schema({
    email: { type: String, default: null },
    country: { type: String, default: null },
    name: { type: String, default: null },
    submittedAt: {type: Date, default: Date.now},
    userRatings: [Ratings],
});
module.exports = mongoose.model('User', user)