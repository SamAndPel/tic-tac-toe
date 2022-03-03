import React from "react";
import Board from "./board";
import "./preview.css";

function Preview(props) {
    return (
        <Board
            squares={props.squares}
            onClick={() => {}}
        />
    );
}

export default Preview;