// Player constructor function
function Player() {
  this.spot = 0;
}

// player move function
Player.prototype.move = function (num) {
  if (this.spot + num > columns * rows) {
    alert('You have made it');
    this.spot = 0;
  } else {
    this.spot += 1;
  }
  console.log('Move to ' + this.spot);
};

// display player
Player.prototype.displayPlayer = function () {
  ctx.beginPath();
  ctx.fillStyle = '#AA4048';
  ctx.arc(tiles[this.spot].x + (resolution / 2), tiles[this.spot].y + (resolution / 2), 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.strokeStyle = 'white';
  ctx.stroke();
};


// player triggering event
Player.prototype.trigger = function () {
  for (let i = 0; i < events.length; i += 1) {  
    if (tiles[this.spot].index === events[i].index) {
      changeText('#event-text', events[i].text);
      changeSrc(events[i].img)
      this.spot += events[i].event;
    }
  }
};
