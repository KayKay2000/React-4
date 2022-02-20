import React, { useState, } from 'react';
// import { useReducer } from 'react';
// import { Row } from './Row';
import { Button, Text } from '@chakra-ui/react'
import '../App.css'
import { Square } from './Square';


//change to useState
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(42).fill(null),
            player1Turn: true,
            // player1Turn: null,
            whoClicked: null,
            playerOneSquares: [],
            playerTwoSquares: [],
            message: '',
            clickDisabled: false 

        }
    }
    //action?

    handleClick1() {
        this.setState({
            clickDisabled: false,
            message: ''
        })
    }
    handleClick2(i) {
        if (this.state.clickDisabled) return
        
        
        const squares = [...this.state.squares];
        squares[i] = this.state.player1Turn ? '1' : '2';

        let playerOneSquares = [...this.state.playerOneSquares]
        let playerTwoSquares = [...this.state.playerTwoSquares]

        // if (squares[i] === '1' || '2'){
        //     this.setState({
        //         clickDisabled: true
        // })}

        if (squares[i] === '1') {
            playerOneSquares.push(i)
            // console.log(playerOneSquares)
        }
        else if (squares[i] === '2') {
            playerTwoSquares.push(i)
            // console.log(playerTwoSquares)
        }

        this.setState({
            squares,
            player1Turn: !this.state.player1Turn,
            playerOneSquares,
            playerTwoSquares,
        })

    }
    



    renderSquare(i) {
        return <Square value={i} whoClicked={this.state.squares[i]} onClick={() => this.handleClick2(i)} />;
    }


    render() {
        // function findMatch(moves, plus) {
        //     let win = false;
        //     moves.forEach(move => {
        //         const match1 = findPlusNumber(move, moves, plus);
        //         if (match1) {
        //             const match2 = findPlusNumber(match1, moves, plus);
        //             if (match2) {
        //                 const match3 = findPlusNumber(match2, moves, plus);
        //                 if (match3) {
        //                     win = true;
        //                 }
        //             }
        //         }
        //     })
        //     return win;
        // }

        // function findPlusNumber(coordinate, array, plus) {
        //     return array.find(otherCoordinates => otherCoordinates === coordinate + plus);
        // }

        // console.log(findMatch(this.state.playerOneSquares, 7));
        // console.log(findMatch(this.state.playerTwoSquares, 7));
        // console.log(findMatch(this.state.playerOneSquares, -6));
        // console.log(findMatch(this.state.playerTwoSquares, -6));
        // console.log(findMatch(this.state.playerOneSquares, +8));
        // console.log(findMatch(this.state.playerTwoSquares, +8));
        // console.log(findMatch(this.state.playerOneSquares, 1));
        // console.log(findMatch(this.state.playerTwoSquares, 1));

        if (findMatch(this.state.playerOneSquares, 7) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 1 wins!',
                clickDisabled: true})
        }
        else if (findMatch(this.state.playerTwoSquares, 7) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 2 wins!',
                clickDisabled: true})
        }
        if (findMatch(this.state.playerOneSquares, -6) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 1 wins!',
                clickDisabled: true})
        }
        else if (findMatch(this.state.playerTwoSquares, -6) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 2 wins!',
                clickDisabled: true})
        }
        if (findMatch(this.state.playerOneSquares, 8) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 1 wins!',
                clickDisabled: true})
        }
        else if (findMatch(this.state.playerTwoSquares, 8) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 2 wins!',
                clickDisabled: true})
        }
        if (findMatch(this.state.playerOneSquares, 1) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 1 wins!',
                clickDisabled: true})
        }
        else if (findMatch(this.state.playerTwoSquares, 1) === true) {
            this.setState({  
                squares: Array(42).fill(null),
                player1Turn: true,
                whoClicked: null,
                playerOneSquares: [],
                playerTwoSquares: [],
                message: 'Player 2 wins!',
                clickDisabled: true})
        }    

        // if (this.state.gameOver === true) {
        //     alert('You won!')
        // }





        //    const [playerOneSquares, setPlayerOneSquares] = useState([])
        // const connect4Clone = (board) => [
        //     [...board[0]],
        //     [...board[1]],
        //     [...board[2]],
        //     [...board[3]],
        //     [...board[4]],
        //     [...board[5]],
        // ]
        // const play = (c) => {
        //     let board = connect4Clone(this.state.squares)
        //     for (let r = 5; r >= 0; r--) {
        //         if (!board[r][c]) {
        //             board[r][c] = this.state.whoClicked
        //             break
        //         }
        //     }
        // }

        const status = 'Next player: ' + (this.state.player1Turn ? '1' : '2');

        return (
            <div>
                <div className="status">{status}</div>
                <div className="message">{this.state.message}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                </div>
                <div className="board-row">
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                </div>
                <div className="board-row">
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                </div>
                <div className="board-row">
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                </div>
                <div className="board-row">
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                </div>
                <Button size="lg" colorScheme="red" onClick={() => this.handleClick1()} >New Game</Button>
            </div>
            
        );
    }
}

export default Board