"use strict"

const MAPBOX_ACCESS_TOKEN = 
    "pk.eyJ1IjoiYXJtYWdoIiwiYSI6ImNraHRnM2N0bzBhYjIycnA1d3MyOXZlam4ifQ.UoTJlbW37DUhKp0ndHWg2g";

const main = () => {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const pos = [position.coords.longitude, position.coords.latitude];
            map.setCenter(pos);
        },
        () => alert("Issue retrieving location")
    );
} else {
    alert("Browser doesn't support Geolocation");
}

window.addEventListener("load", main);