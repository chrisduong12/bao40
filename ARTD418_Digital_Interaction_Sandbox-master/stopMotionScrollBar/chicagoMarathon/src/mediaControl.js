// **** IMAGE SEQUENCES ******

let optionsImageSequence_1 = {
    // set the url to your images
    url: "./img/color",
    // set the file prefix
    filePrefix: "marathon_",
    // set the file format
    fileFormat: "jpg",
    // set the <img> tag id
    tagID: "animation1",
    // This is the image sequence start
    startIndex: 0,
    // The total number of images in the sequence
    amount: 224,
    // Set the coordinates where you want to reproduce the image sequence
    startRollingAt: 12,
    finishRollingAt: 255,
    // CSS position
    cssPosition: "fixed"
}

// Use the options to create a new sequence
let marathon_1 = new ImageSequence(optionsImageSequence_1);

// Add your animation to the main sequences
mainSequences.push(marathon_1);


// ***** SECOND IMAGE SEQUENCE *****

let optionsImageSequence_2 = {
    url: "./img/bw",
    filePrefix: "marathon_",
    fileFormat: "jpg",
    tagID: "animation2",
    startIndex: 0,
    amount: 224,
    startRollingAt: 250,
    finishRollingAt: 735,
    cssPosition: "relative"
}

// Use the options to create a new sequence
let marathon_2 = new ImageSequence(optionsImageSequence_2);

// Add your animation to the main sequences
mainSequences.push(marathon_2);