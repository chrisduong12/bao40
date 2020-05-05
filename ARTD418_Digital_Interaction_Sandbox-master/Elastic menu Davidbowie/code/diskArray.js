class DiskArray{

	constructor(p5, pos, n, gap){
		this.p5 =p5;
		this.pos = pos;
		this.quantity = n;
		this.gap = gap;
		this.disks = []
			for (let i=0; i < this.quantity; i++){
				let tmp = new Disk(p5, p5.createVector(pos.x, pos.y), 30, i);
				this.disks.push(tmp);
			}
	}

	show(){

		// relocate and resize
		for(let i = 0; i < this.disks.length; i++){
			this.disks[i].relocateAndResize(this.disks[i-1], this.disks[i+1], this.gap);
		}
		
		// display
		for (var i = this.disks.length - 1; i >= 0; i--) {
			this.disks[i].show();
		}


	}

	setNamesAndURL(names){
		for(let i=0; i<names.length; i++){
			this.disks[i].setDate(names[i][0]);
			this.disks[i].setURL(names[i][1]);
			this.disks[i].setAlbum(names[i][2]);
			this.disks[i].setDescription(names[i][3]);
		}
	}

	disksClicked(){
		for(let i = 0; i < this.disks.length; i++){
			this.disks[i].myClicked();
		}
	}
}