class Wall {

	constructor(p5, x, y, w, h) {
		this.posx = x;
		this.posy = y;
		this.w = w;
		this.h = h;
		this.myImageContainers = [];
		this.p5 = p5;
		this.speeedFactor = p5.random(2, 6);
		this.showWallFrame = true;
		this.displacement = "relative";
		this.currentMouseX = 0;
		this.wallFont;
	}

	relativeDisplace(radius) {

		// Estimate displacement from the center of teh canvas

		let distToCenter = this.p5.dist(this.p5.mouseX, this.p5.mouseY, this.p5.width / 2, this.p5.height / 2)

		if (distToCenter > radius) {

			let dispX = (this.p5.width / 2 - this.p5.mouseX) / (this.p5.width / 2);
			let dispY = (this.p5.height / 2 - this.p5.mouseY) / (this.p5.height / 2);



			// Horizontal relocation
			if (this.posx >= 0 && this.posx <= this.p5.width) { //
				this.posx += dispX * this.speeedFactor;
			}
			if (this.posx < 0) {
				this.posx = 0;
			}

			if (this.posx > this.p5.width) {
				this.posx = this.p5.width - 0;
			}


			// console.log(this.posy);
			// Vertical relocation
			let lowerBoundary = this.p5.height / 2;

			if (this.posy >= 0 && this.posy <= this.p5.height - lowerBoundary) { //
				this.posy += dispY * this.speeedFactor;
			}
			if (this.posy < 0) {
				this.posy = 0;
			}

			if (this.posy > this.p5.height - lowerBoundary) {
				this.posy = this.p5.height - lowerBoundary;
			}
		}
	}

	absoluteDisplace() {

		let disp = 0;
		let dampen = 50;

		if (!this.p5.mouseIsPressed) {
			this.currentMouseX = this.p5.mouseX;
		} else {
			disp = this.p5.mouseX - this.currentMouseX;
		}

		//console.log("wllX: " + this.posx+ "  mouseX: " +this.p5.mouseX + " disp:" + disp);

		this.posx = this.posx + (disp / dampen);

	}

	addImage(image) {

		this.myImageContainers.push(image);
	}

	setWallFont(fontURL) {
		this.wallFont = this.p5.loadFont(fontURL);
	}

	showWallBoudaries(bool) {
		this.showWallFrame = bool;
	}

	setDisplacementMode(mode) {
		this.displacement = mode;
	}

	show() {


		if (this.showWallFrame) {
			this.p5.rect(this.posx, this.posy, this.w, this.h);
		}

		if (this.displacement == "relative") {

			this.relativeDisplace(300);

		} else {

			this.absoluteDisplace();

		}

		//this.p5.line(this.posx , this.posy , this.posx + this.w, this.posy + this.h);

		//this.p5.noFill();

		//this.p5.rect(this.posx, this.posy, this.w, this.h);

		for (var i = 0; i < this.myImageContainers.length; i++) {

			this.myImageContainers[i].show(this.posx, this.posy);

		}


		// FONT USAGE
		// If there is a font loaded in this wall
		if (this.wallFont != undefined) {
			// set that font as the current font
			this.p5.textFont(this.wallFont);
		}

		// text color
		this.p5.fill(0);
		// text size
		this.p5.textSize(40);
		// text content and location on the wall
		this.p5.text("Testing font style here", this.posx + 150, this.posy - 220);

	}


	myMouseClicked() {
		console.log("wall clicked");
		let selectedContainer;

		//Selecting
		for (var i = 0; i < this.myImageContainers.length; i++) {
			if (this.myImageContainers[i].isMouseOver(this.posx, this.posy)) {
				this.myImageContainers[i].isSelected(true);
				selectedContainer = this.myImageContainers[i];
				console.log(selectedContainer.id);
			}
		}

		//Deselecting
		// but any other is false
		for (var j = 0; j < this.myImageContainers.length; j++) {

			if (selectedContainer == undefined) {
				// set all to true
				for (var h = 0; h < this.myImageContainers.length; h++) {
					this.myImageContainers[h].isSelected(true);
				}
			} else {
				if (selectedContainer.id != this.myImageContainers[j].id) {
					this.myImageContainers[j].isSelected(false);
				}
			}
		}

		for (var i = 0; i < this.myImageContainers.length; i++) {
			if (this.myImageContainers[i].isMouseOver(this.posx, this.posy)) {
				this.myImageContainers[i].isActivated(true);
			} else {
				this.myImageContainers[i].isActivated(false);
			}
		}
	}

}
