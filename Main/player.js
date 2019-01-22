// Player constructor function
function Player() {
  this.spot = 0;
}

Player.prototype.move = function (num) {
  if (this.spot + num >= tiles.length - 1) {
    this.spot = tiles.length - 1
    alert('You have made it');
  } else {
    this.spot += num;
  }
  console.log('You are one the tile ' + this.spot);
};
