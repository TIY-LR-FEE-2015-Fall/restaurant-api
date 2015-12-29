'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  items: [{ type: ObjectId, ref: 'OrderItem' }],
};

var OrderSchema = new Schema(fields);



module.exports = mongoose.model('Order', OrderSchema);
