var Hero = require('../hero');
var assert = require('assert');
var Food = require('../food');
var Rat = require('../rat');

describe('Hero', function() {

  var hero;
  var steak;
  var anchovies;
  var rat;

  beforeEach(function() {
    hero = new Hero("She-ra", 10, "steak");
    steak = new Food("steak", 10);
    anchovies = new Food("anchovies", 1);
    rat = new Rat('Hordak');
  });

  it('should have a name', function() {
    assert.equal("She-ra", hero.name);
  });

  it('should have a healthy health of 10', function() {
    assert.equal(10, hero.health);
  });

  it('should have a favourite food', function() {
    assert.equal("steak", hero.favFood);
  });

  it('should be able to talk', function() {
    assert.equal("My name is She-ra", hero.talk());
  }); 

  it('should be able to eat, inc health by replenishment value', function() {
    hero.eat(anchovies);
    assert.equal(11, hero.health);
  });

  it('should be able to eat favFood, inc health by repValue x 1.5', function() {
    hero.eat(steak);
    assert.equal(25, hero.health);
  });

  // it('should reduce health if poisoned food is eaten', function() {
  //   rat.touch(steak);
  //   hero.eat(steak);
  //   assert.equal(0, hero.health);
  // });

});