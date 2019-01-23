// function drawImageCanvas() {
//   const img = new Image();
//   const imgScale = 485 / 300;
//   img.onload = function () {
//     ctx.drawImage(img, 0, 0, canvas.height * imgScale, canvas.height);
//   };
//   img.src = '../Main/images/canvas-front.jpg';
// }

// clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ladder
function drawLine(xInt, yInt, xFin, yFin) {
  ctx.beginPath();
  ctx.moveTo(xInt, yInt);
  ctx.lineTo(xFin, yFin);
  ctx.stroke();
}


function drawLadders() {
  drawLine(125, 450, 635, 150); // from 1 to 25
  drawLine(165, 450, 675, 150);
  drawLine(330, 450, 630, 250); // from 3 to 22
  drawLine(370, 450, 670, 250);
  drawLine(630, 370, 130, 250); // from 9 to 17
  drawLine(650, 350, 150, 230);
  drawLine(135, 340, 230, 240); // from 14 to 18
  drawLine(170, 345, 265, 250);
  drawLine(230, 150, 330, 50); // from 29 to 37
  drawLine(270, 150, 370, 50);
}