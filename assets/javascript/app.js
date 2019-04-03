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

//correct answers
$("input[name=customRadioInline1]:radio").click(function()
{ 
  if($('#customRadioInline1-1').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline1']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline2]:radio").click(function()
{ 
  if($('#customRadioInline2-3').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline2']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline3]:radio").click(function()
{ 
  if($('#customRadioInline3-2').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline3']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline4]:radio").click(function()
{ 
  if($('#customRadioInline4-4').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline4']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline5]:radio").click(function()
{ 
  if($('#customRadioInline5-1').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline5']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline6]:radio").click(function()
{ 
  if($('#customRadioInline6-3').is(':checked')) { 
  correctAnswers += 1;
  console.log(correctAnswers);
  $('#correct').text(correctAnswers);
  $(":radio[name='customRadioInline6']:not(:checked)").attr("disabled", true);
  }
});

//incorrect answers
$("input[name=customRadioInline1]:radio").click(function()
{ 
  if(($('#customRadioInline1-2').is(':checked')) || ($('#customRadioInline1-3').is(':checked')) || ($('#customRadioInline1-4').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline1']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline2]:radio").click(function()
{ 
  if(($('#customRadioInline2-1').is(':checked')) || ($('#customRadioInline2-2').is(':checked')) || ($('#customRadioInline2-4').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline2']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline3]:radio").click(function()
{ 
  if(($('#customRadioInline3-1').is(':checked')) || ($('#customRadioInline3-3').is(':checked')) || ($('#customRadioInline3-4').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline3']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline4]:radio").click(function()
{ 
  if(($('#customRadioInline4-1').is(':checked')) || ($('#customRadioInline4-2').is(':checked')) || ($('#customRadioInline4-3').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline4']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline5]:radio").click(function()
{ 
  if(($('#customRadioInline5-2').is(':checked')) || ($('#customRadioInline5-3').is(':checked')) || ($('#customRadioInline5-4').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline5']:not(:checked)").attr("disabled", true);
  }
});

$("input[name=customRadioInline6]:radio").click(function()
{ 
  if(($('#customRadioInline6-1').is(':checked')) || ($('#customRadioInline6-2').is(':checked')) || ($('#customRadioInline6-4').is(':checked'))) { 
  incorrectAnswers += 1;
  console.log(incorrectAnswers);
  $('#incorrect').html(incorrectAnswers);
  $(":radio[name='customRadioInline6']:not(:checked)").attr("disabled", true);
  }
});

//unanswered answers
$("input[name=customRadioInline1]:radio").click(function()
{ if (seconds <= 0) {
  if(!($('#customRadioInline1-1').is(':checked')) && !($('#customRadioInline1-2').is(':checked')) && !($('#customRadioInline1-3')) && !($('#customRadioInline1-4').is(':checked'))) { 
  unanswered += 1;
  console.log(unanswered);
  $('#unanswered').html(unanswered);
  } }
});

$("input[name=customRadioInline2]:radio").click(function()
{ 
  if(!($('#customRadioInline2-1').is(':checked')) && !($('#customRadioInline2-2').is(':checked')) && !($('#customRadioInline2-3')) && !($('#customRadioInline2-4').is(':checked'))) { 
    unanswered += 1;
    console.log(unanswered);
    $('#unanswered').html(unanswered);
  }
});

$("input[name=customRadioInline3]:radio").click(function()
{ 
  if(!($('#customRadioInline3-1').is(':checked')) && !($('#customRadioInline3-2').is(':checked')) && !($('#customRadioInline3-3')) && !($('#customRadioInline3-4').is(':checked'))) { 
    unanswered += 1;
    console.log(unanswered);
    $('#unanswered').html(unanswered);
  }
});

$("input[name=customRadioInline4]:radio").click(function()
{ 
  if(!($('#customRadioInline4-1').is(':checked')) && !($('#customRadioInline4-2').is(':checked')) && !($('#customRadioInline4-3')) && !($('#customRadioInline4-4').is(':checked'))) { 
    unanswered += 1;
    console.log(unanswered);
    $('#unanswered').html(unanswered);
  }
});

$("input[name=customRadioInline5]:radio").click(function()
{ 
  if(!($('#customRadioInline5-1').is(':checked')) && !($('#customRadioInline5-2').is(':checked')) && !($('#customRadioInline5-3')) && !($('#customRadioInline5-4').is(':checked'))) { 
    unanswered += 1;
    console.log(unanswered);
    $('#unanswered').html(unanswered);
  }
});

$("input[name=customRadioInline6]:radio").click(function()
{ 
  if(!($('#customRadioInline6-1').is(':checked')) && !($('#customRadioInline6-2').is(':checked')) && !($('#customRadioInline6-3')) && !($('#customRadioInline6-4').is(':checked'))) { 
    unanswered += 1;
    console.log(unanswered);
    $('#unanswered').html(unanswered);
  }
});


  console.log( "works" );
});
