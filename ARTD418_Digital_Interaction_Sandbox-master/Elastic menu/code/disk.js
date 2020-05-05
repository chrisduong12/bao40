class Disk {

	constructor(p5, pos, diam, id){
		this.p5 =p5;

		this.pos = pos;

		this.boxPos = p5.createVector(0, 0);

		this.coverPos = p5.createVector(0, 0);

		this.diam = diam;

		this.scale = 1;

		this.id = id;

		this.date;

		this.url;

		this.album;

		this.description;

		this.clicked = false;

		this.boxSide = "right";

		this.coverSide = "left";

		this.coverExtension = 100;

		this.coverSize = 100;
		
		this.coverImage;
		
		this.picture;
		
		this.pictureSize = 0;
	}

	setCoverImage(imageLink){
		this.coverImage = this.p5.loadImage(imageLink);
	}
	
	setPicture(imageLink){
		this.picture = this.p5.loadImage(imageLink);
	}

	setBoxSide(side){
		this.boxSide = side;
	}

	setCoverSize(value){
		this.coverSize = value;
	}

	setDate (date){
		this.date = date;
	}


	setURL(url){
		this.url = url;
	}

	setAlbum(album){
		this.album = album;
	}

	setDescription(description){
		this.description = description;
	}

	setBoxPositionX(x){
		this.boxPos.x = x;
	}

	setBoxPositionY(y){
		this.boxPos.y = y;
	}

	setBoxPosition(x,y){
		this.boxPos.x = x;
		this.boxPos.y = y;
	}

	setCoverPositionX(x){
		this.coverPos.x = x;
	}

	setCoverPositionY(y){
		this.coverPos.y = y;
	}

	setCoverPosition(x,y){
		this.coverPos.x = x;
		this.coverPos.y = y;
	}

	setCoverExtension(value){
		this.coverExtension = value;
	}

	switchSide(){
		if (this.boxSide == "right"){
			this.coverSide = "left";
		}

		if (this.boxSide == "left"){
			this.coverSide = "right";
		}
	}

	resize(){

		let minProximity = this.diam * 4;
		
		let mouseProximity = this.mouseProximity();
		
		if (mouseProximity < minProximity){
		
			this.scale = this.p5.map(mouseProximity, 0, minProximity, 2, 1);

			return true;

		} else {

			if (this.scale > 1){

				this.scale -=0.1;
			}
			
			return false;

		}
	}

	mouseProximity(){

		let mousePosition = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);

		return this.p5.dist(this.pos.x, this.pos.y, mousePosition.x, mousePosition.y);

	}

	mouseVerticalProximity(){

		return this.p5.dist(this.pos.x, this.pos.y, this.pos.x, this.p5.mouseY);

	}

	getProximityTo(otherElement){

		let centerDistance = this.p5.dist(this.pos.x, this.pos.y, otherElement.pos.x, otherElement.pos.y);

		let currentGap = centerDistance - ((otherElement.diam/2 * otherElement.scale) + (this.diam/2 * this.scale));
		
		return currentGap;
	}

	relocate(diskBehind, diskAhead, desiredGap){

		// if the current gap from the disk behind is less than the desired gap, move forwards
		if (diskBehind != undefined){
			
			let gapBehind = this.getProximityTo(diskBehind);

			if (gapBehind < desiredGap + 1.5){
			
				diskBehind.pos.y --;
			
			} 

			if (gapBehind > desiredGap - 5){
			
				diskBehind.pos.y ++;
			
			} 
		}
		// if the current gap from the disk ahead is less than the desired gap, move backwards
		if (diskAhead != undefined){

			let gapAhead = this.getProximityTo(diskAhead)

			if (gapAhead < desiredGap + 1.5){

				diskAhead.pos.y +=5;

			} 

			if (gapAhead > desiredGap - 5){

				diskAhead.pos.y -=5;

			} 
		}
	}

	myClicked(){
		if (this.mouseProximity() < 100){
			if (this.mouseVerticalProximity() < 32){
				this.clicked = true;
			} 
		}
	}

	relocateAndResize(diskBehind, diskAhead, desiredGap){

		// resize
		this.resize();

		// relocate
		this.relocate(diskBehind, diskAhead, desiredGap);

	}

	show(){

		// draw
		//this.p5.ellipse(this.pos.x, this.pos.y, this.diam * this.scale);

		//this.p5.line(this.pos.x, this.pos.y, this.pos.x * this.scale, this.pos.y);

		this.p5.textSize(12 * this.scale);

		if (this.album != undefined){
			this.p5.fill(153,158,130,); // between 0 - 255 RGB color
			this.p5.noStroke();
			this.p5.ellipse(this.pos.x, this.pos.y, 8 ,8 );
			//this.p5.text(this.album, this.pos.x, this.pos.y);
			
			if (this.mouseProximity() < 100){

				this.p5.fill(0, 100 - this.mouseProximity()*2);
				
				this.p5.imageMode(this.p5.CENTER);

				this.textBox(150, 100, this.boxSide);

				this.switchSide();

				this.cover(this.coverSide);

			}
		}
	}

	cover(side){

		let xCoord ;
		let yCoord = this.pos.y + this.coverPos.y; //+ Math.abs(this.coverSize) ;
		let padding;
		let datePadding ;

		if (side == "right"){

			xCoord = this.pos.x + this.coverPos.x + this.coverExtension;

			padding = 4;

			datePadding = 10;
			
		} else if (side == "left"){

			xCoord = this.pos.x - (this.coverPos.x + this.coverExtension);

			this.coverSize = - this.coverSize;

			padding = (this.coverSize + 5) * this.scale;

			datePadding = - 20 * this.scale;
		}

		if (this.mouseVerticalProximity() < 32){

			if (this.clicked){

				this.p5.fill(200, 30, 30, 20);

				this.p5.ellipse(xCoord , yCoord, this.coverSize * this.scale, this.coverSize * this.scale );
				
				this.p5.stroke(200, 30, 30, 80);
				
				this.p5.line(this.pos.x, this.pos.y, xCoord , this.pos.y);
				
				this.p5.image(this.coverImage, xCoord , yCoord, this.coverSize * this.scale, this.coverSize * this.scale);
				
				this.p5.noStroke();

			}
		}else {
				this.clicked = false;
			}

	}

	textBox(w , h, side){

		this.p5.textAlign(p5.LEFT);

			let xCoord ;
		    let xCoordImage;
			let yCoord = this.pos.y + this.boxPos.y + 10;
			let padding;
			let datePadding ;

		if (side == "right"){

			xCoord = this.pos.x + this.boxPos.x/2;
			
			xCoordImage = xCoord + (this.pictureSize * this.scale)/2;

			padding = 5;

			datePadding = 13;
			
		} else if (side == "left"){

			xCoord = this.pos.x - this.boxPos.x - 30;
			
			xCoordImage = xCoord - (this.pictureSize * this.scale)/2;

			w = -w;

			padding = (w + 5) * this.scale;

			datePadding = - 30 * this.scale;
		}

		this.p5.fill(150 , 10 ); // rgb values + transparency

		if (this.mouseVerticalProximity() < 32){

			if (this.clicked){
				//window.open(this.url,'_blank');

					// description text
				this.p5.noStroke();	
				
				//this.p5.rect(xCoord , yCoord - 20, w * this.scale, h * this.scale );
				//this.p5.rect(this.pos.x + 10, this.pos.y , w * this.scale, h * this.scale );

				this.p5.fill(33,34,34); // album title color

				this.p5.textSize(6 * this.scale);
				
				this.p5.text(this.album, xCoord + padding , yCoord );
				
				this.p5.image(this.picture, xCoordImage, yCoord + 360, this.pictureSize * this.scale, (this.pictureSize*1.4) * this.scale);
				
				this.p5.fill(150); // grey
				
				this.p5.text(this.description, xCoord + padding , 20 + ((this.pictureSize*1.4) * this.scale + 25)+this.pos.y, 300, 500);

				//this.clicked = false;
			}

		}
		this.p5.textSize(6 * this.scale);
		this.p5.fill(253,158,130); //date color
		this.p5.text(this.date, this.pos.x + datePadding  , yCoord );

	}

}