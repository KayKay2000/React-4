import React from 'react';
import Oneplayer, { initialState } from '../Pages/Oneplayer';
import { dropSquare, findWinner } from '../gameFunctions';

// for your squares, pass these params in the action:
// square index

const boardDefaultState = {
    winner: null,
    squares: Array(42).fill({
        whoClicked: null
    }),
    // for 'turn', true means that it is player one's turn. 
    turn: true,
    playerOneMoves: [],
    playerTwoMoves: [],
    message: `Player 1's Turn!`
}

export default function squareReducer(state = boardDefaultState, action) {
    switch (action.type) {
        case 'SQUARE_CLICKED':
            const newIndex = dropSquare(action.index, state.squares);
            const newTurn = !state.turn;
            let newPlayerOneMoves = state.turn ? [...state.playerOneMoves, newIndex] : [...state.playerOneMoves];
            let newPlayerTwoMoves = state.turn === false ? [...state.playerTwoMoves, newIndex] : [...state.playerTwoMoves];
            newPlayerOneMoves = newPlayerOneMoves.filter(move => move !== undefined);
            newPlayerTwoMoves = newPlayerTwoMoves.filter(move => move !== undefined);
            let newWinner = state.winner;
            if (findWinner(newPlayerOneMoves, newPlayerTwoMoves)) {
                newWinner = (findWinner(newPlayerOneMoves, newPlayerTwoMoves))
            }
            return {
                ...state,
                winner: newWinner,
                squares: [...state.squares.slice(0, newIndex), {
                    ...state.squares[newIndex],
                    whoClicked: state.turn ? 1 : 2
                }, ...state.squares.slice(newIndex + 1)],
                turn: newTurn,
                playerOneMoves: newPlayerOneMoves,
                playerTwoMoves: newPlayerTwoMoves,
                message: newWinner ?
                    `Player ${newWinner} Wins!`
                    :
                    newTurn ?
                        `Player 1's Turn!`
                        :
                        `Player 2's Turn!`
            }
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}