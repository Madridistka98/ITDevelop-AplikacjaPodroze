// @flow
import React, { type Node } from "react";
function Trip(): Node {
    return (
        <div className="row bg-dark rounded p-4">
            <div className="bg-secondary col-md-4 col-12 position-relative d-flex flex-column p-5">
                <p className="display-1 text-muted calendar__number">6</p>
                <h3 className="calendar__trip-name text-center h2 my-auto">
                    Going to Wrocław
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

export default Trip;
