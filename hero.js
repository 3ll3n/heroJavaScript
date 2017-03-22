var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function() {
    console.log(this.name + ' to the rescue!');
  }
};

module.exports = Hero;