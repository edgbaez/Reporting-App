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
  }
});

module.exports = mongoose.model('Data', DataSchema);