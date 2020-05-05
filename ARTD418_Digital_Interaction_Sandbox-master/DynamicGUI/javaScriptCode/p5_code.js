
var diskGUI;

function setup(){
	createCanvas(400,800);

	diskGUI = new DiskArray (this, createVector(100,50), 14, 20)
}

function draw(){
	background(250);
	diskGUI.show();
}