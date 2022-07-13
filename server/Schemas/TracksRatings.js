const mongoose = require('mongoose'),

Schema = mongoose.Schema;
const tracksRatings = new Schema({
    genre: { type: String, default: null },
    track_id: { type: String, default: null },
    rating: { type: Number, default: null },
    soundTrack: { type: String, default: null },
});
module.exports = tracksRatings;