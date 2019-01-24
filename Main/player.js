// Player constructor function
function Player() {
  this.spot = 0;
}

// player move function
Player.prototype.move = function (num) {
  if (player.spot > columns * rows - 2) {
    $('canvas').addClass('hide');
    $('#roll-button').addClass('hide');
    changeText('#roll-text', '')
    $('#main').addClass('game-over');
    player.move(0);
    this.spot = 0;
  } else if (num > 0) {
    this.spot += 1;
  } else if (num < 0) {
    this.spot -= 1;
  }
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
      changeSrc('#my_image', events[i].img)
      $('#event-button').toggleClass('hide');
    }
  }
};

Player.prototype.animation = function (num, triggerOnce = true) {
  const k = this.spot;
  const int = setInterval(function () {
    player.move(num);
    drawBoard();
    player.displayPlayer();
    if (player.spot === k + num) {
      $('#roll-button').toggleClass('hide');
      if (triggerOnce) {
        player.trigger();
      }
      clearInterval(int);
    }
  }, 500);
}