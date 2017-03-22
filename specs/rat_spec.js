var Rat = require('../rat');
var assert = require('assert');
var Food = require('../food');

describe('Rat', function() {

  var rat;
  var food;

  beforeEach(function() {
    rat = new Rat('Hordak');
    food = new Food('steak', 10);
  });

  it('should have a name', function() {
    assert.equal('Hordak', rat.name);
  });

  it('should be able to touch food', function() {
    assert.equal('Hordak touched the steak!', rat.touch(food));
  });

});