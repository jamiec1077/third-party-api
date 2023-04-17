$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $(".saveBtn").on("click", function () {
  
      var timeBlockId = $(this).parent().attr("id");
      var userInput = $(this).siblings(".description").val();
  
      localStorage.setItem(timeBlockId, userInput);
    });
  
  
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);
  
      $(this).removeClass("past present future");
  
      if (hour === currentHour) {
        $(this).addClass("present");
      } else if (hour < currentHour) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  
   // as time goes from past,present,future the time block should change color 
    $(".past").find(".description").css("background-color", "#d3d3d3");
    $(".present").find(".description").css("background-color", "#ff6961");
    $(".future").find(".description").css("background-color", "#77dd77");
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $(".time-block").each(function () {
      var timeBlockId = $(this).attr("id");
      var savedInput = localStorage.getItem(timeBlockId);
      $(this).find(".description").val(savedInput);
    });
  
    // TODO: Add code to display the current date in the header of the page.
    var formattedDate = dayjs().format("dddd, MMMM D, YYYY");
    $("header").text(`Today is ${formattedDate}`);
  });