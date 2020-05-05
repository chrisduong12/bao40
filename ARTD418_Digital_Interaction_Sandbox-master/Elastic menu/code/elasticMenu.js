
var elasticMenu = function (p5) {

	var backBone;
	var dates = [["1967", "link", "data", "description"],
	["1969", "link", "data", "description"],
	["1970", "link", "data", "description"],
	["1971", "link", "data", "description"],
	["1972", "link", "data", "description"],
	["1973", "link", "data", "description"],
	["1973", "link", "data", "description"],
	["1974", "link", "data", "description"],
	["1975", "link", "data", "description"],
	["1976", "link", "data", "description"],
	["1977", "link", "data", "description"],
	["1977", "link", "data", "description"],
	["1978", "link", "data", "description"],
	["1979", "link", "data", "description"],
	["1980", "link", "data", "description"],
	["1982", "link", "data", "description"],
	["1983", "link", "data", "description"],
	["1984", "link", "data", "description"],
	["1986", "link", "data", "description"],
	["1987", "link", "data", "description"],
	["1993", "link", "data", "description"],
	["1995", "link", "data", "description"],
	["1995", "link", "data", "description"],
	["1997", "link", "data", "description"],
	["1999", "link", "data", "description"],
	["2002", "link", "data", "description"],
	["2003", "link", "data", "description"],
	["2013", "link", "data", "description"],
	["2016", "link", "data", "description"]];

	let bkgnImage;

	p5.setup = function () {
		p5.createCanvas(1800, 3000);

		bkgnImage = p5.loadImage("./images/background/Artboard 1.png");

		backBone = new DiskArray(this, p5.createVector(535, 150), dates.length, 20);
		backBone.setNamesAndURL(dates);


		backBone.disks[0].setBoxSide("right");
		backBone.disks[0].setBoxPositionX(270);
		backBone.disks[0].setCoverExtension(250);
		backBone.disks[0].setDescription("text");
		backBone.disks[0].setCoverImage("url");
		backBone.disks[0].setPicture("url");


		backBone.disks[1].setBoxSide("left");
		backBone.disks[1].setBoxPositionX(19);
		backBone.disks[1].setCoverExtension(490);
		backBone.disks[1].setDescription("text");
		backBone.disks[1].setCoverImage("url");
		backBone.disks[1].setPicture("url");

		backBone.disks[2].setBoxSide("right");
		backBone.disks[2].setBoxPositionX(270);
		backBone.disks[2].setCoverExtension(250);
		backBone.disks[2].setDescription("text");
		backBone.disks[2].setCoverImage("url");
		backBone.disks[2].setPicture("url");

		backBone.disks[3].setBoxSide("left");
		backBone.disks[3].setBoxPositionX(19);
		backBone.disks[3].setCoverExtension(490);
		backBone.disks[3].setDescription("text");
		backBone.disks[3].setCoverImage("url");
		backBone.disks[3].setPicture("url");

		backBone.disks[4].setBoxSide("right");
		backBone.disks[4].setBoxPositionX(270);
		backBone.disks[4].setCoverExtension(250);
		backBone.disks[4].setDescription("text");
		backBone.disks[4].setCoverImage("url");
		backBone.disks[4].setPicture("url");

		backBone.disks[5].setBoxSide("left");
		backBone.disks[5].setBoxPositionX(19);
		backBone.disks[5].setCoverExtension(490);
		backBone.disks[5].setDescription("text");
		backBone.disks[5].setCoverImage("url");
		backBone.disks[5].setPicture("url");

		backBone.disks[6].setBoxSide("right");
		backBone.disks[6].setBoxPositionX(270);
		backBone.disks[6].setCoverExtension(250);
		backBone.disks[6].setDescription("text");
		backBone.disks[6].setCoverImage("url");
		backBone.disks[6].setPicture("url");

		backBone.disks[7].setBoxSide("left");
		backBone.disks[7].setBoxPositionX(19);
		backBone.disks[7].setCoverExtension(490);
		backBone.disks[7].setDescription("text");
		backBone.disks[7].setCoverImage("url");
		backBone.disks[7].setPicture("url");

		backBone.disks[8].setBoxSide("right");
		backBone.disks[8].setBoxPositionX(270);
		backBone.disks[8].setCoverExtension(250);
		backBone.disks[8].setDescription("text");
		backBone.disks[8].setCoverImage("url");
		backBone.disks[8].setPicture("url");

		backBone.disks[9].setBoxSide("left");
		backBone.disks[9].setBoxPositionX(19);
		backBone.disks[9].setCoverExtension(490);
		backBone.disks[9].setDescription("text");
		backBone.disks[9].setCoverImage("--");
		backBone.disks[9].setPicture("--");

		backBone.disks[10].setBoxSide("right");
		backBone.disks[10].setBoxPositionX(270);
		backBone.disks[10].setCoverExtension(250);
		backBone.disks[10].setDescription("text");
		backBone.disks[10].setCoverImage("--");
		backBone.disks[10].setPicture("--");


		backBone.disks[11].setBoxSide("left");
		backBone.disks[11].setBoxPositionX(19);
		backBone.disks[11].setCoverExtension(490);
		backBone.disks[11].setDescription("text"); 
		backBone.disks[11].setCoverImage("--");
		backBone.disks[11].setPicture("--");

		backBone.disks[12].setBoxSide("right");
		backBone.disks[12].setBoxPositionX(270);
		backBone.disks[12].setCoverExtension(250);
		backBone.disks[12].setDescription("text"); 
		backBone.disks[12].setCoverImage("--");
		backBone.disks[12].setPicture("--");

		backBone.disks[13].setBoxSide("left");
		backBone.disks[13].setBoxPositionX(19);
		backBone.disks[13].setCoverExtension(490);
		backBone.disks[13].setDescription("text"); 
		backBone.disks[13].setCoverImage("--");
		backBone.disks[13].setPicture("--");

		backBone.disks[14].setBoxSide("right");
		backBone.disks[14].setBoxPositionX(270);
		backBone.disks[14].setCoverExtension(250);
		backBone.disks[14].setDescription("text"); 
		backBone.disks[14].setCoverImage("--");
		backBone.disks[14].setPicture("--");

		backBone.disks[15].setBoxSide("left");
		backBone.disks[15].setBoxPositionX(19);
		backBone.disks[15].setCoverExtension(490);
		backBone.disks[15].setDescription("text"); 
		backBone.disks[15].setCoverImage("--");
		backBone.disks[15].setPicture("--");


		backBone.disks[16].setBoxSide("right");
		backBone.disks[16].setBoxPositionX(270);
		backBone.disks[16].setCoverExtension(250);
		backBone.disks[16].setDescription("text"); 
		backBone.disks[16].setCoverImage("--");
		backBone.disks[16].setPicture("--");

		backBone.disks[17].setBoxSide("left");
		backBone.disks[17].setBoxPositionX(19);
		backBone.disks[17].setCoverExtension(490);
		backBone.disks[17].setDescription("text"); 
		backBone.disks[17].setCoverImage("--");
		backBone.disks[17].setPicture("--");

		backBone.disks[18].setBoxSide("right");
		backBone.disks[18].setBoxPositionX(270);
		backBone.disks[18].setCoverExtension(250);
		backBone.disks[18].setDescription("text"); 
		backBone.disks[18].setCoverImage("--");
		backBone.disks[18].setPicture("--");

		backBone.disks[19].setBoxSide("left");
		backBone.disks[19].setBoxPositionX(19);
		backBone.disks[19].setCoverExtension(490);
		backBone.disks[19].setDescription("text"); 
		backBone.disks[19].setCoverImage("--");
		backBone.disks[19].setPicture("--");

		backBone.disks[20].setBoxSide("right");
		backBone.disks[20].setBoxPositionX(270);
		backBone.disks[20].setCoverExtension(250);
		backBone.disks[20].setDescription("text"); 
		backBone.disks[20].setCoverImage("--");
		backBone.disks[20].setPicture("--");

		backBone.disks[21].setBoxSide("left");
		backBone.disks[21].setBoxPositionX(19);
		backBone.disks[21].setCoverExtension(490);
		backBone.disks[21].setDescription("text"); 
		backBone.disks[21].setCoverImage("--");
		backBone.disks[21].setPicture("--");

		backBone.disks[22].setBoxSide("right");
		backBone.disks[22].setBoxPositionX(270);
		backBone.disks[22].setCoverExtension(250);
		backBone.disks[22].setDescription("text"); 
		backBone.disks[22].setCoverImage("--");
		backBone.disks[22].setPicture("--");


		backBone.disks[23].setBoxSide("left");
		backBone.disks[23].setBoxPositionX(19);
		backBone.disks[23].setCoverExtension(490);
		backBone.disks[23].setDescription("text"); 
		backBone.disks[23].setCoverImage("--");
		backBone.disks[23].setPicture("--");

		backBone.disks[24].setBoxSide("right");
		backBone.disks[24].setBoxPositionX(270);
		backBone.disks[24].setCoverExtension(250);
		backBone.disks[24].setDescription("text"); 
		backBone.disks[24].setCoverImage("--");
		backBone.disks[24].setPicture("--");

		backBone.disks[25].setBoxSide("left");
		backBone.disks[25].setBoxPositionX(19);
		backBone.disks[25].setCoverExtension(490);
		backBone.disks[25].setDescription("text");
		backBone.disks[25].setCoverImage("--");
		backBone.disks[25].setPicture("--");

		backBone.disks[26].setBoxSide("right");
		backBone.disks[26].setBoxPositionX(270);
		backBone.disks[26].setCoverExtension(250);
		backBone.disks[26].setDescription("text");
		backBone.disks[26].setCoverImage("--");
		backBone.disks[26].setPicture("--");

		backBone.disks[27].setBoxSide("left");
		backBone.disks[27].setBoxPositionX(19);
		backBone.disks[27].setCoverExtension(490);
		backBone.disks[27].setDescription("text");
		backBone.disks[27].setCoverImage("--");
		backBone.disks[27].setPicture("--");

		backBone.disks[28].setBoxSide("right");
		backBone.disks[28].setBoxPositionX(270);
		backBone.disks[28].setCoverExtension(250);
		backBone.disks[28].setDescription("text");
		backBone.disks[28].setCoverImage("url");
		backBone.disks[28].setPicture("url");

	};

	p5.draw = function () {
		p5.background(255);
		p5.imageMode(p5.CORNER);
		p5.image(bkgnImage, -313, -80);
		backBone.show();
	};

	p5.mouseClicked = function () {
		backBone.disksClicked();
	};
};