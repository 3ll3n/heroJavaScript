var Hero = function(name, health, favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
};

Hero.prototype = {
  talk: function() {
    return "My name is " + this.name;
  },
  eat: function(food) {
    if(food.name != this.favFood) {
      this.health += food.replenishmentValue;
    } else {
    (food.name == this.favFood)
    this.health += food.replenishmentValue * 1.5;
    }
  }
};

module.exports = Hero;
