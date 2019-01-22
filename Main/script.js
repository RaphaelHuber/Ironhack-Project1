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

// Defining canvas properties
const resolution = 100;
let directionIndex = 1;
const columns = canvas.width / resolution;
const rows = canvas.height / resolution;



// Function that draws the Board
function drawBoard() {
  player = new Player();
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

// function to toggle the button
function toggleBtn() {
  document.getElementById('start-button').value = 'Roll the dice';
}

// start game function
function startGame() {
  drawBoard();
  const player = new Player();
}

// roll dice function
function rollDice() {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log('You diced a ' + num);
  player.move(num);
  player.display();
  console.log(tiles);
}

// OnClick function triggering the beginning of the game
window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    timesClicked += 1;
    if (timesClicked <= 1) {
      startGame();
      toggleBtn();
    }
    if (timesClicked > 1) {
      rollDice();
    }
  };
};
