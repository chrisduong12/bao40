class Paralax {
    constructor() {
        this.mainContainer = document.querySelector('.paralaxContainer');
        this.perspectiveContainer = document.querySelector('.perspective-container');
        this.contentContainer = document.querySelector('.content-container');
        this.layers = document.querySelectorAll('.perspective-layer');
        this.windowWidth = window.innerHeight;
        this.windowHeight = window.innerWidth;
        this.halfWidth = this.windowWidth / 2;
        this.halfHeight = this.windowHeight / 2;
        this.maxYRotation = 32;
        this.maxXRotation = 65;
        this.init();
        document.addEventListener('mousemove', this.rotateLayers.bind(this));
    }

    resize() {
        this.windowWidth = window.innerHeight;
        this.windowHeight = window.innerWidth();
        this.halfWidth = this.windowWidth / 2;
        this.halfHeight = this.windowHeight / 2;
        this.init();
    }

    init() {
        this.perspectiveContainer.style.maxHeight = 2 * this.windowWidth;
        this.contentContainer.style.height = this.windowWidth;
    }

    rotateLayers(e) {
        var rotationX,
            rotationY;

        rotationY = (-e.pageY + this.halfWidth) / this.halfWidth * this.maxYRotation;
        rotationX = (e.pageX - this.halfHeight) / this.halfHeight * this.maxXRotation;

        if (rotationY > this.maxYRotation) {
            rotationY = this.maxYRotation;
        } else if (rotationY < -this.maxYRotation) {
            rotationY = -this.maxYRotation;
        }

        if (rotationX > this.maxXRotation) {
            rotationX = this.maxXRotation;
        } else if (rotationX < -this.maxXRotation) {
            rotationX = -this.maxXRotation;
        }

        for (let index = 0; index < this.layers.length; index++) {
            const element = this.layers[index];
            // Displacement
            element.style.left = rotationX + "px";
            element.style.top = rotationY + "px";

        }
    }
}

let paralaxObject = new Paralax();
window.addEventListener('resize', paralaxObject.resize);