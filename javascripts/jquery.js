$(

  function() {

    var $x = [0, 312, 312, 104, 104];
    var $y = [412, 412, 204, 204, -300];

    $('.bouncer').draggable({snap: '.square', helper: myHelper});
    $('.square').droppable({drop: dropEvent});
    $('.ball').on('click', function() {
      for (var i = 0; i < $x.length; i++) {
      $(this).animate({top: $y[i]+'px', left: $x[i]+'px'}, 1000);
    }
  });
  function dropEvent() {
    var positionX = this.offset();
    $(this).css('background-color', '#00FFCC');
    console.log('dropped');
    $x.push(positionX.left);
    $y.push(positionX.top);
  }
  function myHelper() {
    return '<div id=draggableHelper></div>';
  }
  /* ---jquery init ---*/
  }
)
