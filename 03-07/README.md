# Tic Tac toe 

Deployed Link [Tic-Tac-Toe](https://glittering-jelly-4a17b2.netlify.app/).

## The interface

![](jui.PNG)

## Features 
- [x] Display the location for each move in the history list.
- [x] Win, lose and draw functionalities implemented
- [x] Mobile Responsive Design 

## The Basic Code structure:
- I've specified the main logic in `Game.js`, and passing `squares` and `onClick` prop to `Board.js` 
- Board.js maps over the `squares` props, retreives each square and further passes the `onClick` prop to Square.js (so technically, whenever a square is clicked it will call the `onClick` prop which is a function `handleClick` defined within `Game.js`)
- I've also defined a helperfunction `calculateWinner` in `helperfunction.js` which contains all the possible combinations required for a user to win the game, we import this function in `Game.js` to calculate whether either of the players have won the game.
  


