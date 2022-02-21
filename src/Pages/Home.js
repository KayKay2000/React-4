import React from 'react'
import { VStack, Heading } from '@chakra-ui/react'

function Home() {
  return (
    <div className='background'>
      <VStack spacing="3rem">
        <div className='content'>
          <Heading className='Title'>WELCOME TO REACT 4 </Heading>
          <h4>Go to the instructions page to learn how to play the game.</h4>
        </div>
      </VStack>
    </div>
  )
}

export default Home