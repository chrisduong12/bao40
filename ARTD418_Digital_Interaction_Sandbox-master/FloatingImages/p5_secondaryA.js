
var sketch = function (p5){
  /*
  Seting up a local server: https://www.youtube.com/watch?v=UCHzlUiDD10
  1 Open teminal
  2 navigate to the folde with you index.html. Use cd XXXX to get into the folder XXXX. use ls to list what is the folder contents
  3 un this line of code: python -m SimpleHTTPServer
  4 Open your browser and getto localhost:8000
  https://github.com/processing/p5.js/wiki/Local-server
  */

  let nImages = 5; // the number of images in the folder

// <!-- *******REPLACE ******* -->
  let imageFolderPath = "../images/secondaryPageA/image";

  let images = [];

  let imageContainers = [];

  let thisCanvas;
	
	let myWall;

  p5.preload = function() {
    for (var i = 0; i < nImages; i++) {
      images[i] = p5.loadImage(imageFolderPath+(i+1)+".jpg");
    }
  }

  p5.setup = function() {

  //thisCanvas = p5.createCanvas(window.innerWidth, 800);
  thisCanvas = p5.createCanvas(window.innerWidth, 800);

  myWall = new Wall(this,0,100,800, 500);

  for (var i = 0; i < images.length; i++) {

    imageContainers[i] = new imageContainer(this, images[i], i);
    myWall.addImage(imageContainers[i]);
  }

  // Place the images and adjust the size here
  imageContainers[0].setPosition(p5.createVector (0,0));
  imageContainers[0].setBox(300);

  imageContainers[1].setPosition(p5.createVector (300,0));
  imageContainers[1].setBox(680);

  imageContainers[2].setPosition(p5.createVector (980,0));
  imageContainers[2].setBox(300);

  imageContainers[3].setPosition(p5.createVector (1200,0));
  imageContainers[3].setBox(300);

  imageContainers[4].setPosition(p5.createVector (1500,0));
  imageContainers[4].setBox(400);

  myWall.setDisplacementMode ("absolute");

  //....

  //p5.imageMode(p5.CENTER);

  }

  p5.draw = function() {
    p5.background(255,255,255);

    p5.rect(0,0,p5.width-2,p5.height -2);

	  myWall.show();

    myWall.showWallBoudaries(false);

   p5.drawFrame(255);

  }

  p5.drawFrame = function(white){
    let frameWidth = 100;

    p5.noStroke();

    p5.fill(white);
    //top
    p5.rect (0 , 0, p5.width , frameWidth);

    //bottom
    p5.rect (0, p5.height, p5.width , - frameWidth);

    //left
    p5.rect (0, 0 , frameWidth, p5.height);

    //right
    p5.rect (p5.width, 0 , - frameWidth, p5.height);

    p5.stroke(0);


  }

  p5.mouseClicked = function(){
    for (var i = 0; i < imageContainers.length; i++) {
      if(imageContainers[i].isMouseOver()){
          //alert("Clicked on element "+ imageContainers[i].id);
          var wWidth = window.innerWidth;
         // window.open("internalPages/PopIt1.html","","height=450,width=1380,scrollbars=no")
      }
    }
  }

}

// <!-- *******REPLACE ******* -->
var myp5 = new p5(sketch, 'p5_AlbumA');
