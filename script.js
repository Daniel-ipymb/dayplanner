var saveBtn = $('.saveBtn');

//Function to display the day and time
function displayTime(){
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(dateTime);
};

setInterval(displayTime,1000);

//Function to colour code the time blocks.
