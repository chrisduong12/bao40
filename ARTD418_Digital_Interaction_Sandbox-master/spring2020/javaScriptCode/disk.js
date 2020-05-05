class Disk {

    constructor(p5, pos, diam, id) {
        this.p5 = p5;

        this.pos = pos;

        this.diam = diam;

        this.scale = 1;

        this.id = id;

        this.name;

        this.url;

        this.pName;

        this.description;

        this.clicked = false;
    }

    setName(name) {
        this.name = name;
    }

    setURL(url) {
        this.url = url;
    }

    setProjectName(pName) {
        this.pName = pName;
    }

    setDescription(description) {
        this.description = description;
    }

    resize() {

        let minProximity = this.diam * 4;

        let mouseProximity = this.mouseProximity();

        if (mouseProximity < minProximity) {

            this.scale = this.p5.map(mouseProximity, 0, minProximity, 2, 1);

            return true;

        } else {

            if (this.scale > 1) {

                this.scale -= 0.1;
            }

            return false;

        }
    }

    mouseProximity() {

        let mousePosition = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);

        return this.p5.dist(this.pos.x, this.pos.y, mousePosition.x, mousePosition.y);

    }

    mouseVerticalProximity() {

        return this.p5.dist(this.pos.x, this.pos.y, this.pos.x, this.p5.mouseY);

    }

    getProximityTo(otherElement) {

        let centerDistance = this.p5.dist(this.pos.x, this.pos.y, otherElement.pos.x, otherElement.pos.y);

        let currentGap = centerDistance - ((otherElement.diam / 2 * otherElement.scale) + (this.diam / 2 * this.scale));

        return currentGap;
    }

    relocate(diskBehind, diskAhead, desiredGap) {

        // if the current gap from the disk behind is less than the desired gap, move forwards
        if (diskBehind != undefined) {

            let gapBehind = this.getProximityTo(diskBehind);

            if (gapBehind < desiredGap + 1.5) {

                diskBehind.pos.y--;

            }

            if (gapBehind > desiredGap - 5) {

                diskBehind.pos.y++;

            }
        }
        // if the current gap from the disk ahead is less than the desired gap, move backwards
        if (diskAhead != undefined) {

            let gapAhead = this.getProximityTo(diskAhead)

            if (gapAhead < desiredGap + 1.5) {

                diskAhead.pos.y += 5;

            }

            if (gapAhead > desiredGap - 5) {

                diskAhead.pos.y -= 5;

            }
        }
    }

    myClicked() {
        if (this.mouseProximity() < 100) {
            if (this.mouseVerticalProximity() < 32) {
                this.clicked = true;
            }
        }
    }

    relocateAndResize(diskBehind, diskAhead, desiredGap) {

        // resize
        this.resize();

        // relocate
        this.relocate(diskBehind, diskAhead, desiredGap);

    }

    show() {

        // draw
        //this.p5.ellipse(this.pos.x, this.pos.y, this.diam * this.scale);

        //this.p5.line(this.pos.x, this.pos.y, this.pos.x * this.scale, this.pos.y);

        this.p5.textSize(14 * this.scale);

        if (this.pName != undefined) {
            this.p5.fill(230);
            this.p5.text(this.pName, this.pos.x, this.pos.y);
            if (this.mouseProximity() < 100) {
                this.p5.fill(0, 100 - this.mouseProximity() * 2);

                this.textBox(this.pos.x, this.pos.y + 6, 150, 100);

            }
        }
    }

    textBox(pX, pY, w, h) {

        this.p5.fill(20, 220 - this.mouseVerticalProximity() * 4);

        this.p5.cursor('pointer');

        if (this.mouseVerticalProximity() < 32) {

            if (this.clicked) {
                window.open(this.url, '_blank');
                this.clicked = false;
            }


            // description text
            this.p5.noStroke();
            this.p5.rect(pX + 10, pY, w * this.scale, h * this.scale);
            this.p5.fill(156, 242, 70);
            this.p5.textSize(6 * this.scale);
            this.p5.text(this.url, pX + 15, pY + 45);
            this.p5.fill(250);
            this.p5.text(this.description, pX + 15, pY + 60);

        }
        this.p5.textSize(8 * this.scale);
        this.p5.fill(156, 242, 70);
        this.p5.text(this.name, pX + 15, pY + 20);

    }

}