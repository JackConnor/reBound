
$(function() {

  var topOrSide = (Math.floor(Math.random()*2)); //for initial ball placement on top or side;

  function marginAmount() {
    var oneFive = Math.floor((Math.random()*5)+1);
    return oneFive;
  }

  var rowOrColumnNumber = marginAmount(); // this var is a # (1 - 5) will be the row or column number the ball is place at


  function placeBall() { //returns a binary for top or side
    if(topOrSide === 0) {
      var topSide = "top";
      return topSide;
    }
    else if(topOrSide === 1) {
      var topSide = "side";
      return topSide;
    }
  }


  function ballMargin() {
    //var tp = placeBall();
    //var oneToFive = marginAmount();
    var pixelsMoved  = (rowOrColumnNumber)*104;
    if(topOrSide == 0) {
      $(".ball").css('margin-left', 146 + (pixelsMoved));
      console.log(pixelsMoved);
      console.log('top: '+ rowOrColumnNumber);
    } else if(topOrSide == 1) {
      $(".ball").css('margin-left', '140px');
      $(".ball").css('margin-top', (pixelsMoved)+"px");
      console.log(pixelsMoved);
      console.log('side: ' + rowOrColumnNumber);
    }
  }

  $('.bouncerForward').draggable({snap: '.square', helper: myHelperForward});
  $('.bouncerBack').draggable({snap: '.square', helper: myHelperBack});



/*----------- Two kinds of bumpers ------------*/

var $bumperCounter = 0;

function counterUp() {
  $('.bouncerBack').on('click', function() {
    $(this).css('color', 'purple');
    //$bumperCounter++;
    //console.log("the counter went up to: " + bumperCounter);
  });
}
counterUp();
//if(marker)
//$('.square').droppable({drop: dropEvent});
//else if(other marker)
//$('.square').droppable({drop: dropEventBack});

function counterBack() {
  $('.bouncerBack').on('mouseup', function() {
    bumperCounter++;
    console.log("the counter evened out to: " + bumperCounter);

  })
}

/*----- This  (below) is code for the forward Bumpers (orginal type)
------------------------------------------------------*/





  /*----- This is code for the Back Bumpers (new type)---
  ------------------------------------------------------*/

/* these are the bumper drag clone helper functions ---
-------------------------------------------------------*/
  function myHelperForward() { //this is the drag-clone so you can do multiples
    return '<div id=draggableHelperForward></div>';
  }

  function myHelperBack() { //this is the drag-clone so you can do multiples]
    $()
    return '<div id=draggableHelperBack></div>';
  }

  /*-------------------------------------------------------*/

  ballMargin();
  console.log(topOrSide);
  console.log(rowOrColumnNumber);


})
