// @flow
import React, { type Node } from "react";
import Day from "./Day";

function Calendar(): Node {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    function getMonthDays(month: string | number): number {
        function leapYear(year: number): boolean {
            return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        }
        let days = 0;
        switch (month) {
            case 0 ||
                2 ||
                4 ||
                6 ||
                7 ||
                9 ||
                11 ||
                "January" ||
                "March" ||
                "May" ||
                "July" ||
                "August" ||
                "October" ||
                "December":
                days = 31;
                break;
            case 1 || "February":
                days = leapYear(currentDate.getFullYear()) ? 29 : 28;
                break;
            case 3 ||
                5 ||
                8 ||
                10 ||
                "April" ||
                "June" ||
                "September" ||
                "November":
                days = 30;
                break;
        }

        return days;
    }

    const currentMonthDays = getMonthDays(currentMonth);

    const calendarRows = [];

    for (let rows = 0; rows < Math.ceil(currentMonthDays / 7); rows++) {
        // debugger;
        const rowDays = [];
        for (
            let day = 1;
            day <= 7 && day + rows * 7 <= currentMonthDays;
            day++
        ) {
            rowDays.push(
                <Day
                    day={day + rows * 7}
                    month={currentMonth}
                    year={currentYear}
                />
            );
        }
        calendarRows.push(
            <div className="d-flex flex-row my-2 flex-wrap">{rowDays}</div>
        );
    }
    return <div className="my-4 d-flex flex-column">{calendarRows}</div>;
}

export default Calendar;
