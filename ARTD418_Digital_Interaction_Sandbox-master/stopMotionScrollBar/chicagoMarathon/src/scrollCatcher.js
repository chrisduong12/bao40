/*** GLOBAL VARIABLES ***/

// The scroll position
let scrollPosition;

//The mouse wheel count. 
let scrollCount = 0;

// the collections of imageSequence
let mainSequences = [];


// **** ANIMATION LOOP *****
window.requestAnimationFrame(loop);

function loop() {
    scrollPosition = window.pageYOffset;

    mainSequences.forEach(element => {
        element.activate();
    });

    // this makes the loop iterate  
    window.requestAnimationFrame(loop);
}

// **** EVENTS ****
window.addEventListener('wheel', (evt) => {
    scrollCount += evt.deltaY;
    if (scrollCount < 0) {
        scrollCount = 0;
    }
    // console.log("Wheel count: " + scrollCount)
    // console.log("Scroll position: " + scrollPosition);
    //
    document.getElementById("scrollPos").textContent = scrollPosition;
    document.getElementById("wheelPos").textContent = scrollCount;
})