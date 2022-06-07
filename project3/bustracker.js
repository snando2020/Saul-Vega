var markers = [];

// Keys
mapboxgl.accessToken = "pk.eyJ1Ijoic25hbmRvMjAyMiIsImEiOiJjbDQzeGM5aWwwMG5tM2ZwYWV6M3I3NnljIn0.E9vtOeSvdIXxSAAP8r3qzg";

// Creando una nueva instancia de Mapa de la biblioteca Mapbox
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.104081, 42.365554],
    zoom: 13,
});

// Crear la función para obtener los datos de la API
async function getBusData() {
    const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
    const res = await fetch(url);
    const data = res.json();
    return data;
}

// Crear la función para tener los Markers de manera dinamica con sus colores
// y Longitud y Latitud

let markersSet = [];
let popUpSet = [];

async function createMarkers() {
    let busesJson = await getBusData();
    let busesArray = busesJson.data;

    for (let index = 0; index < markersSet.length; index++) {
        markersSet[index].remove();
        popUpSet[index].remove();
    }

    for (let index = 0; index < busesArray.length; index++) {
        let bus = busesArray[index];

        var marker = new mapboxgl.Marker()
            .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
            .addTo(map);
        markersSet.push(marker);

        const popup = new mapboxgl.Popup({ closeOnClick: false, offset: 50 })
            .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
            .setText(`Bus: ${bus.attributes.label}`)
            .addTo(map);
        popUpSet.push(popup);
    }
}

setInterval(createMarkers, 5000);