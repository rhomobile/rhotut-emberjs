App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('products', {path: '/'}, function(){
    this.resource('productnew');
    this.resource('productedit', { path: ':product_id' });
  
  });
});