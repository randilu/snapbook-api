const mongoose = require('mongoose');

const AlbumSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  photos: [
    {
      id: {
        type: Number,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      sequence: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Albums', AlbumSchema);
