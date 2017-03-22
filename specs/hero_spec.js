var Hero = require('../hero');
var assert = require('assert');

describe('Hero', function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("She-ra", 10, "steak")
  });

  it('should have a name', function() {
    assert.equal("She-ra", hero.name);
  });

  it('should have a healthy health of 10', function() {
    assert.equal(10, hero.health);
  });

  // it('should have a favourite food', function() {

  // });

  // it('should be able to talk', function() {

  // }); 
})