// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.orders = function(req) {
  return req.store.recordCollection('Order');
};

// GET
api.order = function(req) {
  return req.store.recordItemById('Order', req.params.id);
};

// POST
api.addOrder = function(req) {
  return req.store.createRecord('Order');
};

// PUT
api.editOrder = function(req) {
  return req.store.updateRecord('Order', req.params.id);
};

// DELETE
api.deleteOrder = function(req) {
  return req.store.destroyRecord('Order', req.params.id);
};

router.get('/orders', api.orders);
router.post('/orders', api.addOrder);

router.route('/orders/:id')
  .get(api.order)
  .put(api.editOrder)
  .delete(api.deleteOrder);

module.exports = router;
