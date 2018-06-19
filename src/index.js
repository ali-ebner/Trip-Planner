const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpLWVibmVyIiwiYSI6ImNqaW00N2JndTAwNnozcGxmd25heTBnMGMifQ.kMU4IYF3OdLLeY4JnSrpeQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const firstMarker = document.createElement("div");
firstMarker.style.width = '32px';
firstMarker.style.height = '39px';
firstMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const secondMarker = document.createElement("div");
secondMarker.style.width = '32px';
secondMarker.style.height = '39px';
secondMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


new mapboxgl.Marker(firstMarker).setLngLat([-74.009151, 40.705086]).addTo(map);

new mapboxgl.Marker(secondMarker).setLngLat([-87.641, 41.895]).addTo(map);

const marker = buildMarker('Hotel', [-73.987218, 40.719653]);

marker.addTo(map);

const myHouse = buildMarker('Activity', [-97.740257, 30.250161])
myHouse.addTo(map);
