// retrieve all the SVG paths in the html
var shipPath = document.querySelectorAll('.st1');
var ship = document.querySelectorAll('.st2');

var myPath = anime.path(shipPath[0]);


anime({
    targets: ship[0],
    translateX: myPath('x'),
    translateY: myPath('y'),
    rotate: myPath('angle'),
    easing: 'linear',
    duration: 10000,
    loop: true
});