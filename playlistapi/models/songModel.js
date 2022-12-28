const { Schema, model, Types } = require("mongoose");

const songSchema = new Schema({
  name: String,
  artist: String,
  duration: Number,
  createdAt: { type: Date, default: Date.now() },
  uri: String,
});

const Song = model("songs", songSchema);

exports.Song = Song;
//63ab39168119937242d7093f