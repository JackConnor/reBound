
$(function() {

  var counter = 0;

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



/*----------- Two kinds of bumpers ------------
--------------Creating Drop Event-------------*/

  //var $bumperCounter = 0;


  //if(marker)
  $('.square').droppable({drop: dropEventForward});
  //else if(other marker)
  //$('.square').droppable({drop: dropEventBack});



  function dropEventForward() {
    $(this).addClass('bounceForward');
    }

  function dropEventBack() {
    $(this).addClass('bounceBack');
    }

/*
  function dropEvent() { //what happens when you drop the draggable item on this square
    $(this).removeClass('square ui-droppable').addClass('bounce');
    var elId = parseInt(this.id);

    if(elId <=5 ) {
      arrayRow1.push(elId);
      //masterArray[0].push(elId);
      if(elId == 1) {
          secondMoveRow.push("arrayRow1");
      } else {
        console.log('hmm');
      }
    }
    else if(elId <=10 ) {
    arrayRow2.push(elId - 5);
      if(elId - 5 == 1) {
        secondMoveRow.push("arrayRow2");
      } else {
        console.log('hmm');
      }
    }
    else if(elId <=15 ) {
    arrayRow3.push(elId - 10);
      if(elId - 10 == 1) {
        secondMoveRow.push("arrayRow3");
      } else {
        console.log('hmm');
        }
    }
    else if(elId <=20 ) {
    arrayRow4.push(elId - 15);
      if(elId - 15 == 1) {
        secondMoveRow.push("arrayRow4");
      } else {
        console.log('hmm');
        }
    }
    else if(elId <=25 ) {
    arrayRow5.push(elId - 20);
      if(elId - 20 == 1) {
        secondMoveRow.push("arrayRow5");
      } else {
        console.log('hmm');
        }
      }
    else{
      console.log('huh?');
    }
    secondMoveRow = secondMoveRow.sort();

    arrayRow1 = arrayRow1.sort();
    arrayRow2 = arrayRow2.sort();
    arrayRow3 = arrayRow3.sort();
    arrayRow4 = arrayRow4.sort();
    arrayRow5 = arrayRow5.sort();
    //we push to an arrayRow each time we hit a square, as well as push to an array called secondMoveRow with each row name.
  }
*/

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
    return '<div id=draggableHelperBack></div>';
  }

  /*-------------------------------------------------------*/
  $('.bouncerback').click(function() {
    console.log("hello");
  })

  ballMargin();

})
