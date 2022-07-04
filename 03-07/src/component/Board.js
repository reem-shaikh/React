import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, winningSquares }) => (
  <div className="board">
    {squares.map((square, i) => (
      // rendering each square in the game and passing squares and onClick prop to it 
      <Square key={i} value={square} winningSquares={winningSquares} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;