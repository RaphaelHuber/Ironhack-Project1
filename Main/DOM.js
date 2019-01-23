// function to toggle the button
function toggleBtn() {
  document.getElementById('start-button').value = 'Roll them dice';
}

function changeText(item, text) {
  $(item).text(text);
}

function changeSrc(item) {
  $('#my_image').attr('src', item);
}
