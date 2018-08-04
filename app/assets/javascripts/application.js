// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
    toggle: {
      visible: 'visible',
      hidden: 'hidden'
    },
    offset: {
      x: 0,
      y: -50
    },
    addHeight: true,
    once: true
  }, document.body, window);
});
function underline(e){
  e.target.nextElementSibling.style.transition = "width 0.5s";
  e.target.nextElementSibling.style.width = "100%";
}

function reset(e){
  e.target.nextElementSibling.style.transition = "width 0.2s";
  e.target.nextElementSibling.style.width = "0%";
}

$('a:lt(5)').on('mouseover',underline);
$('a:lt(5)').on('mouseout',reset);

$('.bout').click(function(event) {
  $('html, body').animate({ scrollTop:  $('footer').offset().top - 50 }, 2000);
//                                        |                                |
//                                       |                                --- duration (milliseconds)
//                                       ---- distance from the top
});
