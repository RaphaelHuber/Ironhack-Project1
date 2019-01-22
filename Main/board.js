// Tile events
const events = [
  { name: 'event1', text: 'text1', event: -1, img: 'aquaman.jpg', colour: 'red', index: 2 },
  { name: 'event2', text: 'text2', event: 1, img: 'batman.jpg', colour: 'blue', index: 4 },
  { name: 'event3', text: 'text3', event: -2, img: 'captain-america.jpg', colour: 'blue', index: 7 },
  { name: 'event4', text: 'text4', event: 2, img: 'fantastic-four.jpg', colour: 'white', index: 10 },
  { name: 'event5', text: 'text5', event: -3, img: 'flash.jpg', colour: 'grey', index: 17 },
  { name: 'event6', text: 'text6', event: 3, img: 'green-arrow.jpg', colour: 'green', index: 20 },
  { name: 'event7', text: 'text7', event: -1, img: 'green-lantern.jpg', colour: 'purple', index: 22 },
  { name: 'event8', text: 'text8', event: 1, img: 'ironman.jpg', colour: 'navy', index: 30 },
  { name: 'event9', text: 'text9', event: -2, img: 'spiderman.jpg', colour: 'silver', index: 33 },
  { name: 'event10', text: 'text10', event: 2, img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'event11', text: 'text11', event: -3, img: 'the-avengers.jpg', colour: 'lime', index: 38 }
];

// Tile constructor function
function Tile(x, y, resolution, index) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.index = index;
  // for (let i = 0; i < events.length; i += 1) {  
  //   if (this.index === events[i].index) {
  //     this.colour = events[i].colour;
  //   } else {
  //     this.colour = 'yellow';
  //   }
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
