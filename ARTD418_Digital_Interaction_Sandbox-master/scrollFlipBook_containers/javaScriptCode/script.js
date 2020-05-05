// retrieve all the SVG paths in the html
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {

    // for each path
    var pathEl = pathEls[i];

    var offset = anime.setDashoffset(pathEl);

    pathEl.setAttribute('stroke-dashoffset', offset);

    // Animation parameters
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: 4000,
        delay: anime.random(0, 200),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}