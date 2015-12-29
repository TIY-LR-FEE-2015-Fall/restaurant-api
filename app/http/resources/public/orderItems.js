// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.orderItems = function(req) {
  return req.store.recordCollection('OrderItem');
};

// GET
api.orderitem = function(req) {
  return req.store.recordItemById('OrderItem', req.params.id);
};

// POST
api.addOrderItem = function(req) {
  return req.store.createRecord('OrderItem');
};

// PUT
api.editOrderItem = function(req) {
  return req.store.updateRecord('OrderItem', req.params.id);
};

// DELETE
api.deleteOrderItem = function(req) {
  return req.store.destroyRecord('OrderItem', req.params.id);
};

router.get('/orderItems', api.orderItems);
router.post('/orderItems', api.addOrderItem);

router.route('/orderItems/:id')
  .get(api.orderitem)
  .put(api.editOrderItem)
  .delete(api.deleteOrderItem);

module.exports = router;
