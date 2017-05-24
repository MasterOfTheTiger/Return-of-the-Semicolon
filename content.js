window.onload = (function(){addall()});

function addall() {

var semicolon = '<span class="semicolon">;</span>'
var projectsemicolon = '<span class="projectsemicolon">;</span>';

/*var previous = document.getElementById('footer-menu').innerHTML;*/

/*document.getElementById('footer-menu').innerHTML = previous + semicolon;*/


var projectNames = document.getElementsByClassName('media-info-item').innerHTML;

for (var i = 0, l = projectNames.length; i < l; i++) {
  var previous = projectNames[i].innerHTML;
  projectNames[i].innerHTML = previous + semicolon;
}
}
