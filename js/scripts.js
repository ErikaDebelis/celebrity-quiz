$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const option = $("input:radio[name=celebrity]:checked").val();

  if (option === "ladies") {
    $('#women').show();
  } else if (option === "men") {
    $('#guys').show();
  } else {
    $('#women').show();
    $('#guys').show();
  }
  event.preventDefault();
  });
});