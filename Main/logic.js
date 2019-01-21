// Tile colours
const tileColours = [
  'red', 'blue', 'yellow', 'white', 'grey',
  'green', 'purple', 'navy', 'silver', 'olive',
  'lime', 'fuchsia', 'teal', 'aqua', 'maroon'
];

// Tile events
const events = [
  { name: 'aquaman', text: 'aquaman', event: 'go back 1', img: 'aquaman.jpg', colour: 'red', index: '2' },
  { name: 'batman', text: 'aquaman', event: 'go back 2', img: 'batman.jpg', colour: 'blue', index: '4' },
  { name: 'captain america', text: 'aquaman', event: 'go back 3', img: 'captain-america.jpg', colour: 'yellow', index: '7' },
  { name: 'fantastic four', text: 'aquaman', event: 'go back 4', img: 'fantastic-four.jpg', colour: 'white', index: '10' },
  { name: 'flash', text: 'aquaman', event: 'go back 5', img: 'flash.jpg', colour: 'grey', index: '17' },
  { name: 'green arrow', text: 'aquaman', event: 'go forward 1', img: 'green-arrow.jpg', colour: 'green', index: '20' },
  { name: 'green lantern', text: 'aquaman', event: 'go forward 2', img: 'green-lantern.jpg', colour: 'purple', index: '22' },
  { name: 'ironman', text: 'aquaman', event: 'go forward 3', img: 'ironman.jpg', colour: 'navy', index: '30' },
  { name: 'spiderman', text: 'aquaman', event: 'go forward 4', img: 'spiderman.jpg', colour: 'silver', index: '33' },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  { name: 'the avengers', text: 'aquaman', event: 'go forward 6', img: 'the-avengers.jpg', colour: 'lime', index: '38' }
];

// Pick randome colour
function randomeColour() {
  const colour = tileColours[Math.floor(Math.random() * tileColours.length)];
  return colour;
}

// Player constructor function
function Player() {
  this.spot = 0;
}

// Tile constructor function
function Tile(x, y, resolution, tileIndex) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.tileIndex = tileIndex;
  this.colour = tileColours[Math.floor(Math.random() * tileColours.length)];
}

// draw tile function
Tile.prototype.drawTile = function () {
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.resolution, this.resolution);
};

// function drawing showTileIndex
Tile.prototype.drawTileIndex = function () {
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText(this.tileIndex, this.x + this.resolution / 2, this.y + this.resolution / 2);
}