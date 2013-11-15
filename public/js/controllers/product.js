App.ProductnewController = Ember.ObjectController.extend({
   content: Ember.Object.create(),
  actions: {
    save: function () {
      var name = this.get('name');
      if (!name.trim()) { return; }
      
      var brand = this.get('brand');
      
      var qty = this.get('qty');
      if (!qty.trim()) { qty=0; }
      
      var isavailable = $('#isavailable').is(':checked');
      
      var product = this.store.createRecord('product', {
        name: name,
        brand: brand,
        qty: qty,
        isavailable: isavailable

      });

      
      // Save the new model
      product.save();

      this.transitionTo('products');
    }
  }
});

App.ProducteditController = Ember.ObjectController.extend({
  actions: {
    save: function () {

      var isavailable = $('#isavailable').is(':checked');
      
      this.set('isavailable',isavailable);
      
      this.get('model').save();

      this.transitionTo('products');
    }
  }
});
