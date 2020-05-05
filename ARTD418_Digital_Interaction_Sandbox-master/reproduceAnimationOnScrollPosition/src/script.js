// the collection of animated paths
var animatedPaths = [];

function setup() {

    // retrieve all the SVG paths from the html
    var pathEls = document.querySelectorAll('path');

    // Go over each one of the paths
    for (var i = 0; i < pathEls.length; i++) {

        // for each path
        var pathEl = pathEls[i];

        // Set an offset along the path.
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters. Customize this with your own animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'reverse',
            easing: 'easeInOutSine',
            autoplay: false
        });

        // pause each animation
        tmp.pause();

        // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

}

// Activate animations on mouse clicked
function mousePressed() {
    animatedPaths[2].play();
}

// Activate animations on mouse wheel position
function mouseWheel() {
    if (window.pageYOffset > 100) {
        animatedPaths[1].play();
    }
    if (window.pageYOffset > 300) {
        animatedPaths[5].play();
    }
}