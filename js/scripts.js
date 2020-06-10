$(document).ready(function() {
  $('form#leap-year').submit(function(event) {
    event.preventDefault();
    const year = parseInt($('input#year').val());
    const result = leapYear(year);
    $('#result').text(result);
  })
})

  /////////////////////////////////////////
 /////  User Interface Logic Above   /////
/////////////////////////////////////////

function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}