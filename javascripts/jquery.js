$(
  function() {
    $('.ball').on('click', function() {
      $(this).animate({top: '400px', left: '400px'}, 1000);
    });
  })
