import * as React from "react";
import "./PopularDestination.scss";
// @flow
type Props = {
    image: string,
    name: string,
};

function PopularDestination(props: Props): Node {
    const { image, name } = props;
    return (
        <div className="flex-grow-1 destination mx-2 my-2 my-md-0 position-relative">
            <img
                className="img img-fluid rounded-left"
                src={image}
                alt={name}
            />
            <div className="destination__description d-flex w-100">
                <div className="ml-auto mr-4 my-auto">
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                    </a>
                </div>
                <a href="#" className="d-block my-auto mr-3 ">
                    <h3 className="text-white font-weight-bold my-auto">
                        {name}
                    </h3>
                </a>
            </div>
        </div>
    );
}

export default PopularDestination;
