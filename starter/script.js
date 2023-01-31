//Current date displayed on top of the webpage//
const m = moment().format('dddd MMMM Do');
$("#currentDay").text(m);

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

timeBlocks();

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("textarea").val();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});


$("#9").children("textarea").val(localStorage.getItem("9"));

$("#10").children("textarea").val(localStorage.getItem("10"));

$("#11").children("textarea").val(localStorage.getItem("11"));

$("#12").children("textarea").val(localStorage.getItem("12"));

$("#13").children("textarea").val(localStorage.getItem("13"));

$("#14").children("textarea").val(localStorage.getItem("14"));

$("#15").children("textarea").val(localStorage.getItem("15"));

$("#16").children("textarea").val(localStorage.getItem("16"));

$("#17").children("textarea").val(localStorage.getItem("17"));
