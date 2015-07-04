
/*------------This is canvass test stuff -------*/
function doFirst() {
  var can = document.querySelector('canvas');
  canvas = can.getContext('2d');

}

window.addEventListener("load", doFirst, false);



var box = document.querySelector('.snapper');
x = 0;
y = 0;

/*
function movement() {
  switch(direction) {
    case 'downRight':
    for (var i = 0; i < 2; i++) {
      x+=1;
      y+=1;
      box.style.left = x+'px';
      box.style.top = y+'px';
      console.log('loop tested downRight');
    }
      br;


    case 'upRight':
    for (var i = 0; i < 2; i++) {
      x+=1;
      y-=1;
      box.style.left = x+'px';
      box.style.top = y+'px';
      console.log('loop tested upRight');
  }
}
}
*/

function downRight() {
  x+=1;
  y+=1;
  for (var i = 0; i < 2; i++) {
    box.style.top = x+'px';
    box.style.left = y+'px';
    console.log(x,y + "inside for loop");

    return (x,y);
  }
}

function downLeft() {
  x-=1;
  y+=1;
  for (var i = 0; i < 2; i++) {
    box.style.top = x+'px';
    box.style.left = y+'px';
    console.log(x,y+ "inside for loop");
  }
}

function upRight() {
  for (var i = 0; i < 2; i++) {
    x+=1;
    y-=1;
    box.style.top = x+'px';
    box.style.left = y+'px';
    console.log('moving');
  }
}

function upLeft() {
  for (var i = 0; i < 2; i++) {
    x-=1;
    y-=1;
    box.style.top = x+'px';
    box.style.left = y+'px';
    console.log('moving');
  }
}

/*
function downRight() {
  for (var i = 0; i < 2; i++) {
    if (y < 400 && x < 400) {
    x+=1;
    y+=1;
    box.style.left = x+'px';
    box.style.top = y+'px';
    console.log('loop tested');
    } else if(y >= 400 && x >=400) {
    x+=1;
    y-=1;
    box.style.left = x+'px';
    box.style.top = y+'px';
    console.log('changed directions!');
    }
  }
}
*/


function move() {
  //var currentDirection = movement('upRight');
    console.log(x, y + "outside for loop");
  setInterval(downRight, 20);
}


var domEl = document.querySelector('.ball');
var elPos = domEl.position;

console.log(elPos);
//box.addEventListener('click', move);

//movement();
/*
var waldo = document.querySelector('.ball');
var x=0;
var y=0;
function loop() {
    x+=1;
    y+=1;
    waldo.style.left = x+"px";
    waldo.style.top = y+"px";
    //console.log('hell yea');
  }

function move() {
setInterval(loop, 100);
}
waldo.addEventListener('click', move);
*/
