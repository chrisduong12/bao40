//get the audio element from the HTML code
var media = document.getElementById("mediaClip");

// adaptation for images
//var theImage = document.getElementById("myImage");
var theImage = document.body.style.background;
document.body.style.background = "url('./img/72/animation-01 copy.png') no-repeat fixed center center"

console.log(theImage);
// The scroll position
let scrollPosition;


// This function detects the scroll position and  
function scrollPlay() {
    window.requestAnimationFrame(scrollPlay);
    scrollPosition = window.pageYOffset;

    /*
    Uncomment this line to see the scroll position on console
    */
    //console.log(scrollPosition);

    replaceImage();

    /*  // First
      setPositionAndPlay(100, 320, 0);

      // Second
      setPositionAndPlay(425, 660, 1);

      // Third
      setPositionAndPlay(765, 1030, 2);

      // Fourth
      setPositionAndPlay(1118, 1370, 3);

      // Fifth
      setPositionAndPlay(1469, 1720, 4);

      // Sixth
      setPositionAndPlay(1822, 2063, 5);

      // Seventh
      setPositionAndPlay(2170, 2414, 6);

      // Eighth
      setPositionAndPlay(2520, 2920, 7);

      */
}

window.requestAnimationFrame(scrollPlay);


function activateMedia() {
    document.getElementById("myBtn").innerHTML = "media activated";
    media.play();
    media.loop = false;
}

/*This function sets the scroll positions for playing an audio/video and sets the reproduction time in seconds
startScroll: The scroll position 
*/
function setPositionAndPlay(startScroll, endScroll, playTime) {
    let setupGap = 100;
    // setup
    if (scrollPosition > startScroll && scrollPosition < startScroll + setupGap) {
        media.currentTime = playTime;
        media.pause();
        //console.log("set up time at second: " + playTime);
    } else if (scrollPosition > startScroll + setupGap && scrollPosition < endScroll) {
        media.play();
    }
}

function replaceImage() {
    console.log(scrollPosition);
    if (scrollPosition > 0 && scrollPosition <= 582) {

        theImage.src = preloadedImg[scrollConvertion()].src;
        document.body.style.background = "url(" + preloadedImg[scrollConvertion()].src + ") no-repeat fixed center center"
    }
}

function scrollConvertion() {
    let totalHeight = 654;
    let nFrames = 74;

    return Math.floor((scrollPosition / totalHeight) * nFrames);
}

var preloadedImg = [];


loadImages()

function loadImages() {
    start = 10;
    end = 75;
    prefix = "img/72/animation-"
    for (var i = start; i <= end; i++) {
        var tempImg = new Image();
        tempImg.src = prefix.concat(i) + " copy.png";
        preloadedImg.push(tempImg);
    } // JavaScript Document
}