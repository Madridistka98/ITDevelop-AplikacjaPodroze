// @flow
import React, { useState, useEffect, type Node } from "react";
import Axios from "axios";
import PopularDestination from "./../PopularDestinations/PopularDestination";
type Props = {
    selectedDay: Date,
};
const destinations = [
    {
        image: "./static/images/destinations/Prague.jpg",
        name: "Prague",
    },
    {
        image: "./static/images/destinations/ljubljana.jpeg",
        name: "Ljubljana",
    },
    {
        image: "./static/images/destinations/Maldives.jpg",
        name: "Maldives",
    },
];

function Trip(props: Props): Node {
    const date = props.selectedDay;
    const userID = document.getElementById("userID").value;
    const [trip, changeTrip] = useState({});
    const reqDate = date.toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const splitedDate = reqDate.split("/");
    const apiDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`;

    function getTrips() {
        Axios.get(`/api/trip/${userID}-${apiDate}`).then((res) => {
            changeTrip(res.data);
        });
    }
    useEffect(() => {
        getTrips();
    }, [date]);
    const PopularDestinationsComponents = destinations.map((dest) => {
        return <PopularDestination key={dest.name} {...dest} />;
    });
    let result = (
        <div className="bg-dark d-flex flex-column rounded w-100">
            <div className="d-flex flex-grow-1 flex-md-row flex-column my-2">
                {PopularDestinationsComponents[0]}
                {PopularDestinationsComponents[1]}
                {PopularDestinationsComponents[2]}
            </div>
        </div>
    );
    console.log(trip);
    if (trip.hasOwnProperty("id")) {
        const destinations = trip.destinations.map((dest) => {});
        result = (
            <div className="row bg-dark rounded p-4">
                <div className="bg-secondary col-md-4 col-12 position-relative d-flex flex-column p-5">
                    <p className="display-1 text-muted calendar__number">
                        {date.getDate()}
                    </p>
                    <h3 className="calendar__trip-name text-center h2 my-auto">
                        <a
                            href={`/searchtrip?start=${trip.start.city}, ${trip.start.country}&destination=${trip.destination.city}, ${trip.destination.country}=&date=${apiDate}&day=23&month=3&year=2021`}
                        >
                            {trip.name}
                        </a>
                    </h3>
                </div>
                <div className="col-md-8 col-12 d-flex flex-row flex-wrap flex-md-nowrap">
                    <div className="d-flex flex-column">
                        <div className="bg-info trip__point d-flex flex-row flex-grow-1 mx-5 my-2">
                            <img
                                src="./static/images/destination-1.jpg"
                                alt="destination"
                                className="img img-fluid w-50 h-75 my-auto"
                            />
                            <p className="flex-grow-1 h3 text-center my-auto">
                                {trip.start.city + " " + trip.start.country}
                            </p>
                        </div>
                        <div className="bg-info trip__point d-flex flex-row flex-grow-1 mx-5 my-2">
                            <img
                                src="./static/images/destination-1.jpg"
                                alt="destination"
                                className="img img-fluid w-50 h-75 my-auto"
                            />
                            <p className="flex-grow-1 h3 text-center my-auto">
                                {trip.destination.city +
                                    " " +
                                    trip.destination.country}
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="bg-info trip__point d-flex flex-row flex-grow-1 mx-5 my-2">
                            <img
                                src="./static/images/destination-1.jpg"
                                alt="destination"
                                className="img img-fluid w-50 h-75 my-auto"
                            />
                            <p className="flex-grow-1 h3 text-center my-auto">
                                PURO Wrocław Stare Miasto
                            </p>
                        </div>
                        <div className="bg-info trip__point d-flex flex-row flex-grow-1 mx-5 my-2">
                            <img
                                src="./static/images/destination-1.jpg"
                                alt="destination"
                                className="img img-fluid w-50 h-75 my-auto"
                            />
                            <p className="flex-grow-1 h3 text-center my-auto">
                                PURO Wrocław Stare Miasto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return result;
}

export default Trip;
