var p5SketchA = function(p5) {

    var diskGUI;
    var studentNames = [
        ["Madeline Castillo", "https://macstll.github.io/ARTD-418/", "Madeline Castillo", "Image"],
        ["Abrielle Bujack", "https://abriellejean.github.io/ARTD418/", "Abrielle Bujack", "Image"],
        ["Hayley Peterson", "https://heptrsn2.github.io/ARTD418/", "Hayley Peterson", "Image"],
        ["Johana Byrne", "https://jbyrne8.github.io/artd-418-digi-inti/", "Johana Byrne", "Image"],
        ["Morgan Dunn", "https://mcdunn2.github.io/ARTD418/", "Morgan Dunn", "Image"],
        ["Lena Carey", "https://lenamc2.github.io/repository1/", "Lena Carey", "Image"],
        ["Charlotte Yang", "https://charlotteyang418.github.io/artd418/", "Charlotte Yang", "Image"],
        ["Natalie Torres", "https://natalie98x.github.io/ARTD418/", "Natalie Torres", "Image"],
        ["Tessa Cohen", "https://tessacohen.github.io/tessacohen/ ", "Tessa Cohen", "Image"],
    ];

    p5.setup = function() {
        p5.createCanvas(400, 900);

        diskGUI = new DiskArray(this, p5.createVector(10, 50), studentNames.length, 20);
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