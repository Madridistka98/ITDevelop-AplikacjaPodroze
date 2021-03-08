import React, { useState, type Node } from "react";
import ReactDOM from "react-dom";
import "./PopularDestinations.scss";
import PopularDestination from "./PopularDestination";
import PopularDestinationsData from "./PopularDestinationsSample";
// @flow
type Destination = {
    name: string,
    image: string,
};

type ChangeDestFunc = (Array<Destination>) => void;

function PopularDestinations(): Node {
    const [
        destinations: Array<Destination>,
        changeDestination: ChangeDestFunc,
    ] = useState(PopularDestinationsData);

    const PopularDestinationsComponents = destinations.map((dest) => {
        return <PopularDestination key={dest.name} {...dest} />;
    });

    return (
        <div className="bg-dark d-flex flex-column rounded w-100">
            <div className="d-flex flex-grow-1 flex-md-row flex-column my-2">
                {PopularDestinationsComponents[0]}
                {PopularDestinationsComponents[1]}
                {PopularDestinationsComponents[2]}
            </div>
            <div className="d-flex flex-grow-1 flex-md-row flex-column my-2">
                {PopularDestinationsComponents[3]}
                {PopularDestinationsComponents[4]}
                {PopularDestinationsComponents[5]}
            </div>
            <div className="d-flex flex-grow-1 flex-md-row flex-column my-2">
                {PopularDestinationsComponents[6]}
                {PopularDestinationsComponents[7]}
                {PopularDestinationsComponents[8]}
            </div>
        </div>
    );
}

export default PopularDestinations;
