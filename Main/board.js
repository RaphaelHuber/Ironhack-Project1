// Tile events
const events = [
  { name: 'event1', text: 'Lorem ipsum dolor sit amet, alii esse te vis. Nam eu nobis constituam, dicat ornatus in eos. Electram voluptaria instructior mea an. Sed id audire minimum repudiare. Pro evertitur vituperata ei, ea affert timeam aliquam mel. Est te soluta aliquid, detracto apeirian id nec. No novum aliquam his, suas dissentias.', event: -1, img: '../Main/images/image-event1.png', colour: 'red', index: 2 },
  { name: 'event2', text: 'Lorem ipsum dolor sit amet, odio omnis movet est at, in cum justo propriae, prima sadipscing ea nec. Pro idque volutpat scripserit no. Duo in intellegat deseruisse, vivendo delicata duo eu, ad quo sumo facilisi. Mei unum laboramus ea, mei at sonet nemore suscipiantur. Aperiri aliquando at mea, summo aeque.', event: 1, img: '../Main/images/image-event1.png', colour: 'blue', index: 4 },
  { name: 'event3', text: 'Lorem ipsum dolor sit amet, exerci homero eum in, brute nihil deterruisset sit eu. Pri id aliquid deleniti perfecto, eu movet antiopam vix. Tale possit vis an. Pro persecuti suscipiantur interpretaris at. Choro melius at mei. An qui eius possit pertinacia, perfecto periculis cum et. Et has commune placerat vulputate.', event: -2, img: '../Main/images/image-event1.png', colour: 'blue', index: 7 },
  { name: 'event4', text: 'Lorem ipsum dolor sit amet, alii civibus interpretaris vim ne, ceteros omnesque ius cu. Mundi delectus percipit ut mea, at sumo ipsum assum pro, est paulo numquam et? Cu duo paulo conceptam voluptaria, ex diam eros comprehensam mea. No elitr verterem has, qui prima autem mundi ad? Pro te populo.', event: 2, img: 'fantastic-four.jpg', colour: 'white', index: 10 },
  { name: 'event5', text: 'Lorem ipsum dolor sit amet, reque oblique necessitatibus an sed, cu sale posidonium usu! Labitur fastidii senserit id quo, per ea paulo audire partiendo? His suas idque et. Veri mundi et per, per facer viderer saperet ne. Ut ius tibique volutpat, nam magna autem iuvaret ad. Viris interesset vis ut.', event: -3, img: 'flash.jpg', colour: 'grey', index: 17 },
  { name: 'event6', text: 'Lorem ipsum dolor sit amet, ea sit quando partiendo, regione nominavi mandamus sit ad. Maiorum legendos has ei! Cu quo paulo postulant assueverit? No mei nostrum scriptorem. At prodesset dissentias vix, pro an unum persius, sale aliquip eu pri. Nulla splendide cu usu, pri graeco accommodare signiferumque no. Ea sonet.', event: 3, img: 'green-arrow.jpg', colour: 'green', index: 20 },
  { name: 'event7', text: 'Lorem ipsum dolor sit amet, an ius ullum voluptua, ea simul doming ullamcorper nam. Nec id errem vulputate, nec eius congue prompta ne. Mea partem nullam sanctus et! Pri et choro voluptaria, eu nam quaeque efficiendi! At quo primis equidem signiferumque? Te fabulas omittam intellegebat nec, ex est justo cetero.', event: -1, img: 'green-lantern.jpg', colour: 'purple', index: 22 },
  { name: 'event8', text: 'Lorem ipsum dolor sit amet, usu equidem fuisset te, qui ut electram forensibus scripserit! Falli facilisis duo ad. An placerat pericula facilisis usu, eam at graeco explicari. Quot nostrum fastidii qui te, no est quando laboramus! Per cu vero rebum fugit, est no eruditi signiferumque, ut mea audiam salutandi! Te.', event: 1, img: 'ironman.jpg', colour: 'navy', index: 30 },
  { name: 'event9', text: 'Lorem ipsum dolor sit amet, eos et quidam vocent, eos latine intellegebat definitionem at, ne ferri consul his? Antiopam dissentiunt ut mei, sit case laoreet dissentias an? Nobis dolorem blandit nec ea. Duo cu meis ferri dicam, oblique albucius in mel. Civibus eligendi has ne, ei graeci saperet cotidieque vel.', event: -2, img: 'spiderman.jpg', colour: 'silver', index: 33 },
  { name: 'event10', text: 'Lorem ipsum dolor sit amet, nostro quodsi eu eum, per eu altera consulatu urbanitas. Soleat ignota tincidunt quo ut, sea dicta zril ea! Eu solum aliquid interesset sit, qui et decore salutandi argumentum, ea admodum oporteat efficiendi vel? Est ad quas euismod nonumes! No has erant ornatus menandri. Saepe integre.', event: 2, img: 'superman.jpg', colour: 'olive', index: 36 },
  { name: 'event11', text: 'Lorem ipsum dolor sit amet, mea id ludus luptatum explicari, appareat persecuti ne mel. Pro cu vide assum constituto, assum animal persecuti vix at. Est te erat accumsan partiendo, an eos audiam prodesset. Eu eirmod malorum facilisi est. Odio evertitur intellegam ut has. Suas nonumy inimicus per ad, salutatus dissentiunt.', event: -3, img: 'the-avengers.jpg', colour: 'lime', index: 38 }
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