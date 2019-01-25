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
  changeText('#roll-text', 'You got a ' + num)
  player.animation(num);
}

// OnClick triggering the beginning of the game and roll
window.onload = function () {
  $('#start-button').on('click', function () {
    startGame();
    $('#roll-button').toggleClass('hide');
    $(this).remove();
    changeText('#intro-text', intro[0].text);
  });
  
  $('#roll-button').on('click', function () {
    rollDice();
    changeText('#intro-text', '');
    changeText('#event-text', '');
    changeSrc('#my_image', '');
  });

  $('#event-button').on('click', function () {
    changeText('#roll-text', '');
    $('#event-button').toggleClass('hide');
    player.animation(events[player.spot - 1].event, false);
  })
};
