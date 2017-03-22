var Rat = require('../rat');
var assert = require('assert');

describe('Rat', function() {

  var rat;

  beforeEach(function() {
    rat = new Rat('Hordak');
  });

  it('should have a name', function() {
    assert.equal('Hordak', rat.name);
  });

  // it('should be able to poison touched food', function() {

  // });

});