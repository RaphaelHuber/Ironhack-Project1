const img = new Image();
const imgScale = 485 / 300;
img.onload = function () {
  ctx.drawImage(img, 0, 0, canvas.height * imgScale, canvas.height);
};
img.src = '../Main/images/canvas-front.jpg';
