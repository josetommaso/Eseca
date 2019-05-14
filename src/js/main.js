/* MAPBOX */

mapboxgl.accessToken = 'pk.eyJ1IjoidG9tbWFzb2oiLCJhIjoiY2p2azVjb3JvMG02cTQ5bDI5M3QzMW5vdSJ9.pxBvyV5sNi-9D0O-MtNu8g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-67.604268, 10.235346],
    zoom: 15
});

var marker = new mapboxgl.Marker()
  .setLngLat([-67.604268, 10.235346])
  .addTo(map);
