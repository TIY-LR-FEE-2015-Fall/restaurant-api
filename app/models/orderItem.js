'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var relationship = require('mongoose-relationship');

var fields = {
  price: { type: Number },
  quantity: { type: Number },
  menuItem: { type: ObjectId, ref: 'MenuItem' },
  order: { type: ObjectId, ref: 'Order', childPath: 'items' },
};

var OrderItemSchema = new Schema(fields);

OrderItemSchema.plugin(relationship, {relationshipPathName: 'order'});

module.exports = mongoose.model('OrderItem', OrderItemSchema);
