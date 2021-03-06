import React from "react";
import Square from "./square";
import "./board.css"

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.gameState.squares[i]}
                onClick={() => this.props.onClick(i)}
                isHighlighted={this.props.gameState.winner ? this.props.gameState.winner.winningLine.includes(i) : false}
            />
        );
    }

    render() {
        return (
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;