class Disk {

	constructor(p5, pos, diam, id){
		this.p5 =p5;

		this.pos = pos;

		this.diam = diam;

		this.scale = 1;

		this.id = id
	}

	resize(){
		let mousePosition = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);

		let minProximity = (this.diam) * 4;
		
		let mouseProximity = this.p5.dist(this.pos.x, this.pos.y, mousePosition.x, mousePosition.y)
		
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

	show(diskBehind, diskAhead, desiredGap){

		// resize
		this.resize();

		// relocate
		this.relocate(diskBehind, diskAhead, desiredGap);

		// draw
		//this.p5.ellipse(this.pos.x, this.pos.y, this.diam * this.scale);

		this.p5.line(this.pos.x, this.pos.y, this.pos.x + 100 * this.scale, this.pos.y);

		this.p5.textSize(12 * this.scale);

		this.p5.text(this.id, this.pos.x, this.pos.y);
	}

}