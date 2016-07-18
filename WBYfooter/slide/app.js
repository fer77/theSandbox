$(document).ready(function() {
  $("footer").hover(function () {
    $(this).animate({height: 450});
  }, function(){
    $(this).animate({height: 75});
  });
});
