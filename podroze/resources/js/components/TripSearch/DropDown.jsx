// @flow
import React, { useState, useEffect, type Node } from "react";
import Axios from "axios";

export type Props = {
    point: string,
    name: string,
    isGroup?: boolean,
    changePoint: (string) => void,
};

type Destination = {
    country: string,
    city: string,
    ID: number,
};

function DropDown(props: Props): Node {
    const { point, name, changePoint, isGroup = false } = props;
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
            value={point}
            autoComplete="off"
            onChange={(e) => {
                changePoint(e.target.value);
            }}
        />
    );

    function selectPoint(e) {
        e.preventDefault();
        changePoint(e.target.text);
    }

    if (points && points.length > 0) {
        dropdown = (
            <div className="dropdown-menu show" aria-labelledby={name + "Drop"}>
                {points.map((point) => {
                    return (
                        <a
                            key={point.ID}
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
                value={point}
                autoComplete="off"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
                onChange={(e) => {
                    changePoint(e.target.value);
                }}
            />
        );
    }

    function changeDestinations() {
        let delay = setTimeout(async () => {
            const response = await Axios.get(`/api/destinations/${point}`);
            changePoints(response.data);
        }, 500);
        return delay;
    }

    useEffect(() => {
        if (
            point.length == 0 ||
            (points.length == 1 &&
                point == points[0].city + ", " + points[0].country)
        ) {
            changePoints([]);
            return;
        }
        let delay = changeDestinations();
        return () => {
            clearTimeout(delay);
        };
    }, [point]);
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
