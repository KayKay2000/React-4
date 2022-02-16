import React, { useReducer } from 'react'
import ConnectReducer from '../redux/reducer'
import { VStack, Button, Text } from '@chakra-ui/react'
import Board from '../Components/Board'
import  Row from '../Components/Row'


// const initialState = {
//   player1: 1,
//   player2: 2,
//   currentPlayer: 1,
//   board: [
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//   ],
//   gameOver: false,
//   message: ''
// }

function Twoplayer() {
  // const [gameState, dispatchGameState] = useReducer(ConnectReducer, initialState)

  // const play = (c) => { }

  return (
    <>
      <VStack spacing="3rem">
        {/* <Text>{gameState.message}</Text> */}
        {/* <table>
          <tbody> */}
            {/* {gameState.board.map((row, i) => {
              return <Row key={i} row={row} play={play} />
            })} */}
            <Board />
          {/* </tbody>
        </table> */}
        <Button size="lg" colorScheme="red" >New Game</Button>
      </VStack>
    </>
  )
}

export default Twoplayer