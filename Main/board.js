// Tile events
const events = [
  { name: 'cheetah-smoking', text: '\u201CThis is either a really smart move or by far the stupidest thing that we have ever tried.\u201D Harold\r\n\r\n\u201CWell, we\u2019re about to find out. Mush!!\u201D Kumar', event: 24, img: '../Main/images/event-images/cheetah-smoking.png', colour: 'red', index: 1 },
  { name: 'hang glider', text: '\u201CHey, Roldy, there\u2019s something i forgot to tell you. I\u2019ve never hang-glided before.\u201D Kumar\r\n\r\n\u201CWhat?!\u201D Harold', event: 19, img: '../Main/images/event-images/hang-glider.png', colour: 'blue', index: 3 },
  { name: 'water splash', text: 'Nothing personal', event: -4, img: '../Main/images/event-images/water-splash.png', colour: 'blue', index: 6 },
  { name: 'get out of jail', text: '\u201COh, yes! Sweet! I was hoping it would be one of these big ring of keys\u201D Kumar\r\n\r\n\u201CKumar, hurry the fuck up.\u201D Harold\r\n\r\n\u201CAll right, yeah\u201D Kumar', event: 8, img: '../Main/images/event-images/get-out-of-jail.png', colour: 'white', index: 9 },
  { name: 'relax-at-home', text: '\u201CWe\u2019re so high right now.\u201D Harold\r\n\r\n\u201CWe\u2019re not low.\u201D Kumar\r\n', event: 4, img: '../Main/images/event-images/relax-at-home.png', colour: 'green', index: 14 },
  { name: 'uni-cop', text: '\u201CI just wanna talk!\u201D University Cop', event: -16, img: '../Main/images/event-images/uni-cop.png', colour: 'grey', index: 20 },
  { name: 'racoon', text: '\u201COh, shit! How the fuck that did that get in here\u201D Kumar', event: -2, img: '../Main/images/event-images/raccon.png', colour: 'purple', index: 23 },
  { name: 'spare-tire', text: '\u201CWhere is my spare tire?\u201D Harold\r\n\r\n\u201CI don\u2019t know\u201D Kumar\r\n\r\n\u201CWhere the hell is my spare tire?\u201D Harold\r\n\r\n\u201COh, yeah! Dude, remember that time we got really stoned and strated throwing shit off that bridge to see if it would float?\u201D Kumar\r\n\r\n\u201CWhat bridge? I don\u2019t remem.. What are you talking about?\u201D Harold\r\n\r\n\u201COh, shit, that\u2019s right. That was with Goldstein\u201D Kumar', event: -18, img: '../Main/images/event-images/spare-tire.png', colour: 'navy', index: 26 },
  { name: 'kush', text: '\u201CHey, what\u2019s that smell?\u201D Kumar\r\n\r\n\u201CWhat smell?\u201D Harold', event: 8, img: '../Main/images/event-images/kush.png', colour: 'silver', index: 29 },
  { name: 'jail', text: '\u201COh, shit.\u201D Harold', event: -25, img: '../Main/images/event-images/jail.png', colour: 'olive', index: 35 },
  { name: 'special-bush', text: '\u201CI mean, why would you pee right next to me when you could choose that bush or\u2026\u201D Kumar\r\n\r\n\u201CWell because this is a good bush to pee on. Why are you peeing on it?\u201D Random Dude\r\n\r\n\u201CWell, no one was here when i chose this bush.\u201D Kumar\r\n\r\n\u201COh! So you get to pee on it and no one else does? Huh?\u201D Random Dude\r\n\r\n\u201CNo, I just\u2026\u201D Kumar\r\n\r\n\u201CIs this your bush? You have a special bond with this bush? You the king of the forest? Are you a fucking tree-hugger? IS THIS YOUR SPECIAL BUSH?!\u201D Random Dude\r\n\r\n\u201CNever mind. Forget it. I really don\u2019t feel like getting stabbed tonight\u201D Kumar', event: -8, img: '../Main/images/event-images/special-bush', colour: 'lime', index: 38 },
  { name: 'business-hippie', text: '\u201CHere. That\u2019s sixt\u2026 80 bucks.\u201D Business Hippie\r\n\r\n\u201C80 bucks?\u201D Kumar\r\n\r\n\u201CYeah, 80 bucks.\u201D Business Hippie\r\n\r\n\u201CYo, this is worth 40 tops, bro\u201D Kumar\r\n\r\n\u201C \u201CBro\u201D? I\u2019m not your bro, bro. Okay and that\u2019s 80 bucks. If you don\u2019t feel like getting hight tonight, that\u2019s cool with me because there\u2019s lots of people around here.\u201D Business Hippie\r\n\r\n\u201CWhat king of hippie are you?\u201D Kumar\r\n\r\n\u201CWhat king of hippie am I? Man, I\u2019m a business hippie\u201D Kumar', event: -12, img: '../Main/images/event-images/business-hippie.png', colour: 'lime', index: 39 }
];

// Tile constructor function
function Tile(x, y, resolution, index) {
  this.x = x;
  this.y = y;
  this.resolution = resolution;
  this.index = index;
  if (this.index % 2 === 0) {
    this.colour = '#E8A87C';
  } else {
    this.colour = '#C38D9D';
  }
}

Tile.prototype.show = function () {
  ctx.fillStyle = this.colour;
  ctx.fillRect(this.x, this.y, this.resolution, this.resolution);
};

// function drawing show index
Tile.prototype.drawIndex = function () {  
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'black';
  ctx.fillText(this.index, this.x + this.resolution / 6, this.y + this.resolution / 6);
};
