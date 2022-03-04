import React from "react";
import "./square.css";

function Square(props) {
    return (
        <button className={props.isHighlighted ? "square highlighted" : "square"} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;