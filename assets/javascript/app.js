$( document ).ready(function() {
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0; 
var x = document.getElementById("wrapper-2");
var y = document.getElementById("wrapper");
var seconds = 30;
var countdown = setInterval(function() {
    seconds--;
    $('.time').html(seconds)
    if (seconds <= 0) {
        y.style.display = "none";
        x.style.display = "block";
        setTimeout(function() {
          location.reload();
      }, 5000);
        clearInterval(countdown);

    }    }, 1000);


function changeScreens() {
    if (x.style.display === "none") {
      x.style.display = "block";
      setTimeout(function() {
        location.reload();
    }, 5000);
    } else {
      x.style.display = "none";
    }

    if (y.style.display === "block") {
        y.style.display = "none";
      } else {
        y.style.display = "block";
      }
  }

$('.btn-dark').click(changeScreens);

$('#correct').html(correctAnswers);
$('#incorrect').html(incorrectAnswers);
$('#unanswered').html(unanswered);


  console.log( "works" );
});
