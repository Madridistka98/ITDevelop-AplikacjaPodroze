import React, { useState } from "react";
import ReactDOM from "react-dom";
import PopularDestination from "./PopularDestination";
import PopularDestinationsData from "./PopularDestinationsSample";

function PopularDestinations() {
    const [destinations, changeDestination] = useState(PopularDestinationsData);
    let currentInRow = 0;
    const maxInRow = 3;

    const PopularDestinationsComponents = destinations.map((dest) => {
        if (currentInRow == 0) {
            out = <div class="d-flex flex-md-row flex-column my-2"></div>;
        }
    });

    return (
        <div class="bg-dark d-flex flex-column rounded w-100">
            <div class="d-flex flex-md-row flex-column my-2"></div>
        </div>
    );
}

export default PopularDestinations;

if (document.getElementById("popular-destinations")) {
    ReactDOM.render(
        <PopularDestinations />,
        document.getElementById("popular-destinations")
    );
}
