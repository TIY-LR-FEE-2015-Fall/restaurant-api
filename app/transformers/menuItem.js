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
      name: req.getJson('menuItem.name'),
      description: req.getJson('menuItem.description'),
      price: req.getJson('menuItem.price'),
      category: req.getJson('menuItem.category'),
    };
  },
});

Mystique.registerTransformer('MenuItem', MenuItemTransformer);
