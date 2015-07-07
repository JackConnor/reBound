$(function() {

var counter = 0;

var boardArray = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var topOrSide = (Math.floor(Math.random()*1
)); //for initial ball placement on top or side;

function marginAmount() {
  var oneFive = Math.floor((Math.random()*5)+1);
  console.log("the starting row is: " + oneFive);
  return oneFive;
}

var rowOrColumnNumber = marginAmount();

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
$('.bouncerBack').on('drag', function() {
  console.log("I'm Dragging")});

function myHelperForward() {
  return '<div id=draggableHelperForward></div>';
}
function myHelperBack() { //this is the drag-clone so you can do multiples]
  return '<div id=draggableHelperBack></div>';
}
$('.ball').on('click', function() {
  console.log('hey there');
});
ballMargin();

///Start Code

function dropEvent() {
  var squareId = parseInt(this.id);
  if(counter == 0){
    $(this).addClass('bounceForward');
  } else if(counter == 1) {
    $(this).addClass('bounceBack');
  } else {
    console.log("no class change");
  }
  console.log("you dropped on square of id: " + squareId);
  switch (squareId) {
    case 1:
      console.log(squareId);
      boardArray[0][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 2:
      console.log(squareId);
      boardArray[0][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 3:
      console.log(squareId);
      boardArray[0][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 4:
      console.log(squareId);
      boardArray[0][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 5:
      console.log(squareId);
      boardArray[0][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 6:
      console.log(squareId);
      boardArray[1][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 7:
      console.log(squareId);
      boardArray[1][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 8:
      console.log(squareId);
      boardArray[1][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 9:
      console.log(squareId);
      boardArray[1][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 10:
      console.log(squareId);
      boardArray[1][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 11:
      console.log(squareId);
      boardArray[2][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 12:
      console.log(squareId);
      boardArray[2][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 13:
      console.log(squareId);
      boardArray[2][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 14:
      console.log(squareId);
      boardArray[2][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 15:
      console.log(squareId);
      boardArray[2][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 16:
      console.log(squareId);
      boardArray[3][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 17:
      console.log(squareId);
      boardArray[3][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 18:
      console.log(squareId);
      boardArray[3][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 19:
      console.log(squareId);
      boardArray[3][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 20:
      console.log(squareId);
      boardArray[3][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 21:
      console.log(squareId);
      boardArray[4][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 22:
      console.log(squareId);
      boardArray[4][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 23:
      console.log(squareId);
      boardArray[4][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 24:
      console.log(squareId);
      boardArray[4][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 25:
      console.log(squareId);
      boardArray[4][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    default: console.log('nope');
  }
}



//end of jquery
})
