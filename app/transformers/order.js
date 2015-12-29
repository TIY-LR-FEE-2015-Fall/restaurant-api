var Mystique = require('mystique');

var OrderTransformer = Mystique.Transformer.extend({
  resourceName: 'order',
  mapOut: function(order) {
    return {
      id: order.id,
      items: order.items,
    };
  },

  mapIn(req) {
    return {
      items: req.body.order.items,
    };
  },
});

Mystique.registerTransformer('Order', OrderTransformer);
