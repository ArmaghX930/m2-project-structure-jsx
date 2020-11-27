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
    })

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const pos = [position.coords.longitude, position.coords.latitude];
                map.setCenter(pos);
            },
            () => alert("Issue retrieving location")
        );
    } else {
        alert("Browser doesn't support Geolocation");
    }
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const pricePerHour = urlParams.get('pricePerHour');
    const capacity = urlParams.get('capacity');
    const availToday = urlParams.get('availToday');
    
    axios
    .get(`http://localhost:3005/api/spaces?city=${city}&pricePerHour=${pricePerHour}&capacity=${capacity}&availToday=${availToday}`)
    .then(result => {
        console.log(result.data)
        result.data.forEach(space => {
            console.log(space)
        new mapboxgl.Marker()
          .setLngLat(space.coordinates.reverse()) // reverse the order of Lat and Long
          .setPopup(new mapboxgl.Popup().setHTML(`<a href="/space/${space._id}"><h3>${space.title}</h3></a>`)) 
          .addTo(map);
      });
    })
    .catch(err => console.error(err));


}



window.addEventListener("load", main);