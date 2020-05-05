// retrieve all the SVG paths in the html
var introText = document.querySelectorAll('.st0');

let introTextAnimated;


function setup() {
    introTextAnimated = anime({
        targets: introText,
        easing: 'easeInOutQuad',
        duration: 3000,
        scale: 37,
        autoplay: false
    });
}


function mouseWheel() {
    // get the scroll percentage
    let scrollPercentage = getScrollPercentage();
    // multiply the scroll percentage times the animation duration
    introTextAnimated.seek(scrollPercentage * 3000)
}

/**This function returns a value between 0 and 1. The valu correspond to the percentage of the page height scrolled */
function getScrollPercentage() {
    // The scroll position
    let currentScroll = window.pageYOffset;
    // The total scrollable length
    let scrollableLength = document.scrollingElement.scrollHeight - window.innerHeight;
    // The ratio 
    let relativeScroll = currentScroll / scrollableLength;
    // Return the value
    if (relativeScroll == NaN) {
        return 0
    } else {
        return relativeScroll;
    }

}

function setDivPosition() {
    let divElement = document.getElementById('fixPosition')
    divElement.style.top = 0;

}