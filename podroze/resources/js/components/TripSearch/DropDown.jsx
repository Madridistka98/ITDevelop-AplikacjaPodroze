// @flow
import React, { useState, useEffect, type Node } from "react";
import Axios from "axios";

export type Props = {
    point: string,
    name: string,
    changePoint: (string) => void,
};

type Destination = {
    country: string,
    city: string,
    ID: number,
};

function DropDown(props: Props): Node {
    const { point, name, changePoint } = props;
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

    useEffect(() => {
        if (point.length == 0) return;
        Axios.get(`/api/destinations/${point}`)
            .then((res) => {
                let points: Array<Destination> = res.data;
                if (points.length > 0) {
                    console.log(points);
                    dropdown = (
                        <div
                            className="dropdown-menu"
                            aria-labelledby={name + "Drop"}
                        >
                            {points.map((point) => {
                                return (
                                    <a
                                        key={point.ID}
                                        className="dropdown-item"
                                        href="#"
                                    >
                                        {`${point.city},  ${point.country}`}
                                    </a>
                                );
                            })}
                        </div>
                    );
                    console.log(dropdown);
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
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [point]);
    return (
        <div className="col-12 col-lg-3 dropdown">
            {input}
            {dropdown}
        </div>
    );
}

export default DropDown;
