var Food = require('../food');
var assert = require('assert');

describe('Food', function() {

  var food;

  beforeEach(function() {
    food = new Food('steak', 10);
  });

  it('should have a name', function() {
    assert.equal('steak', food.name);
  });

  it('should have a replenishment value of 10', function() {
    assert.equal(10, food.replenishmentValue);
  }); 

  it('should be true', function() {
    food.poison();
    assert.equal(true, food.poisoned);
  });

});