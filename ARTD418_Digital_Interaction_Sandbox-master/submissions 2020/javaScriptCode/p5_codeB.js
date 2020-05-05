var p5SketchB = function(p5) {
    console.log("B")

    var diskGUI;
    var studentNames = [
        ["Brian Zolnierczyk", "https://brianzol.github.io/brian_repository/", "Brian Zolnierczyk", "Image"],
        ["Benjamin Tschetter", "https://bentschetter.github.io/bens-laptop/", "Benjamin Tschetter", "Image"],
        ["Christopher Duong", "https://chrisduong12.github.io/bao40/", "Christopher Duong", "Image"],
        ["Michael Ruth", "https://mruth202.github.io/", "Michael Ruth", "Image"],
        ["Kim Nahee", "https://nh1998.github.io/Nahee/", "Kim Nahee", "Image"],
        ["Kobi Naujokas", "https://knaujokas.github.io/Kobi-Repository/", "Kobi Naujokas", "Image"],
        ["McKenzie Zarn", "https://mckenziesz.github.io/KENZ_418/", "McKenzie Zarn", "Image"],
        ["Olivia Pope", "https://oliviamgpope.github.io/oliviamgpope/", "Olivia Pope", "Image"],
        ["Faithful Oladeji", "https://foladeji.github.io/Faithful/", "Faithful Oladeji", "Image"]
    ];

    p5.setup = function() {
        p5.createCanvas(400, 800);

        diskGUI = new DiskArray(this, p5.createVector(10, 50), studentNames.length, 20)
        diskGUI.setNamesAndURL(studentNames);

    }

    p5.draw = function() {
        p5.clear();
        diskGUI.show();
    }

    p5.mouseClicked = function() {
        diskGUI.disksClicked();
    }
}