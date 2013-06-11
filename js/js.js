(function($) {

$(document).ready(function() {

// footer
var footer_hidden = { height: '1px' };
var footer_shown = { height: '20px' };
$('#links').css(footer_hidden);

// page state
$('#e1, #e2').hide();
$('#intro').click(function(ev) {
  ev.preventDefault();
  goto_e(1);
});

var goto_e = function(episode) {
  $('#links').animate(footer_shown);
  $('#intro, .e').hide();
  $('#e' + episode).css({height:$(window).height()-40+'px'}).show();
  document.title = 'DETROIT (BLANK CITY) | EPISODE ' + episode;
};

$('#gotoe1').click(function(ev) {
  ev.preventDefault();
  goto_e(1);
});

$('#gotoe2').click(function(ev) {
  ev.preventDefault();
  goto_e(2);
});

});

})(this.jQuery);
