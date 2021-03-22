// @flow
import React, { type Node } from "react";

type Props = {
    day: number,
    month: number,
    year: number,
    selectedDay: Date,
    changeSelectedDay: (Date) => void,
};

function Day(props: Props): Node {
    const { day, month, year, selectedDay } = props;
    const thisDate = new Date(year, month, day);
    const isSelected =
        selectedDay.toDateString() == thisDate.toDateString() ? true : false;

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
            <a
                href="#"
                className="m-5"
                onClick={(e) => {
                    e.preventDefault();
                    props.changeSelectedDay(thisDate);
                }}
            >
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
