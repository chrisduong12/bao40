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
		for(let i = 0; i < this.disks.length; i++){
			this.disks[i].show(this.disks[i-1], this.disks[i+1], this.gap);
		}
	}
	
}