import React from 'react'
import Oneplayer, { initialState } from '../Pages/Oneplayer'

// for your squares, pass these params in the action:
// square index

    const squareDefaultState = {
        // squareDisabled: false,
        squares: [{square1}, {square2}, {square3}, ...]
    }

    export function setSquareDefaultState(squareDisabled) {
        return {
            type: 'Disablesquare',
            squareDisabled: true
        }
    }

    // !state.squares[action.index].squareDisabled 

export function squareReducer(state = squareDefaultState, action) {
    switch (action.type){
        case 'DISABLE_SQUARE':
            return {
                ...state,
                squares: [ ...state.squares ].splice(action.index, 1, { 
                    ...state.squares[action.index], 
                    squareDisabled: true
                })
            }
            default:
                return state
    }
}



export function findMatch(moves, plus) {
    let win = false;
    moves.forEach(move => {
        const match1 = findPlusNumber(move, moves, plus);
        if (match1) {
            const match2 = findPlusNumber(match1, moves, plus);
            if (match2) {
                const match3 = findPlusNumber(match2, moves, plus);
                if (match3) {
                    win = true;
                }
            }
        }
    })
    return win;
}

export function findPlusNumber(coordinate, array, plus) {
    return array.find(otherCoordinates => otherCoordinates === coordinate + plus);
}




// export default ConnectReducer