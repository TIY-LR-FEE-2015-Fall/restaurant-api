'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
};

var MenuItemSchema = new Schema(fields);



module.exports = mongoose.model('MenuItem', MenuItemSchema);
