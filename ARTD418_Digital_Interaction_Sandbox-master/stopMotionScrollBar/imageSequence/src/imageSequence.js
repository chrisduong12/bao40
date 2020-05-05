/** SETTINGS VARIABLES **/

class ImageSequence {
    constructor(options) {
        // set the url to your images
        this.url = options.url;
        this.filePrefix = options.filePrefix;
        this.fileFormat = options.fileFormat;
        this.tagID = options.tagID;
        // Indexes of image sequence. This is how your files are numbered
        this.startIndex = options.startIndex;
        this.amount = options.amount;
        // Set the coordinates where you want to reproduce the image sequence
        this.startRollingAt = options.startRollingAt;
        this.finishRollingAt = options.finishRollingAt;
        /** Note: there is a speed factor calculated as the ratio:  
         * (finisAt - startRollingAt) / amount. If greater than 1 the reproduction
         * speeds up and vice-versa
         */
        this.relativeTo = options.relativeTo ? options.relativeTo : "wheel";

        /** OTHER VARIABLES **/
        // the preloaded images
        this.preloadedImg = [];
        this.loadImages();

        // retrieve visible element serving as placeholder
        this.visibleElement = document.getElementById(this.tagID);

        // get first image in sequence
        this.currentImage = this.preloadedImg[0];

        // set current image
        this.visibleElement.src = this.currentImage.src;

        // Sequence Completed
        this.seqCompleted = false;

        // position style
        this.visibleElement.style.position = options.cssPosition;
    }

    /*** FUNCTIONS ***/
    /**
     * Get the path to the file numbered with the index in the sequence
     * @param {Number} index 
     */
    getPath(index) {
        return this.url.concat('/').concat(this.filePrefix).concat(index).concat('.').concat(this.fileFormat);
    }

    /**
     * Sets a new image in the visual element 
     */
    activate() {
        this.currentImage = this.preloadedImg[this.scrollConverter()];
        if (this.currentImage) {
            this.visibleElement.hidden = false;
            this.visibleElement.src = this.currentImage.src;
        }
        if (this.seqCompleted) {
            this.visibleElement.style.opacity = "30%";
        } else {
            this.visibleElement.style.opacity = "100%";
        }
    }

    /**
     * This function sets the scroll positions on absolte values of window.pageYOffset;
     */
    scrollConverterAbsolute() {
        let nFrames = this.amount - this.startIndex - 1;
        let totalHeight = document.body.clientHeight - window.innerHeight;
        return Math.floor(((scrollCount / totalHeight) * nFrames));
    }

    /*
    This function sets the scroll positions relative to the start and finish rolling settings
    */
    scrollConverter() {
        let speedFactor = this.amount / (this.finishRollingAt - this.startRollingAt);
        this.seqCompleted = false;
        if (this.relativeTo == "window" || this.relativeTo == "Window") {
            if (scrollPosition >= this.startRollingAt && scrollPosition < this.finishRollingAt) {
                return Math.floor((scrollCount - this.startRollingAt) * speedFactor);
            } else if (scrollCount < this.startRollingAt) {
                return 0;
            } else {
                this.seqCompleted = true;
                return this.amount - 1;
            }
        } else if (this.relativeTo == "wheel" || this.relativeTo == "Wheel") {
            if (scrollCount >= this.startRollingAt && scrollCount < this.finishRollingAt) {
                return Math.floor((scrollCount - this.startRollingAt) * speedFactor);
            } else if (scrollCount < this.startRollingAt) {
                return 0;
            } else {
                this.seqCompleted = true;
                return this.amount - 1;
            }
        }
    }


    /** Retrive the image files */
    loadImages() {
        let count = 0
        for (var i = this.startIndex; i < this.amount; i++) {
            var tempImg = new Image();
            if (i < 10) {
                tempImg.src = this.getPath("0" + i);
            } else {
                tempImg.src = this.getPath(i);
            }
            this.preloadedImg.push(tempImg);
            count++;
        }
        console.log("loaded " + count + " images with prefix " + this.filePrefix);
    }
}