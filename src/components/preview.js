import React from "react";
import Board from "./board";
import "./preview.css";

function Preview(props) {
    return (
        <Board
            gameState={props.gameState}
            onClick={() => {}}
        />
    );
}

export default Preview;