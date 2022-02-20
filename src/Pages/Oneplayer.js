import React, { useReducer } from 'react'
import ConnectReducer from '../redux/reducer'
import { VStack, Button, Text, Heading } from '@chakra-ui/react'
import Board from '../Components/Board'
import { Row, connect4Clone } from '../Components/Row'


export default function Oneplayer(){
 
   return (
        <>
          <VStack spacing="3rem">
          <Heading className='Title'>One Player</Heading>
            <Board />
            <Button size="lg" colorScheme="red" >New Game</Button>
          </VStack>
        </>
        

      )
    }
  

