
var p5SketchB = function (p5){
	console.log("B")

	var diskGUI;
	var studentNames = [["Amelia & Anna", "http://storytellers.fun", "Extraordinary Unknown Woman", "Extraordinary Unknown Woman is just what it \nsounds like, a collection of incredible stories by \neveryday women. This website looks at 12 women \nwho made extraordinary contributions to history \nand the world. We encourage readers to absorb and \nshare all of their brave and courageous acts."],
						["Andrew & Donna", "http://www.oddbird.website", "Bulgaria", "A non-linear narrative of a trip through Bulgaria \nbetween a native and a first timer. "],
						["Chyanne, Cynthia & Annie","http://annyli.life/", "Happy Birthday", "A fun story of cake making from ingredients \nthemselves: Egg, Sugar, Butter, Banana, and Flour. \nEach ingredient is a character. The website is a \nscrolled-based stop motion animation that takes the \naudience on a journey of how they celebrate their \nfriend's birthday by making a banana cake!"],
						["Emmesi & Taylor","http://www.taylorchism.com", "Snap Life", "This project currently consists of a group of individuals \nwho took on the project as a way to reflect on their \nlives and tell their story through their daily videos. \nThe Snap Life project is a way to show life's \nprogression through the perspective of many \nindividuals."],
						["Eric","http://www.erikiri.online", "A Cup of Green Tea", "A website featuring green tea, its features, and a \npersonal story about it. Blending photography with \nanimated drawings, the site is meant to inform while \nalso being visually appealing."],
						["Justin, Kayle & Becca","http://jandkandbdesign.com", "Four Seassons", "We incorporated stop motion pictures along with \naudio tracks to reflect each of the four seasons.  \nOn the journey through the seasons, you will \nnotice a behavior or motion that a person typically \nentails during that time period."],
						["Sophia & Jessica", "http://sophiamendicinome.fatcow.com/website/index.html", "That's All", "Using That's All by Genesis, and pairing it with an \noriginal music video. Created using authentic raw \nfootage, layered with motion graphic illustrations. \nBased on inspiration from other popular music videos \nwhich bring the real and illustrated world into a single \nspace."],
						["Sydney","missing", "Project Name", "Description"],
						["Tia & Gabriele","http://www.smallwizard.zone/", "Vampire Rules", "Vampire Rules was created by taking the audio-only \nexperience of a podcast and adding animated \nimages + transcribed text to create a more immersive \nand accessible narrative. Vampire Rules is an episode \nof a podcast by Gimlet Media's Reply All that unravels \nthe mystery of strange photograph."],
						["Yewon, Edgar & Bryan","http://www.digitalnarrative.info", "Shape of You", "Taking Ed Sheeran's song Shape of You and turning it \ninto an animated and interactive website that takes \nyou through the story of the song. We have visualized \nthe lyrics of the song and created multiple scenes that \nthe viewer will scroll through in order to experience \nthe story at their own pace."]];

	p5.setup = function(){
		p5.createCanvas(400,800);

		diskGUI = new DiskArray (this, p5.createVector(10,50), studentNames.length, 20)
		diskGUI.setNamesAndURL(studentNames);

	}

	p5.draw = function(){
		p5.background(255);
		diskGUI.show();
	}

	p5.mouseClicked = function(){
		diskGUI.disksClicked();
	}
}