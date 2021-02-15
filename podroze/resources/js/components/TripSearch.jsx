import React, { useState } from "react";
import ReactDOM from "react-dom";

function TripSearch() {
    const [travel, changeTravel] = useState({ start: "", destination: "" });
    const [date, changeDate] = useState("");

    function swapTravelPoints(e) {
        e.preventDefault();
        const { start, destination } = travel;
        changeTravel({ start: destination, destination: start });
    }

    return (
        <form action="/searchtrip" method="POST" className="m-4 p-3 form-row">
            <div className="col-12 col-lg-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Start"
                    name="start"
                    value={travel.start}
                    onChange={(e) => {
                        changeTravel({ ...travel, start: e.target.value });
                    }}
                />
            </div>
            <a
                href="#"
                onClick={swapTravelPoints}
                className="my-3 my-lg-auto mx-auto text-success"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-left-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                    />
                </svg>
            </a>
            <div className="col-12 col-lg-3 mb-3 mb-lg-0">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Destination"
                    name="destination"
                    value={travel.destination}
                    onChange={(e) => {
                        changeTravel({
                            ...travel,
                            destination: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="col-12 col-lg-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Choose Date"
                    name="date"
                />
            </div>
            <button
                className="btn btn-success mx-auto my-3 my-lg-0 rounded-pill px-5"
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default TripSearch;

if (document.getElementById("trip-search")) {
    ReactDOM.render(<TripSearch />, document.getElementById("trip-search"));
}
