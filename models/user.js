const mongoose = require('mongoose');
const db= require('../config/mongoose');
// defining schema
const playlistShcema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date:{
        type: Date,
        default: Date.now
    }

});

// definning model (collection creation)
const Playlist = new mongoose.model("Playlist", playlistShcema);

module.exports = Playlist;
