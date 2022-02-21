import React from 'react'
import { VStack, Heading } from '@chakra-ui/react'


function Instructions() {
  return (
    <div className='background'>
      <VStack spacing="3rem">
        <div className='content'>
          <Heading className='Title'>INSTRUCTIONS</Heading>
          <ul className='instructions'>
          <li>Get FOUR tokens in a row! The first player who gets four tokens in a row wins!</li>
          <li>Player One goes first with the light blue token.</li>
          <li>Player Two goes second with the dark gray token.</li>
          </ul>
        </div>
      </VStack>
    </div>
  )
}

export default Instructions

