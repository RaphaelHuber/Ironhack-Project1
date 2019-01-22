// Tile events
const events = [
  { name: 'event1', text: 'Lorem ipsum dolor sit amet, alii esse te vis. Nam eu nobis constituam, dicat ornatus in eos. Electram voluptaria instructior mea an. Sed id audire minimum repudiare. Pro evertitur vituperata ei, ea affert timeam aliquam mel. ', event: 14, img: '../Main/images/image-event1.png', colour: 'red', index: 1 },
  { name: 'event2', text: 'Lorem ipsum dolor sit amet, odio omnis movet est at, in cum justo propriae, prima sadipscing ea nec. Pro idque volutpat scripserit no. Duo in intellegat deseruisse, vivendo delicata duo eu, ad quo sumo facilisi. Mei unum laboramus ea, mei at sonet nemore suscipiantur. Aperiri aliquando at mea, summo aeque.', event: -4, img: '../Main/images/image-event1.png', colour: 'blue', index: 6 },
  { name: 'event3', text: 'Lorem ipsum dolor sit amet, exerci homero eum in, brute nihil deterruisset sit eu. Pri id aliquid deleniti perfecto, eu movet antiopam vix. An qui eius possit pertinacia, perfecto periculis cum et. Et has commune placerat vulputate.', event: 19, img: '../Main/images/image-event1.png', colour: 'blue', index: 3 },
  { name: 'event4', text: 'Lorem ipsum dolor sit amet, alii civibus interpretaris vim ne, ceteros omnesque ius cu. Mundi delectus percipit ut mea, at sumo ipsum assum pro, est paulo numquam et? Cu duo paulo conceptam voluptaria, ex diam eros comprehensam mea. ', event: 8, img: '../Main/images/image-event1.png', colour: 'white', index: 9 },
  { name: 'event5', text: 'Lorem ipsum dolor sit amet, reque oblique necessitatibus an sed, cu sale posidonium usu! Labitur fastidii senserit id quo, per ea paulo audire partiendo? His suas idque et. Veri mundi et per, per facer viderer saperet ne. Ut ius tibique volutpat, nam magna autem iuvaret ad.', event: -16, img: '../Main/images/image-event1.png', colour: 'grey', index: 20 },
  { name: 'event6', text: 'Lorem ipsum dolor sit amet, ea sit quando partiendo, regione nominavi mandamus sit ad. Maiorum legendos has ei! No mei nostrum scriptorem. At prodesset dissentias vix, pro an unum persius, sale aliquip eu pri. Nulla splendide cu usu, pri graeco accommodare signiferumque no. Ea sonet.', event: 4, img: '../Main/images/image-event1.png', colour: 'green', index: 14 },
  { name: 'event7', text: 'Lorem ipsum dolor sit amet, an ius ullum voluptua, ea simul doming ullamcorper nam. Nec id errem vulputate, nec eius congue prompta ne. Mea partem nullam sanctus et! Pri et choro voluptaria, eu nam quaeque efficiendi! At quo primis equidem signiferumque? Te fabulas omittam intellegebat nec, ex est justo cetero.', event: -1, img: '../Main/images/image-event1.png', colour: 'purple', index: 23 },
  { name: 'event8', text: 'Lorem ipsum dolor sit amet, usu equidem fuisset te, qui ut electram forensibus scripserit! Falli facilisis duo ad. An placerat pericula facilisis usu, eam at graeco explicari. Quot nostrum fastidii qui te, no est quando laboramus! Per cu vero rebum fugit, est no eruditi signiferumque, ut mea audiam salutandi!', event: -17, img: '../Main/images/image-event1.png', colour: 'navy', index: 25 },
  { name: 'event9', text: 'Lorem ipsum dolor sit amet, eos et quidam vocent, eos latine intellegebat definitionem at, ne ferri consul his? Antiopam dissentiunt ut mei, sit case laoreet dissentias an? Nobis dolorem blandit nec ea. Duo cu meis ferri dicam, oblique albucius in mel.', event: 8, img: '../Main/images/image-event1.png', colour: 'silver', index: 29 },
  { name: 'event10', text: 'Lorem ipsum dolor sit amet, nostro quodsi eu eum, per eu altera consulatu urbanitas. Soleat ignota tincidunt quo ut, sea dicta zril ea! Est ad quas euismod nonumes! No has erant ornatus menandri. Saepe integre.', event: -25, img: '../Main/images/image-event1.png', colour: 'olive', index: 35 },
  { name: 'event11', text: 'Lorem ipsum dolor sit amet, mea id ludus luptatum explicari, appareat persecuti ne mel. Pro cu vide assum constituto, assum animal persecuti vix at. Est te erat accumsan partiendo, an eos audiam prodesset. Odio evertitur intellegam ut has. Suas nonumy inimicus per ad, salutatus dissentiunt.', event: -8, img: '../Main/images/image-event1.png', colour: 'lime', index: 38 },
  { name: 'event12', text: 'Lorem ipsum dolor sit amet, per te libris repudiandae. Eligendi urbanitas ei vim, mei ad iisque perpetua. Diam prima reformidans duo in, alia omnes cum eu. Ea nec prodesset percipitur reprehendunt, et per dolore regione definiebas. Duo ut pertinax delicatissimi.', event: -12, img: '../Main/images/image-event1.png', colour: 'lime', index: 39 }
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

// possibility to make the colour dependent from colour in events
// for (let i = 0; i < events.length; i += 1) {  
//   if (this.index === events[i].index) {
//     this.colour = events[i].colour;
//   } else {
//     this.colour = 'yellow';
//   }

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

// possible thing, make font size related to resolution (resolution/5 e.g.)