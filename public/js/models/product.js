App.Product = DS.Model.extend({
  name: DS.attr('string'),
  brand: DS.attr('string'),
  qty: DS.attr('number'),
  isavailable: DS.attr('boolean')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product.FIXTURES = [
 {
  id: 1,
  name: '328i',
  brand: 'BMW',
  qty: 5,
  isavailable: true
 },
 {
  id: 2,
  name: '528i',
  brand: 'BMW',
  qty: 3,
  isavailable: true
 },
 {
  id: 3,
  name: '728i',
  brand: 'BMW',
  qty: 0,
  isavailable: false
 },
];