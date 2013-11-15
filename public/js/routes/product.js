App.ProductsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('product');
  },
  actions: {
    up: function(m) {
      m.set('qty',parseInt(m.get('qty')) + 1);
      m.save();
    },
    down: function(m) {
      m.set('qty',parseInt(m.get('qty')) - 1);
      m.save();
    }
  }
  
});

App.ProductsEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findBy('id',params.product_id);
    
  }
});