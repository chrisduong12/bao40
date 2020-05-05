function addSlider(id, min, max, name, step) {
    // create a new div element 
    let newDiv = document.createElement("div");
    // and give it some content 
    let slider = document.createElement("INPUT");
    slider.setAttribute("type", "range");
    slider.setAttribute("id", id);
    slider.setAttribute("min", min);
    slider.setAttribute("max", max);
    slider.setAttribute("name", name);
    slider.setAttribute("step", step);
    // add the text node to the newly created div
    newDiv.appendChild(slider);
    // label
    let label = document.createElement("LABEL");
    label.setAttribute("for", name);
    label.textContent = name;
    newDiv.appendChild(label);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.querySelector(".paralaxContainer");
    document.body.insertBefore(newDiv, currentDiv);
    return newDiv;
}

let perspectiveSLD = addSlider('perspective', 0, 2000, "perspective", 1);
let bkgndScale = addSlider('scaleImage1', 0, 2, "Scale Bckgnd", 0.1);
let bkgndDepth = addSlider('depthImage1', -1200, 0, "Depth Bckgnd", 1);
let frgndScale = addSlider('scaleImage2', 0, 2, "Scale Frgrnd", 0.1);
let frgndDepth = addSlider('depthImage2', -1200, 0, "Depth Frgrnd", 1);

let currentBkgndScale = bkgndScale.children[0].value;
let currentBkgndDepth = -900;
let currentFrgndScale = frgndScale.children[0].value;
let currentFrgndDepth = -200;

perspectiveSLD.children[0].onchange = changePerspective;
bkgndScale.children[0].onchange = changeBkgnd;
bkgndDepth.children[0].onchange = changeBkgnd;
frgndScale.children[0].onchange = changeFrgnd;
frgndDepth.children[0].onchange = changeFrgnd;

function changePerspective() {
    let element = document.querySelector(".paralaxContainer");
    element.style.perspective = perspectiveSLD.children[0].value + "px";
    perspectiveSLD.children[1].textContent = perspectiveSLD.children[0].name + "  " + perspectiveSLD.children[0].value;
}


function changeBkgnd() {
    currentBkgndScale = bkgndScale.children[0].value;
    currentBkgndDepth = bkgndDepth.children[0].value;
    let element = document.getElementById("layer-1");
    element.style.transform = "translate3d(0px, 0px," + currentBkgndDepth + "px) scale(" + currentBkgndScale + "," + currentBkgndScale + ")";
    bkgndScale.children[1].textContent = bkgndScale.children[0].name + "  " + currentBkgndScale;
    bkgndDepth.children[1].textContent = bkgndDepth.children[0].name + "  " + currentBkgndDepth;
}

function changeFrgnd() {
    currentFrgndScale = frgndScale.children[0].value;
    currentFrgndDepth = frgndDepth.children[0].value;
    let element = document.getElementById("layer-2");
    element.style.transform = "translate3d(0px, 0px," + currentFrgndDepth + "px) scale(" + currentFrgndScale + "," + currentFrgndScale + ")";
    frgndScale.children[1].textContent = frgndScale.children[0].name + "  " + currentFrgndScale;
    frgndDepth.children[1].textContent = frgndDepth.children[0].name + "  " + currentFrgndDepth;
}