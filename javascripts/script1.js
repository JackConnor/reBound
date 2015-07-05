
$(function() {

  var counter = 0;

  var secondMove = [];
  var thirdMove = [];
  var fourthMove = [];

  var topOrSide = (Math.floor(Math.random()*1/*should be times 2, but I'm cutting off side for now  */
  )); //for initial ball placement on top or side;

  function marginAmount() {
    var oneFive = Math.floor((Math.random()*5)+1);
    console.log("the starting row is: " + oneFive);
    return oneFive;
  }

  var rowOrColumnNumber = marginAmount(); // this var is a # (1 - 5) will be the row or column number the ball is place at

  function ballMargin() {
    var pixelsMoved  = (rowOrColumnNumber)*104;
    if(topOrSide == 0) {
      $(".ball").css('margin-left', 146 + (pixelsMoved));
    } else if(topOrSide == 1) {
      $(".ball").css('margin-left', '140px');
      $(".ball").css('margin-top', (pixelsMoved)+"px");
    }
  }

  $('.bouncerForward').draggable({snap: '.square', helper: myHelperForward});
  $('.bouncerBack').draggable({snap: '.square', helper: myHelperBack});
  $('.square').droppable({drop: dropEvent});


// --------- controls how bumper interaction
/// ------------ affects counter
  $('.bouncerBack').on('mousedown', function() {
    counter = 1;
    console.log("counter is: " + counter);
    return counter;});

  $('.bouncerForward').on('mousedown', function() {
    counter = 0;
    console.log("counter is: " + counter);
    return counter;});

    function dropBumper() {
      $('.square').droppable({drop: dropEvent});
      }


  //---------begin drop event -----------
  //---------------------------------


    function dropEvent() {
      console.log(rowOrColumnNumber);
      var idNum = this.id;
      var rowPlace = idNum%5; ///left to right
      var rowNum = (((idNum-1) - ((idNum-1)%5))/5)+1;
      ///note: this mess above returns row number
      if (counter == 0) {
        /// we're now building out the logic for what happens when a forward docunter is dropped
        $(this).addClass('bounceForward');
        console.log("id num: " + idNum);
        console.log("in the row number: " + rowNum);
        console.log("and in the " + rowPlace +" spot");
        if(rowPlace == rowOrColumnNumber) {
          console.log('this could be your first bumper');
          console.log("id num is still: " + idNum);
          console.log("still in the row number: " + rowNum);
          console.log("and also still in the " + rowPlace +" spot");
          console.log(secondMove);
          secondMove.push(rowNum);
          console.log(secondMove);
        } else {

        }
        /*else if($(this.id - 5) == rowOrColumnNumber){
          secondMove.push(this.id);
          console.log(secondMove);
        }else if($(this.id - 10) == rowOrColumnNumber){
          secondMove.push(this.id);
          console.log(this.id);
        }else if($(this.id - 15) == rowOrColumnNumber){
          secondMove.push(this.id);
          console.log(this.id);
        }else if($(this.id - 20) == rowOrColumnNumber){
          secondMove.push(this.id);
          console.log(this.id);
        }

      }
      /// we're now building out the logic for what happens when a back counter is dropped
      else if(counter == 1) {
        $(this).addClass('bounceBack');
    */}
    }

//------------ end drop event ----------


//----- Click Event -------------

  function clickMove() {
    console.log('whatup');
  }



//-------End click event ---------


  $('.bouncerBack').on('drag', function() {
    console.log("I'm Dragging")});




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
  //////------Event Listeners and stuff that needs triggers --------------

  $('.bouncerback').click(function() {
    console.log("hello");
  })
  $('.ball').on('click', clickMove);
  ballMargin();
  dropBumper();
})
