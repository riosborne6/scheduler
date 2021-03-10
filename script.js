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
  var eventSave = $(this).siblings(".description").val();
  var eventKey = $(this).parent().attr("id");
  localStorage.setItem(eventKey, eventSave);
});

function getEvents() {
  for (let i = 9; i < 19; i++) {
    var eventValue = localStorage.getItem(i);
    $(`#${i}`).children("textarea").val(eventValue);
  }
}
getEvents();
