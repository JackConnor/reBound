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
    //arrayRow1.push(place);
    console.log(elId - 3);
    }
    else if( 5 < elId <=10 ) {
    //arrayRow2.push(place);
    console.log(elId);
    }
    else if( 10 < elId <=15 ) {
    //arrayRow2.push(place);
    console.log(this.id+'b');
    }

  }


  function bounceClick() {
    var squares = document.querySelectorAll('.bounce');
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        console.log("something is happening!");
      });
      };
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



  function boardArray() {
    for (var i = 0; i <= 25 ; i++) {
      if(this.className == 'square ui-droppable bounce') {
        array[i].push[1];
      }
      }
    }


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

  bounceClick();

  //document.querySelector('.square').addEventListener('click', squareClick);

  box.addEventListener('click', move);


  }
)
