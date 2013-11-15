App.ProductsIndexRoute = Ember.Route.extend({
  model: function () {
    return App.Product.FIXTURES
  }
  
});