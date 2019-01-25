// Tile events
const events = [
  { name: 'Smoking with a cheetah', text: 'You manage to convince a cheetah to blaze up with you. <br> 50% fo the time it works all the time! <br> <br> Move all the way UP TO TILE 25!', event: 24, img: '../Main/images/event-images/cheetah-smoking.png', colour: 'red', index: 1 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. <br> <br> Relax, enjoy their company and STAY where you are.', event: 0, img: '../Main/images/event-images/watch-movie-with-friends.jpg', colour: 'red', index: 2 },

  { name: 'Hang glider', text: 'You found a hang glider! You miraculously make it quite far before crashing into a tree. <br> <br> Make it all the way UP TO TILE 22!', event: 19, img: '../Main/images/event-images/hang-glider.png', colour: 'blue', index: 3 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! <br> <br> Go BACK TWO', event: -2, img: '../Main/images/event-images/overslept-for-work.jpg', colour: 'red', index: 4 },

  { name: 'Block party', text: 'You made it to the block party!! <br> Enjoy the booze, the endless see of illicit substances and STDs. <br> <br> Move TWO FORWARD', event: 2, img: '../Main/images/event-images/arrived-at-the-party.jpg', colour: 'red', index: 5 },

  { name: 'Wait what?!', text: 'Drugs affect the memory span they say... You wake up in a park hugging a tree. <br> <br> Your taxi home will cost you, move FOUR SPACES BACK.', event: -4, img: '../Main/images/event-images/wait-what.jpg', colour: 'blue', index: 6 },

  { name: 'Late for the interview', text: 'You totally forgot about the interview you were supposed to go this morning. <br> <br> Go BACK TWO.', event: -2, img: '../Main/images/event-images/late-for-interview.jpg', colour: 'red', index: 7 },

  { name: 'Wrong fast food chain', text: 'Well done, you arrived at..... the wrong fast food chain. <br> <br> You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '../Main/images/event-images/wrong-fast-food.png', colour: 'red', index: 8 },

  { name: 'Get out of jail', text: 'You are lucky enough to have a good (an possibly insane) friend to break youout of prison. <br> <br> This glorious move makes you move EIGHT SPACES FORWARD.', event: 8, img: '../Main/images/event-images/get-out-of-jail.png', colour: 'white', index: 9 },

  { name: 'Got a date', text: 'You got that date you wanted so bad. <br> <br> Game recognizes game and it\'s smilling at you my friend. <br> <br> Please feel free to move your sexy ass UP THREE SPACES', event: 3, img: '../Main/images/event-images/got-a-date.jpg', colour: 'red', index: 10 },

  { name: 'Chilling at home', text: 'You decide to take a day off and watch a movie at home. <br> <br> STAY where you are.', event: 0, img: '../Main/images/event-images/chilling-at-home.jpg', colour: 'red', index: 11 },

  { name: 'Lost the weed', text: 'You forgot AGAIN where you stached your weed. <br> <br> Go BACK THREE', event: -3, img: '../Main/images/event-images/lost-the-weed.jpg', colour: 'red', index: 12 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. <br> <br> Relax, enjoy their company and STAY where you are.', event: 0, img: '../Main/images/event-images/watch-movie-with-friends.jpg', colour: 'red', index: 13 },

  { name: 'Friday night', text: 'It\'s friday night and your best friend invited you to come over and blaze up. What an epic night! <br> <br> Move FOUR SPACES FORWARD', event: 4, img: '../Main/images/default-event-img.jpg', colour: 'green', index: 14 },

  { name: 'Pulled over by cops', text: 'You got pulled over by the cops. You were driving 10 in a 60 zone... <br> <br> Go BACK FOUR', event: -4, img: '../Main/images/event-images/got-pulled-over-by-police.jpg', colour: 'red', index: 15 },

  { name: 'Late for the interview', text: 'You totally forgot about the interview you were supposed to go this morning. <br> <br> Go BACK TWO.', event: -2, img: '../Main/images/event-images/late-for-interview.jpg', colour: 'red', index: 16 },

  { name: 'Got a date', text: 'You got that date you wanted so bad. <br> <br> Game recognizes game and it\'s smilling at you my friend. <br> <br> Please feel free to move your sexy ass UP THREE SPACES', event: 3, img: '../Main/images/event-images/got-a-date.jpg', colour: 'red', index: 17 },

  { name: 'Chilling at home', text: 'You decide to take a day off and watch a movie at home. <br> <br> STAY where you are.', event: 0, img: '../Main/images/event-images/chilling-at-home.jpg', colour: 'red', index: 18 },

  { name: 'Block party', text: 'You made it to the block party!! <br> Enjoy the booze, the endless see of illicit substances and STDs. <br> <br> Move TWO FORWARD', event: 2, img: '../Main/images/event-images/arrived-at-the-party.jpg', colour: 'red', index: 19 },

  { name: 'Got caught at uni', text: 'You got caught smoking up by some university cop and had to hide in the womans bathroom. <br> <br> Go BACK SIX SPACES', event: -6, img: '../Main/images/event-images/got-caught-at-uni.png', colour: 'grey', index: 20 },

  { name: 'Lost the weed', text: 'You forgot again where you stached your weed. <br> <br> Go BACK THREE', event: -3, img: '../Main/images/event-images/lost-the-weed.jpg', colour: 'red', index: 21 },

  { name: 'Wrong fast-food chain', text: 'Well done, you arrived at..... the wrong fast food chain. <br> <br> You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '../Main/images/event-images/wrong-fast-food.png', colour: 'red', index: 22 },

  { name: 'Hospital', text: 'Oh, shit! How the fuck did that get in here? A racoon bit your friend and you have to make a detour to the nearest hospital to check if he got rabies. <br> <br> Go BACK FIVE spaces.', event: -5, img: '../Main/images/event-images/hospital.png', colour: 'purple', index: 23 },

  { name: 'Pulled over by cops', text: 'You got pulled over by the cops. You were driving 10 in a 60 zone... <br> <br> Go BACK FOUR', event: -4, img: '../Main/images/event-images/got-pulled-over-by-police.jpg', colour: 'red', index: 24 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! <br> <br> Go BACK TWO', event: -2, img: '../Main/images/event-images/overslept-for-work.jpg', colour: 'red', index: 25 },

  { name: 'Friday night', text: 'It\'s friday night and your best friend invited you to come over and blaze up. What an epic night! <br> <br> Move FOUR SPACES FORWARD', event: 4, img: '../Main/images/default-event-img.jpg', colour: 'green', index: 26 },

  { name: 'Chilling at home', text: 'You decide to take a day off and watch a movie at home. <br> <br> STAY where you are.', event: 0, img: '../Main/images/event-images/chilling-at-home.jpg', colour: 'red', index: 27 },

  { name: 'Block party', text: 'You made it to the block party!! <br> Enjoy the booze, the endless see of illicit substances and STDs. <br> <br> Move TWO FORWARD', event: 2, img: '../Main/images/event-images/arrived-at-the-party.jpg', colour: 'red', index: 28 },

  { name: 'Jackpot', text: 'While rescuing your friend from prison you also happen to find a huge bag of weed. JACKPOT! Get your friend, your kush and go all the way <br> <br> TO TILE THIRTY-SEVEN', event: 8, img: '../Main/images/event-images/kush.png', colour: 'silver', index: 29 },

  { name: 'Chilling with your friends', text: 'You are chilling with your friends. <br> <br> Relax, enjoy their company and STAY where you are.', event: 0, img: '../Main/images/event-images/watch-movie-with-friends.jpg', colour: 'red', index: 30 },

  { name: 'Got a date', text: 'You got that date you wanted so bad. <br> <br> Game recognizes game and it\'s smilling at you my friend. <br> <br> Please feel free to move your sexy ass UP THREE SPACES', event: 3, img: '../Main/images/event-images/got-a-date.jpg', colour: 'red', index: 31 },

  { name: 'Lost the weed', text: 'You forgot again where you stached your weed. <br> <br> Go BACK THREE', event: -3, img: '../Main/images/event-images/lost-the-weed.jpg', colour: 'red', index: 32 },

  { name: 'Overslept for work', text: 'Shit, you overslept for work again! <br> <br> Go BACK TWO', event: -2, img: '../Main/images/event-images/overslept-for-work.jpg', colour: 'red', index: 33 },

  { name: 'Chilling at home', text: 'You decide to take a day off and watch a movie at home. <br> <br> STAY where you are.', event: 0, img: '../Main/images/event-images/chilling-at-home.jpg', colour: 'red', index: 34 },

  { name: 'Jail', text: 'You got f***** by the long d*** of the law. <br> <br> Go BACK TO TILE TEN', event: -25, img: '../Main/images/event-images/jail.png', colour: 'olive', index: 35 },

  { name: 'Late for the interview', text: 'You totally forgot about the interview you were supposed to go this morning. <br> <br> Go BACK TWO.', event: -2, img: '../Main/images/event-images/late-for-interview.jpg', colour: 'red', index: 36 },

  { name: 'Wrong fast-food chain', text: 'Well done, you arrived at..... the wrong fast food chain. <br> <br> You decide to go BACK ONE to avoid falling into any temptation.', event: -1, img: '../Main/images/event-images/wrong-fast-food.png', colour: 'red', index: 37 },

  { name: 'Special bush', text: 'A casual pee in the woods becomes a scarring experience with many unanswered question. <br> <br> Go BACK EIGHT SPACES', event: -8, img: '../Main/images/event-images/special-bush.png', colour: 'lime', index: 38 },

  { name: 'Business hippie', text: 'A business hippie takes advantage of the high demand and sells you some green to an exorbitant price. <br> <br> Go BACK THREE SPACES', event: -3, img: '../Main/images/event-images/business-hippie.png', colour: 'lime', index: 39 }
];

const intro = [
  {text: 'Welcome to my game!!<br> <br> It&rsquo;s based and inspired from the movie Harold &amp; Kumars go to white castle. This game is riddled with some cult moments of the movie, but please don\'t worry, none of this will make the movie any less amazing the first time you watch it. It\'s a must if you haven&rsquo;t seen it yet! <br> <br> This game\'s purpose was neither to be challenging nor hard, but much more to be relaxing and entertaining, especially whilst in the company of some good friends and a couple of cold beers. <br> <br> I hope you will enjoy it and give you a couple fo laughs.<br> <br> To play the game just click the Roll the dice button under the game board.'}
]

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
