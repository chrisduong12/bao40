
// Get the modal
var modal ;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
}


/**
 * Define SVG path for target icon
 */
var targetSVG = "M162,125.2c-0.4-2-1.1-7,1.1-8c3.7-1.6,3.1,3.4,2.9,5.2 c-0.3,2.1-0.3,2.6,0.7,4.3c1.8,2.9,7.8,4.5,8.2,7.8c-3.7-0.1-5.8-2.1-8.7-3.7c-1.5,1.9,1.1,5.9,1.8,7.8c1,2.8,3.5,6.9,2.9,9.9 c-1,0.1-2.1,0-3.2,0.1c-0.5,3.6,1.3,7.9-0.8,11.2c-3.8-0.9-1.4-8.6-3.5-11.2c-2.6,2.4,0.3,9-1.5,12.4c-3.1-3.3-0.5-8.2-1-12.1 c-2.6-0.2-5.3,0.4-7.9,0.4c0.5-2.6,3.1-4.7,3.9-7.3c0.6-2,0-3.7,0.8-5.5c0.6-1.6,5.6-7.7,1.8-7.1c-2.7,0.4-4.3,5-7.2,5 c-0.5,0-3-1.7-3.1-2C148.8,129.6,157.4,127.5,162,125.2z";

/**
 * Create the map
 */
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "projection": "winkel3",
  "theme": "light",
  "imagesSettings": {
    "rollOverColor": "#089282",
    "rollOverScale": 3,
    "selectedScale": 3,
    "selectedColor": "#FF9282",
    "color": "#13564e"
  },

  "areasSettings": {
    "unlistedAreasColor": "#15A892",
    "outlineThickness": 0.7
  },

  "dataProvider": {
    "map": "worldLow",
    "images": [  {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Africa",
      "latitude": 20,
      "longitude": 20
    }, 
    {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "South America",
      "latitude": 0,
      "longitude": -76
    },
    {
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 0.5,
      "title": "Belly Button",
      "latitude": 0,
      "longitude": 0
    },]
  },
  "export": {
    "enabled": true
  }
} );

map.addListener("clickMapObject", function(event) {

    modal = document.getElementById('myModal');
    person = document.getElementById('person_Name');
    description = document.getElementById('person_Description');
    silhoutte = document.getElementById('Silouethe'); 

  if (event.mapObject.title == "Belly Button"){
    person.innerHTML = "Belly Button";
    description.innerHTML = "She is a bit lost";
    silhoutte.setAttribute("d", "M 1,3 A 2,2 0,0,1 5,3 A 2,2 0,0,1 9,3 Q 9,6 5,9 Q 1,6 1,3 z");
    modal.style.display = "block";
  }

  if (event.mapObject.title == "Africa"){
    person.innerHTML = "Africa";
    description.innerHTML = "She is a nice person";
    silhoutte.setAttribute("d", "M 1,3 A 2,2 0,0,1 5,3 A 2,2 0,0,1 9,3 Q 9,6 5,9 Q 1,6 1,3 z");
    modal.style.display = "block";
  }

  if (event.mapObject.title == "South America"){
    person.innerHTML = "South America";
    description.innerHTML = "She is a tropical person";
    silhoutte.setAttribute("d", "M 1,3 A 2,2 0,0,1 5,3 A 2,2 0,0,1 9,3 Q 9,6 5,9 Q 1,6 1,3 z");
    modal.style.display = "block";
  }
});

