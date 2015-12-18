define(['jq_stuff', 'runShow'], function(jq_stuff, runShow) {

  // $(document).ready(function() {
  //   $("p").hover(function() {
  //     $(this).fadeTo("slow", 0.25);
  //   },
  //   function() {
  //     $(this).fadeTo("fast", 1.00);
  //   });
  // });

  $(document).ready(function() {
    $("pre").hover(function() {
      $(this).animate({
        //width: '+=20px',
        marginLeft: '-=10px',
        marginRight: '-=10px',
        //height: '+=10px',
        marginTop: '-=10px',
        //marginBottom: '-=3px',
        opacity: '1.0'
      }, 100);
    },
    function() {
      $(this).animate({
        //width: '-=20px',
        marginLeft: '+=10px',
        marginRight: '+=10px',
        //height: '-=10px',
        marginTop: '+=10px',
        //marginBottom: '+=3px',
        left: '5px',
        opacity: '.65'
      }, 150);
    });
  });


});
