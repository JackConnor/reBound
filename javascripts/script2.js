//Work in Progress, first move works now on all 5 columns

$(function() {

var counter = 0;

var boardArray = [[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null],[null,null,null,null,null]];

var topOrSide = (Math.floor(Math.random()*1
)); //for initial ball placement on top or side;

function marginAmount() {
  var zeroToFour = Math.floor((Math.random()*5)+1);
  return zeroToFour;
}

var columnNumber = parseInt(marginAmount());
console.log("the starting row is: " + columnNumber); //The ball starting row (1 - 5)
//note: column number is only thing not on 0-4 spectrum

function ballMargin() {
  var pixelsMoved  = (columnNumber)*104;
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
  switch (squareId) {
    case 0:
      console.log(squareId);
      boardArray[0][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 1:
      console.log(squareId);
      boardArray[0][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 2:
      console.log(squareId);
      boardArray[0][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 3:
      console.log(squareId);
      boardArray[0][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 4:
      console.log(squareId);
      boardArray[0][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 5:
      console.log(squareId);
      boardArray[1][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 6:
      console.log(squareId);
      boardArray[1][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 7:
      console.log(squareId);
      boardArray[1][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 8:
      console.log(squareId);
      boardArray[1][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 9:
      console.log(squareId);
      boardArray[1][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 10:
      console.log(squareId);
      boardArray[2][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 11:
      console.log(squareId);
      boardArray[2][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 12:
      console.log(squareId);
      boardArray[2][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 13:
      console.log(squareId);
      boardArray[2][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 14:
      console.log(squareId);
      boardArray[2][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 15:
      console.log(squareId);
      boardArray[3][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 16:
      console.log(squareId);
      boardArray[3][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 17:
      console.log(squareId);
      boardArray[3][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 18:
      console.log(squareId);
      boardArray[3][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 19:
      console.log(squareId);
      boardArray[3][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 20:
      console.log(squareId);
      boardArray[4][0] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 21:
      console.log(squareId);
      boardArray[4][1] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 22:
      console.log(squareId);
      boardArray[4][2] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 23:
      console.log(squareId);
      boardArray[4][3] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    case 24:
      console.log(squareId);
      boardArray[4][4] = squareId;
      console.log("the board array is: "+ boardArray);
      break;
    default: console.log('nope');
  }
  console.log(this);

  console.log("our start point shoudl be: "+ (columnNumber-1));

  return this;
}

//-------------- Start Moves -----------

function firstMove() {
  var firstArray = [];
  var createThisColArrayfun = function() {
    for (var i = 0; i < 5; i++) {

      var columnArrayPoint = parseInt(boardArray[i][columnNumber-1]);
      if((columnArrayPoint/columnArrayPoint) === 1) {
      firstArray.push(parseInt(columnArrayPoint));
      } else {
      }
    }
  }
  var createThisColArray = createThisColArrayfun();
  var firstNexusFun = function() {


      return ((firstArray[0] - firstArray[0]%5)/5);
  }//this function deals with the zero issue
  var firstNexus = firstNexusFun();
  var distancePixels = 100 + (firstNexus)*104;
  var firstMovement =  [distancePixels, 800, "down", [firstNexus, columnNumber-1]];
  return firstMovement;
}


function secondMove() {
  var lastMoveInfo = firstMove();
  console.log("leg one flew: "+ lastMoveInfo);
  var bounceId = parseInt(((lastMoveInfo[3][0])*5) + lastMoveInfo[3][1]);
  console.log("the id of the move two start should be: "+bounceId);
  var backOrForward = document.getElementById(bounceId);
  var borFClass = backOrForward.className;
  console.log(borFClass);
  var nameArray = borFClass.split(' ').reverse();
  var borF = nameArray[0];
  console.log(borF);
  var directionFun = function() {
    if(borF == "bounceForward") {
      return "left";
    } else {
      return "right";
    }

  }//this function deals with the zero issue
  var firstNexus = firstNexusFun();
  //console.log("first bounce point is: "+ firstNexus);

  var distancePixels = 100 + (firstNexus-1)*104;
  //console.log('the distance should be: '+distancePixels);
  return [distancePixels, 800, "down", firstNexus];
}

function secondMove() {
  var startingRowReturn = firstMove();
  var startingRow = parseInt(startingRowReturn[3]);
  console.log('turn two should start on: '+startingRow);
  var secondMoveArray = boardArray[startingRow-1];
  console.log("the filled squares in this array are: "+secondMoveArray);
  //var classTest = document.getElementById(parseInt('15'));
  //console.log('square 15 should have a class of: '+ classTest.className);
  //point in array for our ball will be the first non-null (columnNumber-1) in the row array
  var tensPlaceFun = function() {
    if(startingRow == 5) {
      return (startingRow-1)*5;
    } else {
      return (startingRow-1)*5;
    }
  }
  var tensPlace = tensPlaceFun();
  console.log('id fives place should be: '+ tensPlace);
  console.log("the row of the bounce point ID is: " + parseInt(tensPlace)/5);
  /*var onesPlace = columnNumber-1;
  console.log(" the next bounce point's id should be: "+ tensPlace+ "It's one's place should be: "+ onesPlace);
  var nextBounceId = parseInt(startingRow*5) + parseInt(columnNumber-1);
  console.log("next bounce id is.........: "+ nextBounceId);
*/
  }
  var direction = directionFun();
  console.log("we're going: "+direction);

  var secondMoveArray = boardArray[lastMoveInfo[3][0]];
  console.log("squares in the second move should be: " +secondMoveArray);

  var nextSquareFun = function() {
    if(direction == "left"){
      if((secondMoveArray[columnNumber-2])/(secondMoveArray[columnNumber-2]) === 1) {
        return  secondMoveArray[columnNumber-1] - secondMoveArray[columnNumber-2];
      } else if ((secondMoveArray[columnNumber-3])/(secondMoveArray[columnNumber-3]) === 1) {
        return secondMoveArray[columnNumber-1] -secondMoveArray[columnNumber-3];
      } else if ((secondMoveArray[columnNumber-4])/(secondMoveArray[columnNumber-4]) === 1) {
        return secondMoveArray[columnNumber-1] -secondMoveArray[columnNumber-4];
      } else if ((secondMoveArray[columnNumber-5])/(secondMoveArray[columnNumber-5]) === 1) {
        return secondMoveArray[columnNumber-1] -secondMoveArray[columnNumber-5];
      } else {
        console.log("rest of the row is empty");
        return 10;
      }
    }

    else if(direction == "right") {
      if((secondMoveArray[columnNumber])/(secondMoveArray[columnNumber]) === 1) {
        return secondMoveArray[columnNumber-1] - secondMoveArray[columnNumber];
      } else if  ((secondMoveArray[columnNumber+1])/(secondMoveArray[columnNumber+1]) === 1) {
        return   secondMoveArray[columnNumber-1] - secondMoveArray[columnNumber+1];
      } else if  ((secondMoveArray[columnNumber+2])/(secondMoveArray[columnNumber+2]) === 1) {
        return   secondMoveArray[columnNumber-1] - secondMoveArray[columnNumber+2];
      } else if  ((secondMoveArray[columnNumber+3])/(secondMoveArray[columnNumber+3]) === 1) {
        return  secondMoveArray[columnNumber-1] - secondMoveArray[columnNumber+3];
      } else {
        console.log("rest of the row is empty");
        return -10;
      }
    }
  }
  var nextSquareDistanceSpaces = nextSquareFun();
  console.log(nextSquareDistanceSpaces);
  console.log("the filled squares in this array are: "+secondMoveArray);
  var nextDistance = 250 + ((columnNumber-1)*104) - (nextSquareDistanceSpaces*104);
  console.log("move two we're traveling: " + nextDistance+ "pxs");

  var secondMovement = [nextDistance,300,direction,[parseInt(columnNumber - nextSquareDistanceSpaces - 1),  parseInt(lastMoveInfo[3][0])]];
  console.log(secondMovement);
  console.log("this move went to left-margin: "+(secondMovement[0]+ " in a direction of: "+direction+ " to land at point: "+ secondMovement[3][0])+" in row: "+(secondMovement[3][1]));
  return secondMovement;
}

 function thirdMove() {
   var secondLast = secondMove();
   var thirdStartingX = parseInt(secondLast[3][0]);
   console.log(thirdStartingX);
   var thirdStartingY = parseInt(secondLast[3][1]);
   console.log("third row column should be: " + parseInt(secondLast[3][0])+ " in the row "+secondLast[3][1]);
   var nexusId = (thirdStartingY*5)+(thirdStartingX);
   console.log("the id of the 3rd square launch point is: " + nexusId);
   var squareObject = document.getElementById(parseInt(nexusId));
   console.log(squareObject.className);
   var squareName = squareObject.className;
   console.log(squareName);
   var refinedNameFind = squareName.split(' ').reverse();
   var refinedName = refinedNameFind[0];
   console.log("third move square should be " + refinedName);

   var thirdArray = [];
   var createThisColArrayfun = function() {
     for (var i = 0; i < 5; i++) {
       var columnArrayPoint = parseInt(boardArray[i][thirdStartingX]);
       if((columnArrayPoint/columnArrayPoint) === 1) {
       thirdArray.push(columnArrayPoint);
       console.log("pushed columnArrayPoint: "+columnArrayPoint+" to the array "+thirdArray);
       } else {
       }
     }
     return thirdArray;
   }
   createThisColArrayfun();
   console.log('third array moves(top to bottom) are: '+thirdArray);
   var upOrDown = function() {
     if(refinedName === "bounceBack" && secondLast[2] == "left") {
       return "up";
     } else if(refinedName === "bounceBack" && secondLast[2] == "right"){
       return "down";
     } else if(refinedName === "bounceForward" && secondLast[2] == "left"){
       return "down";
     } else if(refinedName === "bounceForward" && secondLast[2] == "right"){
       return "up";
     } else {
       console.log("suck it");
     }
   }
   var direction = upOrDown();
   console.log(direction);
   var indexPoint = thirdArray.indexOf(nexusId);//index of starting point in new array of move two
   console.log("last move was: "+ secondLast[2]);
   var distanceSpacesFind = function() {
     if(direction == "down") {
       if(indexPoint+1 < thirdArray.length) {
         return thirdArray[indexPoint+1];
         } else {
           return 10;
         }
       }
    else if(direction == "up"){
       if(indexPoint-1 > 0) {
         return thirdArray[indexPoint-1];
       } else {
         return -10;
       }
   } else {
     console.log("couldn't find the next point");
   }
 }
   var distanceSpacesunFiltered = distanceSpacesFind(); //id of next target
   //var distanceSpaces =
   console.log("the next move id is: "+distanceSpacesunFiltered);
   console.log("the id of the third land-square square should be: "+nexusId)

   var nextRowFun = function() {
     if(nexusId%nexusId == nexusId || nexusId === 5) {
       return 1;
     } else {
      return ((nexusId - nexusId%5)/5);
     }
  }
   var nextRow = nextRowFun();
   console.log("next row should be: " +nextRow);
   console.log("turn three start row is: "+ (secondLast[3][1]));
   var travelDistanceFun = "";//next point - current point

  /*
   var createThisColArray = createThisColArrayfun();
   var firstNexusFun = function() {
       return ((firstArray[0] - firstArray[0]%5)/5);
   }//this function deals with the zero issue
   var firstNexus = firstNexusFun();
   var distancePixels = 100 + (firstNexus)*104;
   var firstMovement =  [distancePixels, 800, "down", [firstNexus, columnNumber-1]];
   return firstMovement;
   */

   return [1000, 400, null, [null, null]];
 }
//---------------------End Moves

function flightController() {
  var first = firstMove();
  var second = secondMove();
  var third = thirdMove();
  var fourth = "";
  $('.ball').animate({marginTop: first[0]},first[1], function(){
    $(this).animate({marginLeft: second[0]}, second[1], function() {
      $(this).animate({marginTop: third[0]}, 300, function() {
        $(this).animate({marginLeft: second[0]}, 300);
      })
    })});
  }

  //clicks, events, and calls

  $('.ball').on('click', flightController);
  ballMargin();

//end of jquery
})
