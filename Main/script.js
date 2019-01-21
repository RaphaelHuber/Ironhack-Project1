// Getting the DOM element.
const canvas = document.getElementById('my-canvas');

// Getting the 2d context.
const ctx = canvas.getContext('2d');

// Defining an array to store our tiles
const tiles = [];

// Defining canvas properties
const resolution = 100;
let directionIndex = 1;
const columns = canvas.width / resolution;
const rows = canvas.height / resolution;

// Defining the player
let player;

// Function that draws the Board
function drawBoard() {
  const player = new Player();
  let x = 0;
  let y = (rows - 1) * resolution;
  for (let i = 0; i < columns * rows; i += 1) {
    const tile = new Tile(x, y, resolution, i + 1);
    tile.drawTile();
    tiles.push(tile);
    x += resolution * directionIndex;
    if (x > canvas.width || x < 0) {
      x += 0;
      y -= resolution;
      directionIndex *= -1;
    }
  }
}

// start game function
function startGame() {
  drawBoard();
  console.log(randomeColour());
}

// function drawRect(x, y, w, h) {
//   ctx.fillRect(x, y, w, h);
// }

// OnClick function triggering the beginning of the game
window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };
};

