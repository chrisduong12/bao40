let myFrogs;
let fly;

function setup(){

    
    myFrogs = anime({
      targets: ["#frog7", "#frog6", "#frog5"],
      translateX: [-270, 270],
      direction: 'alternate',
      loop: true,
      duration: 2000,
      easing: function(el, i, total) {
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    
    myFrogs = anime({
      targets: ["#frog1", "#frog2", "#frog3"],
      translateX: [-270, 270],
      direction: 'alternate',
      loop: true,
      duration: 2000,
      easing: function(el, i, total) {
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    
    myFrogs = anime({
      targets: ["#frog4"],
      translateX: [-270, 270],
      direction: 'alternate',
      loop: true,
      duration: 2000,
      easing: function(el, i, total) {
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    
    fly= anime({
      targets: ["#fly_1_"],
      translateY: 1100,
      direction: 'alternate',
      loop: true,
      duration: 2000,
      easing: function(el, i, total) {
        return function(t) {
          return Math.pow(Math.sin(t * (i + 1)), total);
        }
      }
    });
    
    fly.pause()
    
}

function draw(){

      if (parseFloat(fly.animations[0].currentValue) > 600 && parseFloat(fly.animations[0].currentValue) < 700 ){
      //  console.log("HERE")
        let frog7X = parseFloat(myFrogs.animations[0].currentValue);
        if (frog7X > -50 && frog7X < 50){
            console.log("caught")
            document.getElementById('flyStatus').innerHTML = "caught"
        }
      }
    
}

function mouseWheel(event){
  //  console.log(getScrollPercentage())
    fly.seek(getScrollPercentage()*2000)
}


/**This function returns a value between 0 and 1. The value correspond to the percentage of the page height scrolled */
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