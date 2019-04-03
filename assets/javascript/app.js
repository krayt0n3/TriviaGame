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

$("input[name=customRadioInline1]:radio").click(function()
{ 
  if($('#customRadioInline1-1').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

$("input[name=customRadioInline2]:radio").click(function()
{ 
  if($('#customRadioInline2-3').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

$("input[name=customRadioInline3]:radio").click(function()
{ 
  if($('#customRadioInline3-2').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

$("input[name=customRadioInline4]:radio").click(function()
{ 
  if($('#customRadioInline4-4').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

$("input[name=customRadioInline5]:radio").click(function()
{ 
  if($('#customRadioInline5-1').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

$("input[name=customRadioInline6]:radio").click(function()
{ 
  if($('#customRadioInline6-3').is(':checked')) { 
    alert("it's checked"); 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  }
});

/*$("input[name=customRadioInline1]:radio").click(function() {
  if($("input[name=customRadioInline1]:radio").val() === 'Quercus') {
    correctAnswers += 1;
  }
});*/


$('#incorrect').html(incorrectAnswers);
$('#unanswered').html(unanswered);


  console.log( "works" );
});
