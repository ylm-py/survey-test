let TracksRatings = require('./TracksRatings');
const mongoose = require('mongoose');

Schema = mongoose.Schema;
const rating = new Schema({
    genre: { type: String, default: null },
    comment: { type: String, default: null },
    tracksCount: { type: Number, default: null },
    tracksRatings: [TracksRatings],
});
module.exports = rating;