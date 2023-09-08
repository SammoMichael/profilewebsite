$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top-btn').fadeIn();
    } else {
      $('#back-to-top-btn').fadeOut();
    }
  });

  $('#back-to-top-btn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});

const texts = [".", "..", "..."]; // Array of texts to display
var tspanElement = document.getElementById('fish_egg');

let textIndex = 0; // Current index of text array
// // console.log(textElement)

function changeText() {

  tspanElement.textContent = texts[textIndex]; // Set text content to current text
  textIndex = (textIndex + 1) % texts.length; // Increment index or loop back to 0
// }
// // console.log(document.getElementsByClassName('kkk')[0].textContent)
// console.log(document.getElementById('fish_egg'))
}

setInterval(changeText, 800); // Call changeText() every 2 seconds






function resetForm() {
  document.getElementById("contact_by_mail").reset()
}





