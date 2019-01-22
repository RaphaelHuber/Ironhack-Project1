// Player constructor function
function Player() {
  this.spot = 0;
}

// player move function
Player.prototype.move = function (num) {
  if (this.spot + num > columns * rows) {
    this.spot = (columns * rows) - 1
    alert('You have made it');
  } else {
    this.spot += num;
  }
  console.log('Move to ' + this.spot);
};

// display player
Player.prototype.displayPlayer = function () {
  ctx.beginPath();
  ctx.fillStyle = '#F38630';
  ctx.arc(tiles[this.spot].x + (resolution / 2), tiles[this.spot].y + (resolution / 2), 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
};


// player triggering event
Player.prototype.trigger = function () {
  for (let i = 0; i < events.length; i += 1) {  
    if (tiles[this.spot].index === events[i].index) {
      console.log(events[i].event);
      this.spot += events[i].event;
    }
  }
};
