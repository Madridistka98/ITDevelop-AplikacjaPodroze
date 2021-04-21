// @flow
import React, { useState, useEffect, useRef, type Node } from "react";
import H from "@here/maps-api-for-javascript";
import onResize from "simple-element-resize-detector";

const platform = new H.service.Platform({
    apikey: "V0hzyYum1N-8oc-qPYp-kpTgbZIZ2eHM-GUPhiU0zV0",
});

type MapDestination = {
    city?: string,
    latitude: number,
    longitude: number,
    name?: string,
};

type Locations = {
    start: MapDestination,
    destination: MapDestination,
    additionalStops: Array<MapDestination>,
};
type Props = {
    locations: Locations,
    transport: string,
    hotels: Array<MapDestination>,
    selectedHotel: MapDestination,
    changeSelectedHotel: (MapDestination) => void,
};

function Map(props: Props): Node {
    const [hMap, changeMap] = useState({});
    const [routes, changeRoutes] = useState();
    const hotels = props.hotels;
    const selectedHotel = props.selectedHotel;
    const changeSelectedHotel = props.changeSelectedHotel;
    const mapContainer = useRef(null);
    const start = props.locations["start"];
    const additionalStops = props.locations["additionalStops"]
        ? props.locations["additionalStops"]
        : [];
    const destination = props.locations["destination"];
    const transport = props.transport;
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

    function makeRoute(map, start, destination) {
        const routingParameters = {
            routingMode: "fast",
            transportMode: transport,
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
        const mapEvents = new H.mapevents.MapEvents(map);
        const behavior = new H.mapevents.Behavior(mapEvents);

        changeMap({
            layers: layers,
            map: map,
            mapEvents: mapEvents,
            behavior: behavior,
        });
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

    /**
    Creates routes from start to destination throught all locations
     */
    useEffect(() => {
        if (hMap.map) {
            routes.removeAll();
            const points = [...additionalStops];
            points.push(destination);
            points.unshift(start);
            for (let index = 0; index < points.length - 1; index++) {
                makeRoute(hMap.map, points[index], points[index + 1]);
            }
        }
    });
    /**
        Add hotels markers to map
     */
    useEffect(() => {
        if (hMap.map) {
            const hotelsGroup = new H.map.Group();
            hMap.map.addObject(hotelsGroup);
            for (const city in hotels) {
                hotels[city].forEach((hotel) => {
                    if (
                        selectedHotel.latitude &&
                        hotel.latitude == selectedHotel.latitude &&
                        hotel.longitude == selectedHotel.longitude
                    ) {
                        const content = document.createElement("div");
                        content.style.width = "10rem";
                        content.style.backgroundColor = "black";
                        const text = document.createElement("h4");
                        text.style.color = "#fff";
                        text.innerText = hotel.name;
                        content.appendChild(text);
                        const icon = new H.map.DomIcon(content);
                        const marker = new H.map.DomMarker(
                            {
                                lat: hotel.latitude,
                                lng: hotel.longitude,
                            },
                            { icon: icon }
                        );
                        hotelsGroup.addObject(marker);
                    } else {
                        const markerIcon = `<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    fill="currentColor"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>`;
                        const markerContent = document.createElement("a");
                        markerContent.href = "#";
                        markerContent.innerHTML = markerIcon;

                        const icon = new H.map.DomIcon(markerContent);
                        const marker = new H.map.DomMarker(
                            {
                                lat: hotel.latitude,
                                lng: hotel.longitude,
                            },
                            { icon: icon }
                        );

                        marker.addEventListener("tap", function (e: Event) {
                            e.preventDefault();
                            console.log("select");
                            changeSelectedHotel(hotel);
                        });
                        hotelsGroup.addObject(marker);
                    }
                });
            }

            return () => {
                const markers = hotelsGroup.getObjects();
                markers.map((marker) => {
                    marker.dispose();
                });
                hotelsGroup.removeAll();
                hMap.map.removeObject(hotelsGroup);
            };
        }
    });

    return <div ref={mapContainer} className="w-100 h-100" id="map"></div>;
}

export default Map;
export type { MapDestination };
