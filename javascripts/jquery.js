$(
 //Ball animation
  function() {
    //var $x = [0, 312, 312, 104, 104];
    //var $y = [412, 412, 204, 204, -300];
    $('.bouncer').draggable({snap: '.square', helper: myHelper});
    $('.square').droppable({drop: dropEvent});
  //  $('.ball').on('click', function() {
    //  for (var i = 0; i < $x.length; i++) {
      //$(this).animate({top: $y[i]+'px', left: $x[i]+'px'}, 1000);
    //}


    function dropEvent() {
      //$(this).css('background-color', '#00FFCC');
      $(this).removeClass('square ui-droppable').addClass('bounce');
      console.log('dropped');
    }
    function myHelper() {
      return '<div id=draggableHelper></div>';
    }
    $('.bounce').on('click', function() {
      alert($(this).css('background-color'));
    })
  }
)
