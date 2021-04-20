import React from "react";
import DropDown from "./../TripSearch/DropDown";
// @flow
type Props = {
    changeNumberOfStops: callable,
    start: string,
    changeStart: callable,
    destination: string,
    changeDestination: callable,
    changeAdditionalStops: callable,
    additionalStops: array,
    numberOfStops: int,
};

function MapSearch(props: Props) {
    const {
        changeNumberOfStops,
        start,
        changeStart,
        destination,
        changeDestination,
        additionalStops,
        changeAdditionalStops,
        numberOfStops,
    } = props;

    function swapTravelPoints(e) {
        e.preventDefault();
        const [tempStart, tempDestination] = [start, destination];
        changeStart(tempDestination);
        changeDestination(tempStart);
    }

    function createAdditionalDropDowns() {
        let dropDowns = [];
        for (let count = 0; count < numberOfStops; count++) {
            dropDowns.push(
                <div className="d-flex flex-row">
                    <DropDown
                        point={additionalStops[count] || ""}
                        name={"stopNr:" + count}
                        changePoint={changeAdditionalStops}
                        isGroup={true}
                        key={count}
                    />
                    <a
                        href="#"
                        className="my-auto"
                        onClick={(e) => {
                            e.preventDefault();
                            let temp = additionalStops;
                            temp.splice(count, 1);
                            changeNumberOfStops((stops) => stops - 1);
                            changeAdditionalStops([...temp]);
                        }}
                        key={"R" + count}
                    >
                        X
                    </a>
                </div>
            );
        }
        return dropDowns;
    }
    const newStopsDropDown = createAdditionalDropDowns();
    return (
        <div className="bg-secondary rounded p-4">
            <div className="d-flex flex-row">
                <a
                    href="#"
                    className="mr-auto my-3 my-lg-auto "
                    onClick={(e) => {
                        e.preventDefault();
                        changeNumberOfStops((stops) => stops + 1);
                    }}
                >
                    <img
                        className="img img-fluid"
                        src="./static/images/icons/dodaj_1.png"
                        alt="add"
                    />
                </a>
                <form action="#" method="GET" className="d-flex flex-column">
                    <DropDown
                        point={start}
                        name="start"
                        changePoint={changeStart}
                        isGroup={true}
                    />
                    {newStopsDropDown}
                    <DropDown
                        point={destination}
                        name="destination"
                        changePoint={changeDestination}
                        isGroup={true}
                    />
                </form>
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
        </div>
    );
}

export default MapSearch;
