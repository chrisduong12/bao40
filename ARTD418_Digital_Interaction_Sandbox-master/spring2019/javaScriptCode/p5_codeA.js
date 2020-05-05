
var p5SketchA = function (p5){

	var diskGUI;
	var studentNames = [["Alissa,Charlote & Grace", "http://artd418give.name", "The giving tree", "Retelling the heart-warming story of The Giving Tree \nthrough digital illustration and watercolor. The story \nrecounts the relationship between a selfless \ntree and self-serving boy. The story teaches the \nimportant lessons of giving selflessly, remaining \ngrateful, and recognizing love."],
						["Brandon", "http://bholt.me/ARTD418/", "South side", "description"],
						["Emmaline","http://emmalineloren.com", "The ABCs of Monsters", " An alphabetical website with monsters, creatures, \nand urban legends from across the world, illustrated \nin whimsical pastels."],
						["Estefania","https://www.smartartifact.com/artd418/bowie/", "David Bowie", "description"],
						["Felicia","http://www.artsyfe.website/army/Index.html", "Felicia's", "Fiction story detailing the day a traumatic accident \noccurred on Forward Operating Base. Staring \ncommander in Chief, Arnold Phillips, the story will \nbe explained from his perspective"],
						["Alexis & Leah","https://smartartifact.com/artd418/hiphopfashion/hiphopfashion_v2.html", "Fashion & Hip-hop", "Hip hop has gone through some changes as a popular \nculture, and fashion is one of those huge contributing \nfactors to its popularity. Hip hop’s evolving relationship \nwith the world of fashion is hard to ignore."],
						["Jenna","http://www.jnnowak2.com/ARTD418/", "Artist's block", "Artist's Block is a collection of short descriptions \nfrom artists about the ways they choose to relieve \nstress during their practice. The interviews are \naccompanied by small animations and visuals to \nfurther immerse the user in the experience."],
						["Jianni & Yu","http://jiannih2.me/artd418/", "Faker", "“FAKER” is the game ID of Lee Sang-Hyeok used \nin the game league of legend. \nHe is an excellent mid-lane player in the game, and \nin our website, we introduced about the his life \nexperience, and the rewards he won in this game. \nWe also added the video of his game performance \nand his live channel."],
						["Kennan","http://emkayultra.com", "Project MK ULtra", "Discover Project MK Ultra via a general timeline \nwith psychedelic animations and interactive elements."],
						["Michela & Andrea","http://andreaworthington.me/dreams/", "Dream World", "The Dream World is a collection of people's dream \nthat come to life in a storybook fashion. Explore the \nsite and experience some crazy dreams."],
						["Nicole","http://nicoledowling418.com", "Regina Jones", "An animated commemoration of the life, death, and \nlegacy of the world’s first female rabbi."],
						["Sueun","http://sueunchoi.me", "Story of Jobs", "Story of Jobs is describing the brief story of how he \ngot to develop iphone and description of each iphone."],
						["Silvia & Merrita","http://artd418sylviamerryta.com", "The culture of Food", "The story for “The Culture of Food” is essentially \ntelling the story of two immigrants, one from China \nand one from Taiwan, and the history of their \nchildhood in relation to food. From there, they \ncompare how Americanized Chinese food to actual \nChinese food from China. The story shows how much \nof an impact food has in our lives and how closely it \nties with culture and upbringing."]];

	p5.setup = function(){
		p5.createCanvas(400,900);

		diskGUI = new DiskArray (this, p5.createVector(10,50), studentNames.length, 20);
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