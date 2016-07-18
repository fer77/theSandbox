$(document).ready(function() {
  $("footer").hover(function () {
    $(this).animate({height: 350});
  }, function(){
    $(this).animate({height: 75});
  });
});
