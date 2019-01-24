// Tile events
const events = [
  { name: 'Smoking with a cheetah', text: 'You manage to convince a cheetah to blaze up with you, you are officially a badass! Always remember, 50% fo the time it works all the time! Move all the way UP TO TILE 25!', event: 24, img: '../Main/images/event-images/cheetah-smoking.png', colour: 'red', index: 1 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. Relax, enjoy their company and STAY where you are.', event: 0, img: '', colour: 'red', index: 2 },

  { name: 'Hang glider', text: 'You found a hang glider! Apart from a couple of bruises, both physically and mentally you actually managed to land safely. Move UP to tile 22!', event: 19, img: '../Main/images/event-images/hang-glider.png', colour: 'blue', index: 3 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! Go BACK TWO', event: -2, img: '', colour: 'red', index: 4 },

  { name: 'Arrived at the party', text: 'You made it to the party, enjoy the booze, the endless see of illicit substances and STDs. Move TWO FORWARD', event: 2, img: '', colour: 'red', index: 5 },

  { name: 'Wait what?!', text: 'Drugs afect the memory span they say, you shoudn\'t mix alcohol and weed they say... You wake up in a park hugging a tree. Your taxi home will cost you, move FOUR tiles back.', event: -4, img: '../Main/images/event-images/water-splash.png', colour: 'blue', index: 6 },

  { name: 'Late for the interview', text: 'You totally forgot that you had an interview today, go BACK TWO.', event: -2, img: '', colour: 'red', index: 7 },

  { name: 'Wrong fast food chain', text: 'Well done, you arrived...... at the wrong fast food chain. You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '', colour: 'red', index: 8 },

  { name: 'Get out of jail', text: 'You are lucky enough to have a good (an possibly insane) friend to breake into the police station to get you out. This glorious move make you move FORWARD EIGHT tiles.', event: 8, img: '../Main/images/event-images/get-out-of-jail.png', colour: 'white', index: 9 },

  { name: 'Got a date', text: 'You got that date with your beautiful neighbour you wanted. Game recognizes game and it\'s smilling at you my friend. Please feel free to move that sexy ass UP THREE TILES', event: 3, img: '', colour: 'red', index: 10 },

  { name: 'Chilling at home', text: 'You decided to take a day off and watch a movie at home. STAY where you are and enjoy the show.', event: 0, img: '', colour: 'red', index: 11 },

  { name: 'Lost the weed', text: 'You forgot again where you stached your weed. Go BACK THREE', event: -3, img: '', colour: 'red', index: 12 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. Relax, enjoy their company and STAY where you are.', event: 0, img: '', colour: 'red', index: 13 },

  { name: 'Friday night', text: 'It\'s friday night and your best friend invited you to come over and blaze up. What an epic night it was indeed, move FOUR TILES FORWARD', event: 4, img: '../Main/images/event-images/relax-at-home.png', colour: 'green', index: 14 },

  { name: 'Pulled over by cops', text: 'You got pulled over by the cops, you were driving 10 in a 60 zone. Go BACK FOUR', event: 4, img: '', colour: 'red', index: 15 },

  { name: 'Late for the interview', text: 'You totally forgot that you had an interview today, take the pain and go BACK TWO.', event: 2, img: '', colour: 'red', index: 16 },

  { name: 'Got a date', text: 'You got that date with your beautiful neighbour you wanted. Game recognizes game and it\'s smilling at you my friend. Please feel free to move that sexy ass UP THREE TILES', event: 3, img: '', colour: 'red', index: 17 },

  { name: 'Chilling at home', text: 'You decided to take a day off and watch a movie at home. STAY where you are and enjoy the show.', event: 0, img: '', colour: 'red', index: 18 },

  { name: 'Arrived at the party', text: 'You made it to the party, enjoy the booze and various illicit substances and move TWO FORWARD', event: 2, img: '', colour: 'red', index: 19 },

  { name: 'You got caught by some university cop and had to hide in the womans bathroom until the cops arrest some other poor soul. You loose precious time to get to the white castle, go BACK SIX tiles', text: 'No comment.', event: -6, img: '../Main/images/event-images/uni-cop.png', colour: 'grey', index: 20 },

  { name: 'Lost the weed', text: 'You forgot again where you stached your weed. Go BACK THREE', event: -3, img: '', colour: 'red', index: 21 },

  { name: 'Wrong fast-food chain', text: 'Well done, you arrived... at the wrong fast food chain. You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '', colour: 'red', index: 22 },

  { name: 'Raccon', text: 'Oh, shit! How the fuck that did that get in here? The racoon bite you and you have to make a detour to the nearest hospital to check if you got rabies. Good news, you are healthy. Bad news, you have to go BACK FIVE tiles.', event: -5, img: '../Main/images/event-images/raccon.png', colour: 'purple', index: 23 },

  { name: 'Pulled over by cops', text: 'You got pulled over by the cops, you were driving 10 in a 60 zone. Go BACK FOUR', event: 4, img: '', colour: 'red', index: 24 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! Go BACK TWO', event: -2, img: '', colour: 'red', index: 25 },

  { name: 'Spare tire', text: 'Your tire broke and your friend tells you that when he was high he threw your spare tire into the water to see if it would float. Yes, he is dumbass but you still love him. Sadly this will still cost you dearly, you have to wait for the road assistance and therefor GO BACK TO TILE EIGHT.', event: -18, img: '../Main/images/event-images/spare-tire.png', colour: 'navy', index: 26 },

  { name: 'Chilling at home', text: 'You decided to take a day off and watch a movie at home. STAY where you are and enjoy the show.', event: 0, img: '', colour: 'red', index: 27 },

  { name: 'Arrived at the party', text: 'You made it to the party, enjoy the booze and various illicit substances and move TWO FORWARD', event: 2, img: '', colour: 'red', index: 28 },

  { name: 'Jackpot', text: 'While rescuing your friend from prison and deep psycological scares you also happen to find a huge bag of weed laying around. JACKPOT! Get your friend, your kush and make your way UP TO TILE THIRTY-SEVEN', event: 8, img: '../Main/images/event-images/kush.png', colour: 'silver', index: 29 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. Relax, enjoy their company and STAY where you are.', event: 0, img: '', colour: 'red', index: 30 },

  { name: 'Got a date', text: 'You got that date with your beautiful neighbour you wanted. Game recognizes game and it\'s smilling at you my friend. Please feel free to move that sexy ass UP THREE TILES', event: 3, img: '', colour: 'red', index: 31 },

  { name: 'Lost the weed', text: 'You forgot again where you stached your weed. Go BACK THREE', event: -3, img: '', colour: 'red', index: 32 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! Go BACK TWO', event: -2, img: '', colour: 'red', index: 33 },

  { name: 'Chilling at home', text: 'You decided to take a day off and watch a movie at home. STAY where you are and enjoy the show.', event: 0, img: '', colour: 'red', index: 34 },

  { name: 'Jail', text: 'You fot f***** by the long d*** of the law. Sit in jail and go BACK TO TILE TEN', event: -25, img: '../Main/images/event-images/jail.png', colour: 'olive', index: 35 },

  { name: 'Late for the interview', text: 'You totally forgot that you had an interview today, go BACK TWO.', event: 2, img: '', colour: 'red', index: 36 },

  { name: 'Wrong fast-food chain', text: 'Well done, you arrived... at the wrong fast food chain. You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '', colour: 'red', index: 37 },

  { name: 'Special bush', text: 'A casual relief in the woods becomes a scarring experience. The encounter takes its toll on your sanity. Go BACK EIGHT TILES', event: -8, img: '../Main/images/event-images/special-bush', colour: 'lime', index: 38 },

  { name: 'Business hippie', text: 'A business hippie takes advantage of the high demand and sells you some green to an exorbitant price. Go BACK SIX TILES', event: -6, img: '../Main/images/event-images/business-hippie.png', colour: 'lime', index: 39 }
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
