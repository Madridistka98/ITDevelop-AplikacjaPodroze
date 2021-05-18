// @flow
import React, { useState, useEffect, type Node } from "react";
import Axios from "axios";

export type Props = {
    point: Point,
    name: string,
    id: number,
    isGroup?: boolean,
    changePoint: ((Point | Array<Point>) => Point | Array<Point>) => void,
};

type Point = {
    id: number,
    value: string,
};

type Destination = {
    country: string,
    city: string,
    ID: number,
};

function DropDown(props: Props): Node {
    const { point, name, changePoint, isGroup = false } = props;
    const [localPoint: Point | Array<Point>, changeLocalPoint] = useState(
        point
    );
    const [
        points: Array<Destination>,
        changePoints: (Array<Destination>) => void,
    ] = useState([]);
    let dropdown: Node;
    let input: Node = (
        <input
            id={name + "Drop"}
            type="text"
            className="form-control"
            placeholder={name}
            name={name}
            value={localPoint.value}
            data-id={localPoint.id}
            autoComplete="off"
            onChange={(e) => {
                changeLocalPoint((state) => {
                    if (Array.isArray(state)) {
                        const key = parseInt(name.split(":")[1]);
                        const temp = state;
                        temp[key] = {
                            value: e.target.value,
                            id: e.target.dataset.destid,
                        };
                        temp[key];
                        return [...temp];
                    } else
                        return {
                            value: e.target.value,
                            id: e.target.dataset.destid,
                        };
                });
            }}
        />
    );

    function selectPoint(e) {
        e.preventDefault();
        changePoint((state) => {
            if (Array.isArray(state)) {
                const key = parseInt(name.split(":")[1]);
                const temp = state;
                temp[key] = {
                    value: e.target.text,
                    id: e.target.dataset.destid,
                };
                changeLocalPoint([...temp]);
                return [...temp];
            } else {
                changeLocalPoint({
                    value: e.target.text,
                    id: e.target.dataset.destid,
                });
                return {
                    value: e.target.text,
                    id: e.target.dataset.destid,
                };
            }
        });
    }

    if (points && points.length > 0) {
        dropdown = (
            <div className="dropdown-menu show" aria-labelledby={name + "Drop"}>
                {points.map((point) => {
                    return (
                        <a
                            key={point.ID}
                            data-destid={point.ID}
                            className="dropdown-item"
                            href="#"
                            onClick={selectPoint}
                        >
                            {`${point.city},  ${point.country}`}
                        </a>
                    );
                })}
            </div>
        );
        input = (
            <input
                id={name + "Drop"}
                type="text"
                className="form-control"
                placeholder={name}
                name={name}
                value={localPoint.value}
                data-id={localPoint.id}
                autoComplete="off"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
                onChange={(e) => {
                    changeLocalPoint((state) => {
                        if (Array.isArray(state)) {
                            const key = parseInt(name.split(":")[1]);
                            const temp = state;
                            temp[key] = {
                                value: e.target.value,
                                id: e.target.dataset.destid,
                            };
                            temp[key];
                            return [...temp];
                        } else
                            return {
                                value: e.target.value,
                                id: e.target.dataset.destid,
                            };
                    });
                }}
            />
        );
    }

    function changeDestinations() {
        let delay = setTimeout(async () => {
            const response = await Axios.get(
                `/api/destinations/${localPoint.value}`
            );
            changePoints(response.data);
        }, 500);
        return delay;
    }

    useEffect(() => {
        if (
            typeof localPoint == "undefined" ||
            localPoint.length == 0 ||
            (points.length == 1 &&
                localPoint.value == points[0].city + ", " + points[0].country)
        ) {
            changePoints([]);
            return;
        }
        let delay = changeDestinations();
        return () => {
            clearTimeout(delay);
        };
    }, [localPoint]);
    return (
        <div
            className={
                (isGroup ? "form-group mt-1" : " col-lg-3") + " dropdown col-12"
            }
        >
            {input}
            {dropdown}
        </div>
    );
}

export default DropDown;
