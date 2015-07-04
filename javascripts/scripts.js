$(

function() { //jquery start function


// Start of Dragging feature to drop bumpers onto board

  var arrayRow1 = [];
  var arrayRow2 = [];
  var arrayRow3 = [];
  var arrayRow4 = [];
  var arrayRow5 = [];
  var masterArray = [[],[],[],[],[]];

  $('.bouncer').draggable({snap: '.square', helper: myHelper});
  $('.square').droppable({drop: dropEvent});


  function dropEvent() { //what happens when you drop on this square
    $(this).removeClass('square ui-droppable').addClass('bounce');
    var elId = parseInt(this.id);

    if(elId <=5 ) {
    arrayRow1.push(elId);
    masterArray[0].push(elId);
    console.log("row1");
    }
    else if(elId <=10 ) {
    arrayRow2.push(elId - 5);
    masterArray[1].push(elId);
    console.log("row2");
    }
    else if(elId <=15 ) {
    arrayRow3.push(elId - 10);
    masterArray[2].push(elId);
    console.log('row3');
    }
    else if(elId <=20 ) {
    arrayRow4.push(elId - 15);
    masterArray[3].push(elId);
    console.log('row4');
    }
    else if(elId <=25 ) {
    arrayRow5.push(elId - 20);
    masterArray[4].push(elId);
    console.log('row5');
    }
    else{
      console.log('huh?');
    }

    console.log(arrayRow1.sort());
    console.log(arrayRow2.sort());
    console.log(arrayRow3.sort());
    console.log(arrayRow4.sort());
    console.log(arrayRow5.sort());
    console.log(masterArray);
  }

function firstMove() {
  var stretch = [];
  for (var x = 0; x < 5; x++) {
    if(masterArray[x][0]) {
      stretch.push(104+ (x*104));
      console.log('hell yea we caught something');
      }
    else {
      console.log('shit');
    }
  }
  console.log("distance = " + stretch[0] + "pxs");
  return stretch[0];
}



var x = 0;
var y = 0;

function vectors() {
  var firstStretch = firstMove();
  console.log(firstStretch);
  if (x <= 0 && y <= firstStretch) {
    x += 0;
    y += 1;
    for (var i = 0; i < 2; i++) {
      box.style.left = x + "px";
      box.style.top = y + "px";
    }
  }

  else {
    x += 1;
    y += 0;
    for (var i = 0; i < 2; i++) {
      box.style.left = x + "px";
      box.style.top = y + "px";
    }
  }
}
////end bumpers (except for a few calls)

  function myHelper() { //this is the drag-clone so you can do multiples
    return '<div id=draggableHelper></div>';
  }


  var box = document.querySelector('.ball');


  function move() {
    setInterval(vectors, 5);
  }

  box.addEventListener('click', move);

  }
)
