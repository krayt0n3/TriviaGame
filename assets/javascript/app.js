window.onload = function() {

var clockRunning = false;
var time = 90;

function countDown(t) {
    setInterval(() => time--, 1000);
    console.log('this works');
}

function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    if (minutes === 0) {
      minutes = "00";
    }
  
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return minutes + ":" + seconds;
  }


  function count() {
    time--;
    //  TODO: increment time by 1, remember we cant use "this" here.
  var timeOn =timeConverter(time);
    //  TODO: Get the current time, pass that into the timeConverter function,
    //        and save the result in a variable.
  $("#display-time").text(timeOn);
    //  TODO: Use the variable you just created to show the converted time in the "display" div.
  
  }


  function reset() {
    $('#display-time').text('00.00');
    time = 60;
  
    //  TODO: Change the "display" div to "00:00."
  
  }

  //count();


















};