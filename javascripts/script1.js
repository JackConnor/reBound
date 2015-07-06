
$(function() {
  var x = 0;
  var y = 0;

  var counter = 0;
  var currentMove = "firstMove";
  var box = document.querySelector('.ball');

  var secondMove = [];
  var thirdMove = [];
  var fourthMove = [];
  var fifthMove = [];
  var sixthMove = [];
  var seventhMove = [];

  var arrayOne = [];
  var arrayTwo = [];
  var arrayThree = [];
  var arrayFour = [];
  var arrayFive = [];

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
      var idNum = this.id;
      var rowPlace = idNum%5; ///left to right
      var rowNum = (((idNum) - ((idNum)%5))/5)+1;
      ///note: this mess above returns row number
      if (counter == 0) {
        /// we're now building out the logic for what happens when a forward docunter is dropped
        $(this).addClass('bounceForward');
        console.log("id num: " + idNum);
        console.log("in the row number: " + rowNum);
        console.log("and in the " + rowPlace +" spot");
        if(rowNum === 1){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayOne.push(rowPlace);
          } else {
            arrayOne.push(rowPlace);
          }
        }
        else if(rowNum === 2){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayTwo.push(rowPlace);
          } else {
            arrayTwo.push(rowPlace);
          }
        }
        else if(rowNum === 3){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayThree.push(rowPlace);
          } else {
            arrayThree.push(rowPlace);
          }
        }
        else if(rowNum === 4){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayFour.push(rowPlace);
          } else {
            arrayFour.push(rowPlace);
          }
        }
        else if(rowNum === 5){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum);
            arrayFive.push(rowPlace);
          } else {
            arrayFive.push(rowPlace);
          }
        }
      }
      //start bouncerBacks
      else if (counter == 1) {
        /// we're now building out the logic for what happens when a forward docunter is dropped
        $(this).addClass('bounceBack');
        console.log("id num: " + idNum);
        console.log("in the row number: " + rowNum);
        console.log("and in the " + rowPlace +" spot");
        if(rowNum === 1){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayOne.push(rowPlace+"a");
          } else {
            arrayOne.push(rowPlace+"a");
          }
        }
        else if(rowNum === 2){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayTwo.push(rowPlace+"a");
          } else {
            arrayTwo.push(rowPlace+"a");
          }
        }
        else if(rowNum === 3){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayThree.push(rowPlace+"a");
          } else {
            arrayThree.push(rowPlace+"a");
          }
        }
        else if(rowNum === 4){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayFour.push(rowPlace+"a");
          } else {
            arrayFour.push(rowPlace+"a");
          }
        }
        else if(rowNum === 5){
          if(rowPlace == rowOrColumnNumber/*registers strt row*/) {
            secondMove.push(rowNum+"a");
            arrayFive.push(rowPlace+"a");
          } else {
            arrayFive.push(rowPlace+"a");
          }
        }
      }
      arrayOne.sort();
      arrayTwo.sort();
      arrayThree.sort();
      arrayFour.sort();
      arrayFive.sort();
      secondMove.sort();
      console.log(arrayOne);
      console.log(arrayTwo);
      console.log(arrayThree);
      console.log(arrayFour);
      console.log(arrayFive);
      console.log(secondMove);
    }

//------------ end drop event ----------
//-------Begin Moves ----------------

////--- core movements as functions ----

  function north() {
    y-=1;
    setInterval(function() {
      box.style.top = y+'px';
    }, 5);
  }

  function south() {
      setInterval(function() {
        y+=1;
        box.style.top = y+'px';
      }, 5);
  }
  function east() {
    setInterval(function() {
      x+=1;
      box.style.top = x+'px';
    }, 5);
  }

  function west() {
    setInterval(function() {
      x-=1;
      box.style.top = x+'px';
    }, 5);
  }


  function firstMovement() {
 //try to use this to chain moves
    var moveRowString = secondMove[0].toString();
    console.log(moveRowString);

    var moveRowArray = moveRowString.split('');
    console.log(moveRowArray);

    var moveRow = moveRowArray[0];
    console.log(moveRow);

    var firstMovement = moveRow*104;

    console.log(firstMovement);

    return firstMovement;
/*

    if(moveRow == 1) {
      $('.ball').animate({marginTop: firstMovement+ 'px'}, firstMovement*12);
      counter++;
    }
    else if(moveRow == 2) {
      $('.ball').animate({marginTop: firstMovement+ 'px'}, firstMovement*6);
      counter++;
    }
    else if(moveRow == 3) {
      $('.ball').animate({marginTop: firstMovement+ 'px'}, firstMovement*4);
      counter++;
    }
    else if(moveRow == 4) {
      $('.ball').animate({marginTop: firstMovement+ 'px'}, firstMovement*3);
      counter++;
    }
    else if(moveRow == 5) {
      $('.ball').animate({marginTop: firstMovement+ 'px'}, firstMovement*2.5);
      counter++;
    }
    */
  }

  function secondMovement() {
    console.log("The starting point is: "+rowOrColumnNumber);
    var activeRow = secondMove[0];
    if(activeRow == 1) {
      console.log("here's what's in that row: "+arrayOne);
    }else {
      console.log("can't read the row array");
    }
    console.log(secondMove);
    return 200;
  }
  function thirdMovement() {
    return 400;
  }
  function fourthMovement() {
    return 400;
  }

  //----- Click Event -------------
/*
  function clickMove() {
    var firstMovement = firstMove();
    for (var i = 0; i < firstMovement; i++) {
      setInterval(firstMove, 5);
    }
  }

*/
//-------End click event ---------



///--------- Start Flight Generator -------

  function flightGenerator() {
    var first = firstMovement();
    var second = secondMovement();
    var third = thirdMovement();
    var fourth = fourthMovement();
    $('.ball').animate({marginTop: first},500, function(){
      $(this).animate({marginLeft: second}, 500, function() {
        $(this).animate({marginTop: third}, 500, function() {
          $(this).animate({marginLeft: fourth}, 500)
        })
      })});
    /*
    console.log('are we flying?');
    console.log('original counter is: ' +counter);
    for (var i = 0; i < 10; i++) {
      if(counter == 0) {
        firstMove()
        console.log("counter is: " + counter);
      } else if(counter == 1) {
        secondMovement();
      } else {
        console.log("and beyond x 8 or so.")
      }
      console.log("counter is: " +counter);
      }
      */
    }


//-------- End Flight Generator -----------

  $('.bouncerBack').on('drag', function() {
    console.log("I'm Dragging")});


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

  $('.ball').on('click', flightGenerator);

  ballMargin();
  dropBumper();
})
