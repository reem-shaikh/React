//main component
import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const Game = () => {

  //9 array elements were keeping track of 
  const [history, setHistory] = useState([Array(9).fill(null)]);

  //what step are we currently on? initially its set to 0
  const [stepNumber, setStepNumber] = useState(0);
  //X will always start first

  const [xIsNext, setXisNext] = useState(true);
  //history is an array of all the steps we've taken 

  const winner = calculateWinner(history[stepNumber]);

  //xo is a constant which denotes whether the next string would be an x or an o in the game 
  //which is the next element on the square?
  const xO = xIsNext ? "X" : "O";


  const handleClick = (i) => {
    //at what point in history are we? 
    //tracking down the history from the beginning to the point were currently at 
    const historyPoint = history.slice(0, stepNumber + 1);
    //current is the current point in our history 
    const current = historyPoint[stepNumber];
    //creating a deep copy of history using spread operators 
    const squares = [...current];
    // if user clicks twice on the same square they played, we dont want to rewrite over it 
    // if there is a winner or square is occupied then return 
    if (winner || squares[i]) return;
    // if game is not over and square has not been clicked before, then select the square
    squares[i] = xO;
    //add the newly added squares with the historypoints, this is how the history would technically be updated 
    setHistory([...historyPoint, squares]);
    //based on how many objects are within historyPoint we can denote the step the user is on, and we update the stepNumber state through this logic 
    setStepNumber(historyPoint.length);
    //we keep toggling X and O in the game 
    setXisNext(!xIsNext);

  };

  // const handleClick = useCallback((i) => {
  //   dispatch({type: 'handleClick', idx: i})
  // }, [dispatch])

  // were setting the current step value 
  const jumpTo = (step) => {
    setStepNumber(step);
    //if its divisibed by 2, it must be on O, otherwise it will be on X, over here were redirecting the user to the step they click on, and based on the button they clicked on, they will be redirected to the previous state 
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      //we render over our entire history state 
      //if move is 0 then display play again 
      const destination = move ? `Go to move #${move}` : "Play again";
      return (
        // were displaying the history li buttons over here, based on whether the move object is true or false 
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <h1>TIC TAC TOE</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <div>
          <h3>Time Travel</h3>
          {renderMoves()}
        </div>
        {/* if the winner state is true and game is not ended, then display the winner, otherwise keep displaying the next player X or O constant */}
        <h3>{winner ? ("Winner: " + winner) : ("Next Player: " + xO)}
        </h3>

      </div>
    </>
  );
};

export default Game;