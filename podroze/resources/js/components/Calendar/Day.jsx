// @flow
import React, { type Node } from "react";

function Day(props): Node {
    const { day, month, year, isSelected = false } = props;

    function isWeekend(): boolean {
        const currentDay = new Date(year, month, day).getDay();
        return currentDay == 0 || currentDay == 6;
    }
    return (
        <div
            className={
                (isWeekend() ? "bg-secondary" : "bg-info") +
                "  d-flex flex-column m-1 p-4 position-relative "
            }
        >
            <a href="#" className="m-5">
                <p className="h1 text-muted calendar__day-number">{day}</p>
                {isSelected && (
                    <img
                        src="./static/images/Logo_dinozaur.png"
                        alt="dino"
                        className="img img-fluid position-absolute w-50 "
                    />
                )}
            </a>
        </div>
    );
}

export default Day;
