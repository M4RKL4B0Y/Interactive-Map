//Map:
const myMap = L.map('map').setView([35.78623552537134, -78.64516823656754], 13);

//Street:
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

//Markers:
const marker = L.marker([35.78623552537134, -78.64516823656754])
marker.addTo(myMap).bindPopup('<p1><b>Audio Advice, NC</b></p1>').openPopup()

const loaction1 = L.marker([35.90985082924444, -78.7848840576713]).addTo(myMap).bindPopup('<p1><b>Brier Creek, NC</b></p1>').openPopup()

const location2 = L.marker([35.87074662915914, -78.7202125472775]).addTo(myMap).bindPopup('<p1><b>Target, NC</b></p1>').openPopup()

const location3 = L.marker([35.88033106885501, -78.78799630309885]).addTo(myMap).bindPopup('<p1><b>AirPort, NC</b></p1>').openPopup()

//Polygon:
const polygon = L.polygon([
    [35.90985082924444, -78.7848840576713],
    [35.87074662915914, -78.7202125472775],
    [35.88033106885501, -78.78799630309885]
    ],{
        color: 'blue', fillOpacity: 0.5
    }).addTo(myMap);
        