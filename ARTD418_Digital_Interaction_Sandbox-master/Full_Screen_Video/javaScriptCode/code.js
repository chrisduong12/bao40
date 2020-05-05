// Get the video
var video = document.getElementById("myVideo");

// Get the button
var pauseBtn = document.getElementById("pauseButton");

// Pause and play the video, and change the button text
function pauseFunction() {
    if (video.paused) {
        video.play();
        pauseBtn.innerHTML = "Pause";
    } else {
        video.pause();
        pauseBtn.innerHTML = "Play";
    }
}

// Get the button
var loopBtn = document.getElementById("loopButton");

// Enable video loop
function switchLoop() { 

	if (video.loop){
     	loopBtn.innerHTML = "No loop";
        video.loop = false;
        video.load();  
     }else{
     	loopBtn.innerHTML = "Looping";
        video.loop = true;
        video.load(); 
     }   
}