$( document ).ready(function() {
 
var seconds = 30;
var countdown = setInterval(function() {
    seconds--;
    $('.time').html(seconds)
    if (seconds <= 0) clearInterval(countdown);
}, 1000);


function changeScreens() {
    var x = document.getElementById("wrapper-2");
    var y = document.getElementById("wrapper");
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

    



  console.log( "works" );
});
