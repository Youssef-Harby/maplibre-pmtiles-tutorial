// Initialize the PMTiles protocol
let protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

// PMTiles URL
let PMTILES_URL = "https://link.storjshare.io/raw/jxqoz44klwwclvwgvqkkp77pex3q/truemaps-public/public-datasets/overturemaps/2024-01-17-alpha.0/theme=buildings/egypt_buildings_vt.pmtiles";
const p = new pmtiles.PMTiles(PMTILES_URL);
protocol.add(p);

let map; // Declare map globally

// Function to initialize the map
function initializeMap() {
    p.getHeader().then((h) => {
        map = new maplibregl.Map({
            container: "map",
            zoom: h.maxZoom,
            center: [31.233334, 30.033333],
            style: {
                version: 8,
                sources: {},
                layers: [],
            },
        });
        map.on("load", function () {
            addPMTilesLayer();
            changeBasemap("osm"); // Set initial basemap
            map.on("click", "buildings", function (e) {
                showPopup(e); // Function call to show popup on click
            });
        });
    });
}

// Function to add PMTiles as a source and layer to the map
function addPMTilesLayer() {
    map.addSource("pmtiles", {
        type: "vector",
        url: "pmtiles://" + PMTILES_URL,
    });
    map.addLayer({
        id: "buildings",
        type: "fill",
        source: "pmtiles",
        "source-layer": "buildings",
        paint: {
            "fill-color": "steelblue",
        },
    });
}

// Function to change the basemap based on user selection
function changeBasemap(basemap) {
    const basemapUrls = {
        osm: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    };

    const url = basemapUrls[basemap];
    const sourceId = "baseMapSource";

    if (map.getSource(sourceId)) {
        map.removeLayer("baseMapLayer");
        map.removeSource(sourceId);
    }

    map.addSource(sourceId, {
        type: "raster",
        tiles: [url],
        tileSize: 256,
    });

    map.addLayer(
        {
            id: "baseMapLayer",
            type: "raster",
            source: sourceId,
            minzoom: 0,
            maxzoom: 22,
        },
        "buildings" // Ensure basemap layer is added below PMTiles layer
    );
}

// Function to show popup with feature properties on click
function showPopup(e) {
    if (e.features.length > 0) {
        var feature = e.features[0];
        // Customize the popup content based on feature properties
        var popupContent = `ID: ${feature.properties.id}<br>Sources: ${feature.properties.sources}`;

        new maplibregl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(popupContent)
            .addTo(map);
    }
}

window.onload = initializeMap;
