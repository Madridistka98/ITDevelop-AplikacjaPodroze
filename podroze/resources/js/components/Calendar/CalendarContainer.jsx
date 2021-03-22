// @flow
import React, { useState, type Node } from "react";
import Calendar from "./Calendar";
import Trip from "./Trip";
function CalendarContainer(): Node {
    const [selectedDay, changeSelectedDay] = useState(new Date());
    return (
        <div className="container">
            <Trip selectedDay={selectedDay} />
            <Calendar
                date={new Date()}
                selectedDay={selectedDay}
                changeSelectedDay={changeSelectedDay}
            />
        </div>
    );
}

export default CalendarContainer;
