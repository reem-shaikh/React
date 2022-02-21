import React, { useState } from 'react';
import './TicTacToe.css';
//rafce 

const TicTacToe = () => {
    //by default, first player will use X 
	const [turn, setTurn] = useState('x');
    //to track which items are being clicked we use cell state 
	const [cells, setCells] = useState(Array(9).fill(''));
    //array of 9 items, its set to empty by default 
	const [winner, setWinner] = useState();

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
        //handling double click 
        //if cells[num] is not an empty string, that is it already contains a character 
        //then you display the alert instead of toggling the values 
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

        //copying each element of cell into squares 
		let squares = [...cells];

        //toggling the states
		if (turn === 'x') {
			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		checkForWinner(squares);

		setCells(squares);
        //to maintain item in the array 'squares', instead of going back to its previos state 
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

    //each time you click on the cell handleClick is invoked 
	const Cell = ({ num }) => {
        //num is passed as a prop
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className='container'>
			<table>
                {/* 3-3 grid */}
                {/* adding dyanamic dfunctionality to turn */}
				Turn: {turn}
				<tbody>
					<tr>
                        {/* were numbering them to track which cell is being clicked on */}
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default TicTacToe;