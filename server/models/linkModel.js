const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const linkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Link', linkSchema);