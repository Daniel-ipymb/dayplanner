var saveBtn = $('.saveBtn');

//Function to display the day and time
function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);

//Function to colour code the time blocks.
function colourCodeBlocks() {

  $('.row').each(function() {
      
      var time = moment().format('H');

      var block =  $(this).attr('id');
  
      if (block == time) {
          $(this).children().eq(1).addClass('present');
      } else if (block < time) {
          $(this).children().eq(1).addClass('past');
      } else {
          $(this).children().eq(1).addClass('future');
      }
  })
};

colourCodeBlocks();

