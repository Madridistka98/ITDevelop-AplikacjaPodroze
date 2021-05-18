// @flow
import React, { useState, type Node } from "react";

type Props = {
    objects: Array<{}>,
    changeSelected: {},
};

function Slider(props: Props): Node {
    function getObjects(objects) {
        let temp = [];
        for (const city in objects) {
            if (objects[city].length < 1) {
                continue;
            }
            objects[city].forEach((item) => {
                temp.push(item);
            });
        }
        return temp;
    }
    const slidesCount = 3;
    const [index, changeIndex] = useState(0);
    const items = getObjects(props.objects);
    const changeSelected = props.changeSelected;

    function showSlides() {
        let slides = [];
        console.log(items);
        for (
            let i = index, counter = 0;
            counter < slidesCount;
            counter++, i++
        ) {
            const slide = (
                <div key={i} className="slide bg-secondary flex-grow-1 p-3 m-3 d-flex">
                    <img
                        src={items[i].image}
                        alt="image"
                        className="img img-fluid w-75 h-75 mr-2"
                    />
                    <a
                        href="#"
                        onClick={() => {
                            changeSelected(items[i]);
                        }}
                    >
                        <h3>{items[i].name}</h3>
                    </a>
                </div>
            );
            slides.push(slide);
        }
        return slides;
    }

    function changeClickIndex(change) {
        changeIndex((index) => {
            if (index + change < 0) {
                return items.length - slidesCount;
            }
            if (index + change + slidesCount >= items.length) {
                return 0;
            }
            return index + change;
        });
    }
    return (
        <div
            id="slider"
            className="d-flex flex-row bg-dark py-1 align-items-center"
        >
            <div className="arrow left-arrow">
                <button
                    className="bg-dark"
                    onClick={() => changeClickIndex(-1)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-caret-left-fill  text-secondary"
                        viewBox="0 0 16 16"
                    >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                </button>
            </div>
            <div className="slides-container flex-grow-1 d-flex flex-row justify-content-around p-2 m-2">
                { items.length > 0 ? showSlides() : ""}
            </div>
            <div className="arrow right-arrow">
                <button className="bg-dark" onClick={() => changeClickIndex(1)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-caret-right-fill text-secondary"
                        viewBox="0 0 16 16"
                    >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Slider;
