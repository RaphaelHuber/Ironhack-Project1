// Player constructor function
function Player() {
  this.spot = 0;
}

Player.prototype.rollDice = function () {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
  this.spot += num;
};
