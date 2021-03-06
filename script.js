$("#currentDay").text(moment().format("dddd") + " " + moment().format("LL"));
function hour() {
  var hours = moment().hour();
  $(".time-block").each(function () {
    blockHour = parseInt($(this).attr("id"));
    if (hours > blockHour) {
      $(this).addClass("past");
    } else if (hours === blockHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });

  // else if
  // else
}
hour();

var save = $(".saveBtn");
save.on("click", function () {
  $(this).siblings(".description");
});
