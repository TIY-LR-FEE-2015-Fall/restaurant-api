// Module dependencies.
var express = require('express');
var router = express.Router();
var api = {};

// ALL
api.menuItems = function(req) {
  return req.store.recordCollection('MenuItem');
};

// GET
api.menuItem = function(req) {
  return req.store.recordItemById('MenuItem', req.params.id);
};

// POST
api.addMenuItem = function(req) {
  return req.store.createRecord('MenuItem');
};

// PUT
api.editMenuItem = function(req) {
  return req.store.updateRecord('MenuItem', req.params.id);
};

// DELETE
api.deleteMenuItem = function(req) {
  return req.store.destroyRecord('MenuItem', req.params.id);
};

router.get('/menuItems', api.menuItems);
router.post('/menuItems', api.addMenuItem);

router.route('/menuItems/:id')
  .get(api.menuItem)
  .put(api.editMenuItem)
  .delete(api.deleteMenuItem);

module.exports = router;
