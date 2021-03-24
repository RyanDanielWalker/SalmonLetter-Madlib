$(document).ready(function() {
  $("#formOne").submit(function(event) {
  const input1 = $("input#input1").val();

  $(".input1").text(input1);

  $("#letter").fadeIn();
  $("#formOne").hide();
  
  event.preventDefault();
});

});