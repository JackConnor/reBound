$(

function() { //jquery start function

  var arrayRow1 = [];
  var arrayRow2 = [];
  var arrayRow3 = [];
  var arrayRow4 = [];
  var arrayRow5 = [];

  $('.bouncer').draggable({snap: '.square', helper: myHelper});
  $('.square').droppable({drop: dropEvent});

  function dropEvent() { //what happens when you drop on this square
    $(this).removeClass('square ui-droppable').addClass('bounce');
    var elId = parseInt(this.id);

    if(elId <=5 ) {
    arrayRow1.push(elId);
    console.log("row1");
    }
    else if(elId <=10 ) {
    arrayRow2.push(elId - 5);
    console.log("row2");
    }
    else if(elId <=15 ) {
    arrayRow3.push(elId - 10);
    console.log('row3');
    }
    else if(elId <=20 ) {
    arrayRow4.push(elId - 15);
    console.log('row4');
    }
    else if(elId <=25 ) {
    arrayRow5.push(elId - 20);
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
  }




  function myHelper() { //this is the drag-clone so you can do multiples
    return '<div id=draggableHelper></div>';
  }

    //-------end jquery page

  var box = document.querySelector('.ball');
  x = 0;
  y = 0;


  function downRight() {
    x+=1;
    y+=1;
    for (var i = 0; i < 2; i++) {
      box.style.top = x+'px';
      box.style.left = y+'px';
      console.log(x,y + "inside for loop");

    }
  }
  /*
  function velocity() {
    // + or -
    var vel = "+";
    return vel;
  }

  function direction() {
    //y or x
    var dir = "top";
    return dir;
  }
  */





  function vector() {
    if (x <= 0 && y <= 516) {
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




  function move() {
    //var currentDirection = movement('upRight');
    //console.log(x, y + " outside for loop");
    setInterval(vector, 5);
  }


  //document.querySelector('.square').addEventListener('click', squareClick);

  box.addEventListener('click', move);


  }
)
