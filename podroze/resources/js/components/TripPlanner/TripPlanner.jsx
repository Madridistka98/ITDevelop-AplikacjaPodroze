import React, { useState, useEffect, type Node } from "react";
import Map, { type MapDestination } from "./Map/Map";
import Axios from "axios";
import queryString from "query-string";
import Button from "./Button";
import MapSearch from "./MapSearch";
// @flow
const parsed = queryString.parse(location.search);
function TripPlanner(): Node {
    const [start, changeStart] = useState(parsed.start);
    const [destination, changeDestination] = useState(parsed.destination);
    const initialTransport = parsed.transport;
    const [transport, changeTransport] = useState(
        initialTransport ? initialTransport : "car"
    );
    const initialStops = parsed.destinations
        ? parsed.destinations.split("--")
        : [];
    const [additionalStops, changeAdditionalStops] = useState(
        initialStops ? initialStops : []
    );
    const [numberOfStops, changeNumberOfStops] = useState(
        initialStops ? initialStops.length : 0
    );
    const [
        locations: Array<MapDestination>,
        changeLocations: (Array<MapDestination>) => void,
    ] = useState();

    const calendar =
        document.getElementById("profileModal") == null ? null : (
            <div className="d-flex flex-column">
                <a
                    href="#"
                    className="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 "
                    onClick={createTrips}
                >
                    Save in the calendar
                </a>
                <a
                    href="#"
                    className="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 "
                >
                    Add a friend
                </a>
            </div>
        );

    function createTrips(e) {
        let validStops = [];
        e.preventDefault();
        if (!locations["start"] && !locations["destination"]) {
            alert("Start or destinations are not valid");
            return;
        }
        if (
            locations["additionalStops"] &&
            locations["additionalStops"].length > 0
        ) {
            locations["additionalStops"].forEach((stop) => {
                if (typeof stop.ID != "undefined") {
                    validStops.push(stop);
                }
            });
        }
        let tripName = window.prompt("Enter you trip name");
        if (tripName == "") {
            alert("Invalid trip name");
            return;
        }
        const userID = document.getElementById("userID").value;
        Axios.post("/api/trip", {
            user: userID,
            name: tripName,
            mainDestinations: [locations["start"], locations["destination"]],
            additionalStops: validStops,
            date: parsed.date,
            transport: transport,
        })
            .then(() => {
                alert("Trip added");
            })
            .catch(() => {
                "Error when adding trip";
            });
    }

    async function getHotels() {
        let query = "/api/hotels/";
        query += locations.start.city;
        if (locations.additionalStops) {
            locations.additionalStops.forEach((loc) => {
                query += "--" + loc.city;
            });
        }
        query += "--" + locations.destination.city;
        const response = await Axios.get(query);
        console.log(response.data);
    }

    function getMapDestinations() {
        let delay = setTimeout(async () => {
            const startPoint = start.includes(",")
                ? start.split(",")[0]
                : start;
            const destPoint = destination.includes(",")
                ? destination.split(",")[0]
                : destination;
            if (startPoint && destPoint) {
                const response = await Axios.get(
                    `/api/map-destinations/${startPoint}-${destPoint}`
                );
                let data = [];
                data["start"] = response.data[0];
                data["destination"] = response.data[1];
                console.log(data);
                if (additionalStops.length > 0) {
                    let query = "/api/map-multiple-destinations/";
                    additionalStops.forEach((stop) => {
                        const stopPoint = stop.includes(",")
                            ? stop.split(",")[0]
                            : stop;
                        query += stopPoint + "--";
                    });
                    query = query.slice(0, query.length - 2);
                    const queryRes = await Axios.get(query);
                    console.log(data);
                    data["additionalStops"] = queryRes.data;
                    console.log(data);
                }

                if (response.data != "") changeLocations(data);
            }
        }, 500);
        return delay;
    }

    useEffect(() => {
        let delay = getMapDestinations();
        return () => {
            clearTimeout(delay);
        };
    }, [start, destination, additionalStops]);

    let hasLocations = typeof locations != "undefined" ? true : false;

    return (
        <div className="row flex-grow-1">
            <div className="d-flex flex-column col-md-3 col-12 bg-dark ">
                <div className="d-flex flex-column flex-sm-row justify-content-around my-3 ">
                    <Button
                        icon="./static/images/icons/bed_1.png"
                        name="bed"
                        effect={function () {
                            getHotels();
                        }}
                    />
                    <Button
                        icon="./static/images/icons/restaurant_1.png"
                        name="restaurant"
                    />
                    <Button
                        icon="./static/images/icons/zwiedzanie_1.png"
                        name="zwiedzanie"
                    />
                </div>
                <a href="/" className="btn btn-secondary w-100">
                    <img
                        src="./static/images/dino_mapa.png"
                        alt="logo_dinozaur"
                        className="img img-fluid w-25"
                    />
                </a>
                <div className="d-flex flex-row  justify-content-around mx-2 my-4">
                    <Button
                        icon="./static/images/icons/bus1scaled.png"
                        name="bus"
                        effect={changeTransport}
                    />
                    <Button
                        icon="./static/images/icons/rower_1.png"
                        name="bicycle"
                        effect={changeTransport}
                    />
                    <Button
                        icon="./static/images/icons/auto_1.png"
                        name="car"
                        effect={changeTransport}
                    />
                    <Button
                        icon="./static/images/icons/pieszy1scaled.png"
                        name="pedestrian"
                        effect={changeTransport}
                    />
                </div>
                <MapSearch
                    changeNumberOfStops={changeNumberOfStops}
                    start={start}
                    changeStart={changeStart}
                    destination={destination}
                    changeDestination={changeDestination}
                    additionalStops={additionalStops}
                    numberOfStops={numberOfStops}
                    changeAdditionalStops={changeAdditionalStops}
                />

                {calendar}
            </div>
            <div className="col-md-9 col-12">
                {hasLocations ? (
                    <Map locations={locations} transport={transport} />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default TripPlanner;
