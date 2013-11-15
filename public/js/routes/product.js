App.ProductsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('product');
  }
  
});

App.ProductsEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.findBy('id',params.product_id);
    
  }
});