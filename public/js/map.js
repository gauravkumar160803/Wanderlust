mapboxgl.accessToken = mapToken
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12',
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const el = document.createElement('div');
el.className = 'mapbox-marker-custom';
el.innerHTML = '<i class="fas fa-house"></i>';  

const marker = new mapboxgl.Marker({ element: el })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3 style="margin:0;">${listing.location}</h3><p style="margin:0;">${listing.country}</p>`))
    .addTo(map);

  