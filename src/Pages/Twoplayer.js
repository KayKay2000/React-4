import React, { useReducer } from 'react'
import ConnectReducer from '../redux/reducer'
import { VStack, Button, Text, Heading } from '@chakra-ui/react'
import Board from '../Components/Board'
import  Row from '../Components/Row'


function Twoplayer() {

  return (
    <>
      <VStack spacing="3rem">
        <Heading className='Title'>Two Player</Heading>
            <Board />
        {/* <Button size="lg" colorScheme="red" >New Game</Button> */}
      </VStack>
    </>
  )
}

export default Twoplayer