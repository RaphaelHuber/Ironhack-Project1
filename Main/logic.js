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
  { name: 'the avengers', text: 'aquaman', event: 'go forward 6', img: 'the-avengers.jpg', colour: 'lime', index: 38 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'superman', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 }
];

// Tile constructor function
function Tile(x, y, resolution, index) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.index = index;
  if (this.index % 2 === 0) {
    this.colour = '#E04C39';
  } else {
    this.colour = '#EF9E44';
  }
}

Tile.prototype.show = function () {
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.resolution, this.resolution);
};

// function drawing show index
Tile.prototype.drawIndex = function () {
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText(this.index, this.x + this.resolution / 6, this.y + this.resolution / 6);
};

// // function relating colour to index
// function drawTile() {
//   console.log(tiles);
//   for (let i = 0; i < tiles.length; i += 1) {
//     for (let j = 0; j < events.length; j += 1) {  
//       console.log(tiles[i].index);
//       console.log(events[j].index);
//       if (tiles[i].index === events[j].index) {
//         console.log('epic');
//         console.log(events[j].colour);
//         return ctx.fillStyle = events[j].colour;
//       }
//     }
//     ctx.fillStyle = 'yellow';
//     ctx.fillRect(tiles[i].x, tiles[i].y, tiles[i].resolution, tiles[i].resolution);
//   }
// }

