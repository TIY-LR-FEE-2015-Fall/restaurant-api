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
      price: req.body.orderItem.price,
      quantity: req.body.orderItem.quantity,
      menuItem: req.body.orderItem.menuItem,
      order: req.body.orderItem.order,
    };
  },
});

Mystique.registerTransformer('OrderItem', OrderItemTransformer);
