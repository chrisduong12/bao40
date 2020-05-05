class imageContainer{
	constructor(p5, image, id){
		this.p5 = p5;
		this.image = image;
		this.wdth = image.width;
		this.hght = image.height;
		this.id = id;
		this.pos = p5.createVector(0,0);
		this.speeedFactor = p5.random(2,6);
		this.selected = true;
		this.activated = false ;
		this.description = "my description";
		this.imgCFont;
	}

	setCurrentFont(fontURL){
		this.imgCFont = this.p5.loadFont(fontURL);
	}

	setDescription (text){
		this.description = text;
	}

	setPosition (pos){
		this.pos = pos;
	}

	setBox (wdth){
		let factor = wdth/this.wdth;
		this.wdth = wdth;
		this.hght = this.hght * factor;
	}

	switchSelected(){
		this.selected= !this.selected;
	}

	isSelected(bool){
		this.selected= bool;
	}

	isActivated(bool){
		this.activated= bool;
	}

	displace(){

		// Estimate displacement from the center of the canvas

	    let dispX = (this.p5.width/2 - this.p5.mouseX)/(this.p5.width/2);
	    let dispY = (this.p5.height/2 - this.p5.mouseY)/(this.p5.height/2);

	    // Horizontal relocation
		if (this.pos.x >= 0 && this.pos.x <= this.p5.width ){ //
			this.pos.x += dispX * this.speeedFactor;
		}
		if (this.pos.x < 10){
			this.pos.x = 10;
		}

		if (this.pos.x > this.p5.width-10){
			this.pos.x = this.p5.width-10;
		}

		// Vertical relocation

		if (this.pos.y >= 0 && this.pos.y <= this.p5.height ){ //
			this.pos.y += dispY * this.speeedFactor;
		}
		if (this.pos.y < 100){
			this.pos.y = 100;
		}

		if (this.pos.y > this.p5.height-100){
			this.pos.y = this.p5.height-100;
		}
  	}


	show(posX, posY){

		// FONT USAGE
		// If there is a font loaded in this image container
		if (this.imgCFont != undefined){
			// set that font as the current font
			this.p5.textFont(this.imgCFont);
		}

		if(this.selected){
			this.p5.noFill();
		} else {
			this.p5.fill(255,200);
		}

		this.p5.image(this.image, this.pos.x + posX, this.pos.y + posY, this.wdth, this.hght);

		this.p5.noStroke(0);

		this.p5.rect(this.pos.x + posX , this.pos.y + posY, this.wdth, this.hght);

		if (this.activated){
			this.p5.fill(0);
			/**** CHANE TEXT POSITION HERE */
			let txtX = this.pos.x + posX + 0;
			let txtY = this.pos.y + posY + this.hght + 20;
			this.p5.textSize(14);
			this.p5.text(this.description, txtX, txtY);
		}






	}

	isMouseOver(posX, posY){
		if (this.p5.mouseX > (this.pos.x+posX) && this.p5.mouseX < (this.pos.x +posX + this.wdth) && this.p5.mouseY > this.pos.y +posY && this.p5.mouseY < this.pos.y +posY + this.hght){
			return true;
		}else{
			return false;
		}
	}
}
