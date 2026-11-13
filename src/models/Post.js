const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Title is required'], trim: true, minlength: 3, maxlength: 120 },
    content: { type: String, required: [true, 'Content is required'], trim: true, minlength: 10, maxlength: 5000 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
