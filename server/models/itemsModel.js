const mongoose = require("mongoose");

// POST SCHEMA FOR VALIDATION
const itemsSchema = mongoose.Schema({

  title: {
    type: String,
    required: true,
    trim: true
  },

  message: {
    type: String,
    required: true,
    trim: true
  },

  name: {
    type: String,
  },

  creator: {
    type: String,
    required: true,
    trim: true
  },

  tags: [String],

  selectedFile: {
    type: String,
  },

  likes: {
    type: [String],
    default: []
  },

  createdAt: {
    type: Date,
    default: new Date()

  }
});

// MODEL
// we will create a new collection
const postItem = new mongoose.model("postItem", itemsSchema);

// export postItem to other files
module.exports = postItem;