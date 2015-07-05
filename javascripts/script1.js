
$(function() {

  var topOrSide = (Math.floor(Math.random()*2)); //for initial ball placement on top or side;

  function marginAmount() {
    var oneFive = Math.floor((Math.random()*5)+1);
    return oneFive;
  }

  var rowOrColumn = marginAmount(); // this var is a # (1 - 5) will be the row or column number the ball is place at


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
    var tp = placeBall();
    var oneToFive = marginAmount();
    var pixelsMoved  = (oneToFive)*104;
    if(tp == "top") {
      $(".ball").css('margin-left', 146 + (pixelsMoved));
      console.log(pixelsMoved);
      console.log('top: '+ oneToFive);
    } else if(tp == "side") {
      $(".ball").css('margin-left', '140px');
      $(".ball").css('margin-top', (pixelsMoved)+"px");
      console.log(pixelsMoved);
      console.log('side: ' + oneToFive);
    }
  }


ballMargin();

})
