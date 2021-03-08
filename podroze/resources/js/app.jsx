/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

// require("./bootstrap");
import "bootstrap";
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require("./components/TripSearch/TripSearch");
// require("./components/PopularDestinations/PopularDestinations");
import React from "react";
import ReactDOM from "react-dom";
import TripSearch from "./components/TripSearch/TripSearch";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations";

if (document.getElementById("trip-search")) {
    ReactDOM.render(<TripSearch />, document.getElementById("trip-search"));
}

if (document.getElementById("popular-destinations")) {
    ReactDOM.render(
        <PopularDestinations />,
        document.getElementById("popular-destinations")
    );
}
