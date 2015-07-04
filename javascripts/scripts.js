$(

var array = [];

function() { //jquery start function

  $('.bouncer').draggable({snap: '.square', helper: myHelper});
  $('.square').droppable({drop: dropEvent});

  function dropEvent() { //what happens when you drop on this square
    $(this).removeClass('square ui-droppable').addClass('bounce');
    console.log('dropped');
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


  function bounceClick() {
    var squares = document.querySelectorAll('.bounce');
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        console.log("something is happening!");
      });
      };
      //console.log(array);
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
