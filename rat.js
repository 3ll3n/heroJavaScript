var Rat = function(name) {
  this.name = name;
};

Rat.prototype = {
  touch: function(food) {
    return this.name + " touched the " + food.name + "!";
  }
};

module.exports = Rat;