// Getting the DOM element.
const canvas = document.getElementById('my-canvas');

// Getting the 2d context.
const ctx = canvas.getContext('2d');

// Defining an array to store our tiles
const tiles = [];

// defining player
let player;

// Defining times clicked
let timesClicked = 0;

// Defining number of throws
let numberOfThrows = 0;

// Defining canvas properties
const resolution = 100;
let directionIndex = 1;
const columns = canvas.width / resolution;
const rows = canvas.height / resolution;

// Function that draws the Board
function drawBoard() {
  let x = 0;
  let y = (rows - 1) * resolution;
  for (let i = 0; i <= columns * rows; i += 1) {
    const tile = new Tile(x, y, resolution, i);
    tiles.push(tile);
    x += resolution * directionIndex;
    if ((x >= canvas.width || x < 0) && y > 0) {
      x -= resolution * directionIndex;
      y -= resolution;
      directionIndex *= -1;
    }
    tile.show();
    tile.drawIndex();
  }
}

// start game function
function startGame() {
  $('#main').toggleClass('body');
  drawBoard();
  player = new Player();
  player.displayPlayer();
}

// roll dice function
function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;
  switch (num) {
    case 1:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> Damn, better slow down on that kush man");
      break;
    case 2:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> Tough");
      break;
    case 3:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> You are getting there man!");
      break;
    case 4:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> Well played!");
      break;
    case 5:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> Slow down cowboy");
      break;
    case 6:
      changeText('#roll-text', 'You diced a ' + num + ". <br><br> Damn son, you are on fire!");
      break;
  }
  numberOfThrows += 1;
  const k = player.spot;
  console.log(k);
  const int = setInterval(function () {
    player.move(num);
    drawBoard();
    player.displayPlayer();
    if (player.spot === k + num) {
      player.trigger();
      clearCanvas();
      drawBoard();
      player.displayPlayer();
      clearInterval(int);
    }
  }, 500);
  console.log(num);
}

// OnClick triggering the beginning of the game and roll
window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
    $('#roll-button').toggleClass('hide');
    $(this).remove();
    changeSrc('#my_image', '../Main/images/default-event-img.jpg');
  };

  document.getElementById('roll-button').onclick = function () {
    rollDice();
  };
};
