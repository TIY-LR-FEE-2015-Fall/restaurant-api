var Mystique = require('mystique');

var OrderItemTransformer = Mystique.Transformer.extend({
  resourceName: 'orderItem',
  mapOut: function(orderItem) {
    return {
      id: orderItem.id,
      price: orderItem.price,
      quantity: orderItem.quantity,
      menuItem: orderItem.menuItem,
      order: orderItem.order,
    };
  },

  mapIn(req) {
    return {
      price: req.getJson('orderItem.price'),
      quantity: req.getJson('orderItem.quantity'),
      menuItem: req.getJson('orderItem.menuItem'),
      order: req.getJson('orderItem.order'),
    };
  },
});

Mystique.registerTransformer('OrderItem', OrderItemTransformer);
