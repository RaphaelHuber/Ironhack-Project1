// Tile events
const events = [
  { name: 'aquaman', text: 'aquaman', event: 'go back 1', img: 'aquaman.jpg', colour: 'red', index: 2 },
  { name: 'batman', text: 'aquaman', event: 'go back 2', img: 'batman.jpg', colour: 'blue', index: 4 },
  { name: 'captain america', text: 'aquaman', event: 'go back 3', img: 'captain-america.jpg', colour: 'blue', index: 7 },
  { name: 'fantastic four', text: 'aquaman', event: 'go back 4', img: 'fantastic-four.jpg', colour: 'white', index: 10 },
  { name: 'flash', text: 'aquaman', event: 'go back 5', img: 'flash.jpg', colour: 'grey', index: 17 },
  { name: 'green arrow', text: 'aquaman', event: 'go forward 1', img: 'green-arrow.jpg', colour: 'green', index: 20 },
  { name: 'green lantern', text: 'aquaman', event: 'go forward 2', img: 'green-lantern.jpg', colour: 'purple', index: 22 },
  { name: 'ironman', text: 'aquaman', event: 'go forward 3', img: 'ironman.jpg', colour: 'navy', index: 30 },
  { name: 'spiderman', text: 'aquaman', event: 'go forward 4', img: 'spiderman.jpg', colour: 'silver', index: 33 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'the avengers', text: 'aquaman', event: 'go forward 6', img: 'the-avengers.jpg', colour: 'lime', index: 38 }
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' },
  // { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: '36' }
];

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
}

// New dray Tiles
function drawTile() {
  for (let i = 0; i < events.length; i += 1) {
    for (let j = 0; j < tiles.length; j += 1) {  
      console.log(tiles[j].tileIndex);
      console.log(events[i].index);
      if (tiles[j].tileIndex === events[i].index) {
        console.log("hello");
      } else console.log("fuck");
    }
  }
}


// draw tiles
// Tile.prototype.drawTile = function () {
//   for (let i = 0; i < events.length; i += 1) {
//     console.log(tiles[i].tileIndex, events[i].index);
//     if (tiles[i].tileIndex === parseInt(events[i].index)) {
//       this.colour = events[i].colour;
//     } else {
//       this.colour = 'yellow';
//     }
//     ctx.fillStyle = this.colour;
//     ctx.fillRect(this.x, this.y, this.resolution, this.resolution);
//   }
// };

// function drawing showTileIndex
Tile.prototype.drawTileIndex = function () {
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText(this.tileIndex, this.x + this.resolution / 2, this.y + this.resolution / 2);
};

