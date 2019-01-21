// Tile colours
const tileColours = [
  'red', 'blue', 'yellow', 'white', 'grey',
  'green', 'purple', 'navy', 'silver', 'olive',
  'lime', 'fuchsia', 'teal', 'aqua', 'maroon'
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
function Tile(x, y, resolution, upcomingTile) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.upcomingTile = upcomingTile;
  this.colour = tileColours[Math.floor(Math.random() * tileColours.length)];
}

// draw tile function
Tile.prototype.drawTile = function () {
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.resolution, this.resolution);
};