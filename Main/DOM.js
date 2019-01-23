// function to toggle the button
function toggleBtn(item) {
  $(item).toggle();
}

function changeText(item, text) {
  $(item).text(text);
}

function changeSrc(item) {
  $('#my_image').attr('src', item);
}
