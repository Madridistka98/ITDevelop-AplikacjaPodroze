// @flow
import React, { useState, useEffect, useRef, type Node } from "react";
import H from "@here/maps-api-for-javascript";
import onResize from "simple-element-resize-detector";

const platform = new H.service.Platform({
    apikey: "V0hzyYum1N-8oc-qPYp-kpTgbZIZ2eHM-GUPhiU0zV0",
});

type MapDestination = {
    city: string,
    latitude: number,
    longitude: number,
};

type Props = Array<MapDestination>;

function Map(props: Props): Node {
    const [hMap, changeMap] = useState({});
    const [routes, changeRoutes] = useState();
    const mapContainer = useRef(null);
    const start = props[0];
    const destination = props[1];

    function handleMapViewChange(e) {
        if (e.newValue && e.newValue.lookAt && hMap.map) {
            const lookAt = e.newValue.lookAt;
            // adjust precision
            const lat = Math.trunc(lookAt.position.lat * 1e7) / 1e7;
            const lng = Math.trunc(lookAt.position.lng * 1e7) / 1e7;
            const zoom = Math.trunc(lookAt.zoom * 1e2) / 1e2;

            hMap.map.setZoom(zoom);
            hMap.map.setCenter({ lat, lng });
        }
    }

    function makeRoute(map) {
        const routingParameters = {
            routingMode: "fast",
            transportMode: "car",
            // The start point of the route:
            origin: `${start.latitude},${start.longitude}`,
            // The end point of the route:
            destination: `${destination.latitude},${destination.longitude}`,
            // Include the route shape in the response
            return: "polyline",
        };

        // Define a callback function to process the routing response:
        const onResult = function (result) {
            // ensure that at least one route was found
            routes.removeAll();
            if (result.routes.length) {
                result.routes[0].sections.forEach((section) => {
                    // Create a linestring to use as a point source for the route line
                    const linestring = H.geo.LineString.fromFlexiblePolyline(
                        section.polyline
                    );

                    // Create a polyline to display the route:
                    const routeLine = new H.map.Polyline(linestring, {
                        style: { strokeColor: "blue", lineWidth: 3 },
                    });

                    // Create a marker for the start point:
                    const startMarker = new H.map.Marker(
                        section.departure.place.location
                    );

                    // Create a marker for the end point:
                    const endMarker = new H.map.Marker(
                        section.arrival.place.location
                    );

                    // Add the route polyline and the two markers to the map:
                    routes.addObjects([routeLine, startMarker, endMarker]);

                    //Set the map's viewport to make the whole route visible:
                    map.getViewModel().setLookAtData({
                        bounds: routeLine.getBoundingBox(),
                    });
                });
            }
        };

        // Get an instance of the routing service version 8:
        const router = platform.getRoutingService(null, 8);

        // Call calculateRoute() with the routing parameters,
        // the callback and an error callback function (called if a
        // communication error occurs):
        router.calculateRoute(routingParameters, onResult, function (error) {
            alert(error.message);
        });
    }

    useEffect(() => {
        const layers = platform.createDefaultLayers();
        const map = new H.Map(mapContainer.current, layers.vector.normal.map, {
            pixelRatio: window.devicePixelRatio,
            center: { lng: start.longitude, lat: start.latitude },
            zoom: 10,
        });
        onResize(mapContainer.current, () => {
            map.getViewPort().resize();
        });

        map.addEventListener("mapviewchange", handleMapViewChange);
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

        changeMap({ layers: layers, map: map });
        if (!routes) {
            const g = new H.map.Group();
            changeRoutes(g);
            map.addObject(g);
        }
        // if (hMap.map) makeRoute(hMap.map);
        return () => {
            map.removeEventListener("mapviewchange", handleMapViewChange);
        };
    }, []);

    useEffect(() => {
        if (hMap.map) {
            makeRoute(hMap.map);
        }
    });

    return <div ref={mapContainer} className="col-md-9 col-12" id="map"></div>;
}

export default Map;
