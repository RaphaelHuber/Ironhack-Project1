// function to toggle the button
function toggleBtn(item) {
  $(item).toggle();
}

function changeText(item, text) {
  $(item).html(text);
}

function changeSrc(item, src) {
  $(item).attr('src', src);
}

// clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}