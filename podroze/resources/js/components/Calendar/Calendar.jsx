// @flow
import React, { useState, type Node } from "react";
import Day from "./Day";

type Props = {
    date: Date,
    selectedDay: Date,
    changeSelectedDay: (Date) => void,
};

function Calendar(props: Props): Node {
    const [currentDate, changeCurrentDate] = useState(props.date);
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    function getMonthDays(month: string | number): number {
        function leapYear(year: number): boolean {
            return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
        }
        let days = 0;
        switch (month) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
            case "January":
            case "March":
            case "May":
            case "July":
            case "August":
            case "October":
            case "December":
                {
                    days = 31;
                }
                break;
            case 1:
            case "February": {
                days = leapYear(currentDate.getFullYear()) ? 29 : 28;
                break;
            }
            case 3:
            case 5:
            case 8:
            case 10:
            case "April":
            case "June":
            case "September":
            case "November": {
                days = 30;
                break;
            }
        }

        return days;
    }

    const currentMonthDays = getMonthDays(currentMonth);

    const calendarRows = [];

    for (let rows = 0; rows < Math.ceil(currentMonthDays / 7); rows++) {
        const rowDays = [];
        for (
            let day = 1;
            day <= 7 && day + rows * 7 <= currentMonthDays;
            day++
        ) {
            rowDays.push(
                <Day
                    key={day + rows * 7}
                    day={day + rows * 7}
                    month={currentMonth}
                    year={currentYear}
                    selectedDay={props.selectedDay}
                    changeSelectedDay={props.changeSelectedDay}
                />
            );
        }
        calendarRows.push(
            <div key={rows} className="d-flex flex-row my-2 flex-wrap">
                {rowDays}
            </div>
        );
    }
    function changeMonth(num: number) {
        changeCurrentDate((date) => {
            return new Date(date.setMonth(date.getMonth() + num));
        });
    }
    return (
        <>
            <div className="div d-flex flex-row justify-content-between my-3">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        changeMonth(-1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-arrow-left-circle"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                        />
                    </svg>
                </a>
                <div>
                    <h3>
                        {currentDate.toLocaleString("en-GB", {
                            month: "long",
                            year: "numeric",
                        })}
                    </h3>
                </div>
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        changeMonth(1);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                        />
                    </svg>
                </a>
            </div>
            <div className="my-4 d-flex flex-column">{calendarRows}</div>
        </>
    );
}

export default Calendar;
