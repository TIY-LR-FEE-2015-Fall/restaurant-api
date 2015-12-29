var Mystique = require('mystique');

var MenuItemTransformer = Mystique.Transformer.extend({
  resourceName: 'menuItem',
  mapOut: function(menuItem) {
    return {
      id: menuItem.id,
      name: menuItem.name,
      description: menuItem.description,
      price: menuItem.price,
      category: menuItem.category,
    };
  },

  mapIn(req) {
    return {
      name: req.body.menuItem.name,
      description: req.body.menuItem.description,
      price: req.body.menuItem.price,
      category: req.body.menuItem.category,
    };
  },
});

Mystique.registerTransformer('MenuItem', MenuItemTransformer);
