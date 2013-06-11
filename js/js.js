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

$('#fbshare').click(function(ev) {
  ev.preventDefault();
  var w = 300;
  var h = 300;
  var l, t;
  l = (window.screen.width / 2) - ((w / 2) + 10);
  t = (window.screen.height / 2) - ((h / 2) + 50);
  var opts = "status=no,height=" + h + ",width=" + w + ",resizable=yes,left=" + l + ",top=" + t + ",screenX=" + l + ",screenY=" + t + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
  window.open('https://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title),'sharer', opts);
});

});

})(this.jQuery);
