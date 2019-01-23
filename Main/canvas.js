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
};
