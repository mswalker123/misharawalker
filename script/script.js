$(document).ready(function() {

  // $(".navbar-toggle").on("click", function() {
  //     $(this).toggleClass("active");
  // });

  // $(".navbar-toggle").on("load",function() {
  //     $(this).toggleClass("active");
  // });

  $('#header-text').typeIt({
       strings: 'Hi! I\'m Mishara!',
       speed: 300,
       autoStart: false
  });
});

//   $('section[data-type="background"]').each(function() {
//     var $bgobj = $(this); // assigning the object
//
//     $(window).scroll(function() {
//         var yPos = -($window.scrollTop() / $bgobj.data('speed'));
//
//         // Put together our final background position
//         var coords = '50% ' + yPos + 'px';
//
//         // Move the background
//         $bgobj.css({
//             backgroundPosition: coords
//         });
//     });
//
//     $(document).scroll(function() {
//
//         // parallaxing
//         var $movebg = $(window).scrollTop() * -0.3;
//         $('.portion').css('background-positionY', ($movebg) + 'px');
//
//         // add class active to nav a on scroll
//         var scrollPos = $(document).scrollTop() + 100;
//         $('nav a').each(function() {
//             var currLink = $(this);
//             var refElement = $(currLink.attr("href"));
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('nav a').removeClass("active");
//                 currLink.addClass("active");
//             }
//         });
//     });
//
// });
//
// });
// $('.nav-link').onclick(function(){
//   $('#text').remove();
// });
