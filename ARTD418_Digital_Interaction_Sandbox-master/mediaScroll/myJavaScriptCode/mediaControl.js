//get the audio element from the HTML code
var media = document.getElementById("mediaClip");
var theAnimatedGiff = document.getElementById("theAnimation");
let scrollPosition;

// This function detects the scroll position and  
function scrollPlay(){  
  window.requestAnimationFrame(scrollPlay);
  scrollPosition = window.pageYOffset;

  /*
  Uncomment this line to see the scroll position on console
  */console.log(scrollPosition);
  

 /* // First
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
  setPositionAndPlay(2520, 2920, 7);*/

  /***** Controlling the animated giff ****/
  
  // snow
  switchAnimation(0, 898, "https://i.gifer.com/2eSd.gif");
  
  // leaves
  switchAnimation(899, 1953, "https://library.kissclipart.com/20180905/iee/kissclipart-autumn-gif-transparent-clipart-autumn-clip-art-b1f9a54cd26940e1.gif");

  // petals
  switchAnimation(1954, 2890, "https://img1.liveinternet.ru/images/attach/c/1/57/639/57639782_Padayuschie_lepestkt_rozz.gif");

  
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
function setPositionAndPlay(startScroll, endScroll, playTime){
  let setupGap = 100;
  if (scrollPosition > startScroll && scrollPosition < startScroll + setupGap){
    media.currentTime = playTime; 
    media.pause();
    //console.log("set up time at second: " + playTime);
  } else if (scrollPosition > startScroll + setupGap && scrollPosition < endScroll){
    media.play();

  }
}

function switchAnimation(startScroll, endScroll, imageURL){
  if (scrollPosition > startScroll && scrollPosition < endScroll){
    if (theAnimatedGiff.src != imageURL){
      theAnimatedGiff.src = imageURL;
    }
  } 
}

