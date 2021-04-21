import React from "react";
// @flow
type Props = {
    icon: string,
    name: string,
    effect?: callable,
    active?: booleanean,
};

function Button(props: Props) {
    const { icon, name, effect, active } = props;
    return (
        <a
            href="#"
            data-toggle="button"
            className={
                active
                    ? "btn btn-secondary mb-1 mb-sm-0 np-1"
                    : "btn btn-secondary mb-1 mb-sm-0 np-1 active"
            }
            onClick={() => {
                if (effect) effect(name);
            }}
        >
            <img className="img img-fluid p-1" src={icon} alt={name} />
        </a>
    );
}

export default Button;
