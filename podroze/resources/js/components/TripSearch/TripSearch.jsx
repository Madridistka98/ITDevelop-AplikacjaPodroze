// @flow
import React, { useState, type Node } from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-date-picker";

type TravelPoints = {
    start: string,
    destination: string,
};

type ChangeTravelPoints = (TravelPoints) => void;
type ChangeDateFunc = (Date) => void;

function TripSearch(): Node {
    const [travel: TravelPoints, changeTravel: ChangeTravelPoints] = useState({
        start: "",
        destination: "",
    });
    const [date: Date, changeDate: ChangeDateFunc] = useState(new Date());

    function swapTravelPoints(e) {
        e.preventDefault();
        const { start, destination } = travel;
        changeTravel({ start: destination, destination: start });
    }

    return (
        <form
            action="/searchtrip"
            method="GET"
            className="m-4 p-3 form-row"
            data-tests="trip-search"
        >
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
                data-testid="tripsearch-swap"
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
                        fillRule="evenodd"
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
                <DatePicker
                    onChange={changeDate}
                    value={date}
                    className="form-control"
                    minDate={new Date()}
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
