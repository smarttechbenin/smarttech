$(document).ready(function(){
//  $('.innovation.carousel-slider').carousel({ fullWidth: true });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true ,
    indicators: true,
    duration: 100
  });

  $('.slider').slider({
    height: 650
  });


/**
  ScrollFire routine
*/
var options = [
  {selector: '#one', offset: 0, callback: function(el){
    Materialize.showStaggeredList($(el));
  }}
];
Materialize.scrollFire(options);
});
