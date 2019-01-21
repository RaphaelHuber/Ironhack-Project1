// Player constructor function
function Player() {
  this.spot = 0;
}

Player.prototype.rollDice = function () {
  let num = Math.floor(Math.random() * 6) + 1;
  this.spot += num;
};
