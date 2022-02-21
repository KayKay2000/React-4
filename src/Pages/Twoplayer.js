import React from 'react'
import { VStack, Heading } from '@chakra-ui/react'
import Board from '../Components/Board'
import '../App.css'


function Twoplayer() {

  return (
    <div className='background'>
      <VStack spacing="3rem">
        <Heading className='Title'>Two Player</Heading>
            <Board />
      </VStack>
    </div>
  )
}

export default Twoplayer