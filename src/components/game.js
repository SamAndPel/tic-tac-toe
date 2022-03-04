import React from "react";
import Board from "./board";
import Preview from "./preview";
import "./game.css";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null), winner: null }],
            currentStep: 0,
            xToPlay: true
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.currentStep + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (current.winner || squares[i]) return;
        squares[i] = this.state.xToPlay ? "X" : "O";
        this.setState({
            history: history.concat([{ squares: squares, winner: this.isWinner(squares) }]),
            currentStep: history.length,
            xToPlay: !this.state.xToPlay,
        });
    }

    isWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return ({
                    winningChar: squares[a],
                    winningLine: [a, b, c]
                });
            }
        }
        if (squares.includes(null)) {
            return null;
        } else {
            return ({ winningChar: "draw", winningLine: [] });
        }
    }

    jumpTo(step) {
        this.setState({
            currentStep: step,
            xToPlay: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history.slice();
        const current = history[this.state.currentStep];

        const moves = history.map((_, move) => {
            return (
                <li key={move}>
                    <button className="game-timeline-button" onClick={() => this.jumpTo(move)}>
                        {move ? "Go to move #" + move : "Go to game start"}
                    </button>
                    <Preview gameState={history[move]} />
                </li>
            )
        });

        let status;
        if (current.winner) {
            status = "Winner: " + current.winner.winningChar;
        } else {
            status = "Next player: " + (this.state.xToPlay ? "X" : "O");
        }

        const currentStep = "Currently at move: " + this.state.currentStep;

        return (
            <div className="game">
                <Board gameState={current} onClick={(i) => this.handleClick(i)} />
                <div className="game-info">
                    <p>{status}</p>
                    <p>{currentStep}</p>
                    <ol className="game-timeline">{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;