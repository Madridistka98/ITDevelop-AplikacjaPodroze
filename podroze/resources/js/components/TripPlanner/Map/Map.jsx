// @flow
import React, { useState, useEffect, useRef, type Node } from "react";
import H from "@here/maps-api-for-javascript";

const platform = new H.service.Platform({
    apikey: "V0hzyYum1N-8oc-qPYp-kpTgbZIZ2eHM-GUPhiU0zV0",
});

function Map(): Node {
    const [hMap, changeMap] = useState({});
    const mapContainer = useRef(null);

    useEffect(() => {
        const layers = platform.createDefaultLayers();
        const map = new H.Map(mapContainer.current, layers.vector.normal.map, {
            // pixelRatio: window.devicePixelRatio,
            center: { lng: 13.4, lat: 52.51 },
            zoom: 10,
        });
        const ui = H.ui.UI.createDefault(map, layers);
        // const mapSettings = ui.getControl("mapsettings");
        // const zoom = ui.getControl("zoom");
        // const scalebar = ui.getControl("scalebar");

        // mapSettings.setAlignment("top-left");
        // zoom.setAlignment("top-left");
        // scalebar.setAlignment("top-left");
        changeMap({ layers: layers, map: map, ui: ui });
    }, []);

    return <div ref={mapContainer} className="col-md-9 col-12" id="map"></div>;
}

export default Map;
