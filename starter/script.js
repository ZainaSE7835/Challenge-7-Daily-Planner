//Current date formatted and displayed on top of the webpage//
const m = moment().format('dddd MMMM Do');
$("#currentDay").text(m);

//Colour coding the time blocks to distinguish past, present and future//
function timeBlocks() {
    $(".time-block").each(function() {
       var currentHour = parseInt(moment().format("H"));
        var Hour = parseInt($(this).attr("id"));
        if (Hour < currentHour) {
           $(this).addClass("past");
       } else if (Hour > currentHour) {
           $(this).addClass("future");
        } else {
               $(this).addClass("present");
           }
   })
    }

//Executing the function//
timeBlocks();

//Adding eventlistener - when the save button id clicked, the data input is stored in localstorage//
$(".saveBtn").click(function (event) {
//prevent data loss when page is refreshed//
    event.preventDefault();
//creating new variables and selecting the correct elements from the HTML file//
    var time = $(this).parent().attr("id");
    var content = $(this).siblings(".description").val();
//localStorage(key, value)
    localStorage.setItem(time, content);
//Execute in console//
    console.log(time, content);
});

//Retrieve the stored data from localStorage//
$("#9").children("textarea").val(localStorage.getItem("9"));

$("#10").children("textarea").val(localStorage.getItem("10"));

$("#11").children("textarea").val(localStorage.getItem("11"));

$("#12").children("textarea").val(localStorage.getItem("12"));

$("#13").children("textarea").val(localStorage.getItem("13"));

$("#14").children("textarea").val(localStorage.getItem("14"));

$("#15").children("textarea").val(localStorage.getItem("15"));

$("#16").children("textarea").val(localStorage.getItem("16"));

$("#17").children("textarea").val(localStorage.getItem("17"));
