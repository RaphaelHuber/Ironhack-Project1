// Player constructor function
function Player() {
  this.spot = 0;
}

// player move function
Player.prototype.move = function (num) {
  if (this.spot + num >= tiles.length - 1) {
    this.spot = tiles.length - 1
    alert('You have made it');
  } else {
    this.spot += num;
  }
  console.log('Move to ' + this.spot);
};

// display player
Player.prototype.display = function () {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(this.spot, this.spot, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
};
