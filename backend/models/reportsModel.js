'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DataSchema = new Schema({
  title: {
    type: String,
    required: 'Title of event'
  },
  location: {
    type: String,
    required: 'Location of event'
  },
  description: {
    type: String,
    required: 'Description of event'
  },
  date: {
    type: Date,
    default: Date.now
  },
  priority: {
    type: Number,
    required: '0-10 from low to high priority'
  }
});

module.exports = mongoose.model('Data', DataSchema);