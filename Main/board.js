// Tile events
const events = [
  { name: 'event1', text: 'aquaman', event: -1, img: 'aquaman.jpg', colour: 'red', index: 2 },
  { name: 'event2', text: 'aquaman', event: -2, img: 'batman.jpg', colour: 'blue', index: 4 },
  { name: 'event3', text: 'aquaman', event: 'go back 3', img: 'captain-america.jpg', colour: 'blue', index: 7 },
  { name: 'event4', text: 'aquaman', event: 'go back 4', img: 'fantastic-four.jpg', colour: 'white', index: 10 },
  { name: 'event5', text: 'aquaman', event: 'go back 5', img: 'flash.jpg', colour: 'grey', index: 17 },
  { name: 'event6', text: 'aquaman', event: 'go forward 1', img: 'green-arrow.jpg', colour: 'green', index: 20 },
  { name: 'event7', text: 'aquaman', event: 'go forward 2', img: 'green-lantern.jpg', colour: 'purple', index: 22 },
  { name: 'event8', text: 'aquaman', event: 'go forward 3', img: 'ironman.jpg', colour: 'navy', index: 30 },
  { name: 'event9', text: 'aquaman', event: 'go forward 4', img: 'spiderman.jpg', colour: 'silver', index: 33 },
  { name: 'event10', text: 'aquaman', event: 'go forward 5', img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'event11', text: 'aquaman', event: 'go forward 6', img: 'the-avengers.jpg', colour: 'lime', index: 38 }
];

// Tile constructor function
function Tile(x, y, resolution, index) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.index = index;
  if (this.index % 2 === 0) {
    this.colour = '#5BB531';
  } else {
    this.colour = '#00923F';
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

