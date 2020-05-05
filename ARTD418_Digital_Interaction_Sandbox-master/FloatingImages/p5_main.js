
var sketch = function (p5){
  /*
  Seting up a local server: https://www.youtube.com/watch?v=UCHzlUiDD10
  1 Open teminal
  2 navigate to the folde with you index.html. Use cd XXXX to get into the folder XXXX. use ls to list what is the folder contents
  3 un this line of code: python -m SimpleHTTPServer
  4 Open your browser and getto localhost:8000
  https://github.com/processing/p5.js/wiki/Local-server
  */

  let nImages = 12; // the number of images in the folder

  let imageFolderPath = "images/mainPage/image";

  let images = [];

  let imageContainers = [];

  let thisCanvas;

	let myWall;

  p5.preload = function() {
    for (var i = 0; i < nImages; i++) {
      images[i] = p5.loadImage(imageFolderPath+(i+1)+".png");
    }
  }

  p5.setup = function() {

  //thisCanvas = p5.createCanvas(window.innerWidth, 800);
  thisCanvas = p5.createCanvas(window.innerWidth, window.innerHeight);

  myWall = new Wall(this,0,100,800, 500);

  for (var i = 0; i < images.length; i++) {

    imageContainers[i] = new imageContainer(this, images[i], i);
    imageContainers[i].setBox(100);
    myWall.addImage(imageContainers[i]);
  }

  // Place the images and adjust the size here
  imageContainers[1].setPosition(p5.createVector (-975,75));
  imageContainers[1].setBox(300);
  imageContainers[1].setDescription ("A day at my grandparents' village. Exciting \nbecause I remember the way it used to be, alive. \nDays spent chasing storks around town with my \ncousins, fishing with grandpa, and the daily trips \nto the coffee house for fresh-squeezed lemonade \nand ice cream. Now all the kids are gone, and \nthe school is closed. Only the old and disabled \nroam the streets. Even in the face of loss, folk \nmusic still rings across town. A glimmer of pride.")
  imageContainers[1].setCurrentFont ("fonts/Courier_New.ttf");

  imageContainers[0].setPosition(p5.createVector (-550,-150));
  imageContainers[0].setBox(400);
  imageContainers[0].setDescription("Cross the bridge. He's been measuring the water \nlevels for years know. I'm not sure he even knows why. \nWe got some branches from their apple orchard, for a \ngood harvest to come. Donna's grandpa will show us \nhow it's done. This town once boomed with bustling \nsouls going to work, children playing, and the smell of \nfresh baked goods wafting through the air. \nCommunism decimated all of it. The soul was taken. \nSunflowers grow like corn in the midwest \nUnited States here. The happy flowers beam their face \nto the sky. Beacons for hope and sustenance. One day \nthings will get better...I hope. ");

  imageContainers[11].setPosition(p5.createVector (-850,-325));
  imageContainers[11].setBox(350);
  imageContainers[11].setDescription("I felt like I was getting into the car of a couple old \nfriends when Donna's grandparents picked us up \nin Sliven that day. We were off to have an \nadventure, and age didn't matter. It's a beautiful \nthing to learn from those who have lived long \nenough to find perspetive. Those who have \nlived through much differnt times. Times and \ncircumstances really not too distant. As we \ndrifted across the country in our packed coop, \nwe discussed the history. Well Donna did, \nand translated it the best she could. We stopped \nfor melon at a roadside vendor and carried on.")

  imageContainers[6].setPosition(p5.createVector (400,0));
  imageContainers[6].setBox(400);
  imageContainers[6].setDescription("The desolate white fountain. Not a soul, but the scavenging \npigeons could be found. A symbol for the communist way. \nUnempathetic atttempts to give people what they need. \nSpray painted tags decorate the building surounding. \nVoices of the city making themselves heard. Taking back \nwhat was never theirs to begin with.");

  imageContainers[3].setPosition(p5.createVector (200, 300));
  imageContainers[3].setBox(500);
  imageContainers[3].setDescription("");

  imageContainers[5].setPosition(p5.createVector (-220,-250));
  imageContainers[5].setBox(300);
  imageContainers[5].setDescription("A beautiful morning in Sofia. The old world city, \nalive in the modern times. Due to limited \nopportunities elsewhere in the country, the \nyouth flock to this eastern european capital. \nIn this beautiful country of lush fantasy-like \ngeography, out the window you see the lonely \nobelisk to industry, seeming inadequate to fuel \n the city, and imposing on the landscape. It hurts to \nsee a country so behind develop in the ways \nof the west, the ways that now threaten our \nability to survive on this planet. Nations such \nas Bulgaria have the power to tread a new path.")


  imageContainers[4].setPosition(p5.createVector (800,200));
  imageContainers[4].setBox(400);
  imageContainers[4].setDescription("A big hike up Mt.Vihren, the third highest peak in the Balkans, \nand second highest peak in Bulgaria. Today was a day of triumph \nand beauty. We felt powerless in the arms of nature, but it was \nbeautiful, and it was humbling. We trekked with Bulgarians, \nSerbians, Romanians, and Russians. All there to get some \nfresh air just as we were.");

  imageContainers[7].setPosition(p5.createVector (600,-250));
  imageContainers[7].setBox(350);
  imageContainers[7].setDescription("High in the sky. Borders don't exist here. \nNot in the samwe way they do on land \nat least. Donald Trump's wall won't stop \na thing. That's how humans are anyway, \none species. Borders are only a construct. \nHowever within those boundaries of \nborders, immensely different cultures \ndevelop, responding to the problems of \nlife in wholely different ways. Some \ncultures have been taken advantage of, \nsome rise to the top. Often life feels less \nabout maintaining peace, than navigating \nconflicts. Still, I sit above the clouds, \nand for a moment none of that matters. \nI only dream of the gastronmic pleasures \nthat every culture has to offer. \nWe all have to eat.");

  imageContainers[8].setPosition(p5.createVector (100,-150));
  imageContainers[8].setBox(300);
  imageContainers[8].setDescription("");

  imageContainers[2].setPosition(p5.createVector (-200,170));
  imageContainers[2].setBox(300);
  imageContainers[2].setDescription("We'd outlawed the public display of \ncommunist monuments, but we still live in one");

  imageContainers[10].setPosition(p5.createVector (90, -210));
  imageContainers[10].setBox(500);
  imageContainers[10].setDescription("")

  imageContainers[9].setPosition(p5.createVector (-1200, -175));
  imageContainers[9].setBox(350);
  imageContainers[9].setDescription("");


  myWall.setDisplacementMode ("relative");

  myWall.setWallFont("fonts/Trattatello.ttf");

  //....

  //p5.imageMode(p5.CENTER);

  }

  p5.draw = function() {
    p5.background(255,255,255);

    p5.rect(0,0,p5.width-2,p5.height -2);

	  myWall.show();

    myWall.showWallBoudaries(false);

    p5.drawFrame();



  }

  p5.drawFrame = function(){
    let frameWidth = 50;

    p5.noStroke();

    p5.fill(0,0);
    //top
    p5.rect (0 , 0, p5.width , frameWidth);

    //bottom
    p5.rect (0, p5.height, p5.width , - frameWidth);

    //left
    p5.rect (0, 0 , frameWidth, p5.height);

    //right
    p5.rect (p5.width, 0 , - frameWidth, p5.height);

    //p5.stroke(0);

  }


  p5.mouseClicked = function(){
     myWall.myMouseClicked();
  }
}
var myp5 = new p5(sketch, 'p5sketch');
