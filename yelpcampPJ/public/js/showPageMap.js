mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v11', // style URL
      center: campground.geometry.coordinates, // starting position [lng, lat]
      zoom: 13, // starting zoom
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');


const marker = new mapboxgl.Marker({color: "red", rotation: 45})
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({offset: 25})
      .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map);