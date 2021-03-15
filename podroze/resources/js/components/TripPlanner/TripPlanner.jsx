import React, { useState, useEffect, type Node } from "react";
import Map, { type MapDestination } from "./Map/Map";
import Axios from "axios";
import queryString from "query-string";
// @flow
const parsed = queryString.parse(location.search);
function TripPlanner(): Node {
    const [start, changeStart] = useState(parsed.start);
    const [destination, changeDestination] = useState(parsed.destination);
    const [
        locations: Array<MapDestination>,
        changeLocations: (Array<MapDestination>) => void,
    ] = useState();

    function swapTravelPoints(e) {
        e.preventDefault();
        const [tempStart, tempDestination] = [start, destination];
        changeStart(tempDestination);
        changeDestination(tempStart);
    }

    async function getMapDestinations() {
        const startPoint = start.includes(",") ? start.split(",")[0] : start;
        const destPoint = destination.includes(",")
            ? destination.split(",")[0]
            : destination;
        const response = await Axios.get(
            `/api/map-destinations/${startPoint}-${destPoint}`
        );
        changeLocations(response.data);
    }

    useEffect(() => {
        getMapDestinations();
    }, [start, destination]);

    let hasLocations = typeof locations != "undefined" ? true : false;

    return (
        <div className="row flex-grow-1">
            <div className="d-flex flex-column col-md-3 col-12 bg-dark ">
                <a href="{{ url('/') }}" className="btn btn-secondary w-100">
                    <img
                        src="./static/images/dino_mapa.png"
                        alt="logo_dinozaur"
                        className="img img-fluid w-25"
                    />
                </a>
                <div className="d-flex flex-row  justify-content-around mx-2 my-4">
                    <a href="#" className="btn btn-secondary m-2 p-1">
                        <img
                            className="img img-fluid p-1"
                            src="./static/images/icons/samolot_1.png"
                            alt="samolot"
                        />
                    </a>
                    <a href="#" className="btn btn-secondary m-2 p-1">
                        <img
                            className="img img-fluid p-1"
                            src="./static/images/icons/rower_1.png"
                            alt="rower"
                        />
                    </a>
                    <a href="#" className="btn btn-secondary m-2 p-1">
                        <img
                            className="img img-fluid p-1"
                            src="./static/images/icons/auto_1.png"
                            alt="auto"
                        />
                    </a>
                    <a href="#" className="btn btn-secondary m-2 p-1">
                        <img
                            className="img img-fluid p-1"
                            src="./static/images/icons/train_1.png"
                            alt="train"
                        />
                    </a>
                </div>
                <div className="bg-secondary rounded p-4">
                    <form
                        action="#"
                        method="GET"
                        className="d-flex flex-column"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Start"
                                className="form-control"
                                id="startPoint"
                                value={start}
                                onChange={changeStart}
                            />
                        </div>
                        <div className="form-group d-flex flex-direction-row">
                            <a href="#" className="mr-auto my-3 my-lg-auto ">
                                <img
                                    className="img img-fluid"
                                    src="./static/images/icons/dodaj_1.png"
                                    alt="add"
                                />
                            </a>
                            <a
                                href="#"
                                className="rotated-90 my-3 my-lg-auto ml-auto text-success"
                                onClick={swapTravelPoints}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Destination"
                                className="form-control"
                                id="destinationPoint"
                                value={destination}
                                onChange={changeDestination}
                            />
                        </div>
                    </form>
                </div>

                <a
                    href="#"
                    className="btn btn-success rounded-pill mx-auto my-4 px-5"
                >
                    Start
                </a>

                {/* @guest
                            @if (Route::has('login'))
                            @endif
                        @else
                        <div className="d-flex flex-column">
                            <a href="#" className="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 ">Save in the calendar</a>
                            <a href="#" className="btn btn-secondary rounded-pill mx-auto my-4 px-5 w-100 ">Add a friend</a>
                        </div>
                        @endguest */}
            </div>
            {hasLocations ? <Map {...locations} /> : <></>}
        </div>
    );
}

export default TripPlanner;
