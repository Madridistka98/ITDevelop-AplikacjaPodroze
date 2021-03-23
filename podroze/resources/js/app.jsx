/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require("./bootstrap");
import * as Bootstrap from "bootstrap";
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react";
import ReactDOM from "react-dom";
import TripSearch from "./components/TripSearch/TripSearch";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations";
import TripPlanner from "./components/TripPlanner/TripPlanner";
import CalendarContainer from "./components/Calendar/CalendarContainer";

window.bootstrap = Bootstrap;

if (document.getElementById("trip-search")) {
    ReactDOM.render(<TripSearch />, document.getElementById("trip-search"));
}

if (document.getElementById("popular-destinations")) {
    ReactDOM.render(
        <PopularDestinations />,
        document.getElementById("popular-destinations")
    );
}

if (document.getElementById("maps-app")) {
    ReactDOM.render(<TripPlanner />, document.getElementById("maps-app"));
}
if (document.getElementById("calendar")) {
    ReactDOM.render(<CalendarContainer />, document.getElementById("calendar"));
}
