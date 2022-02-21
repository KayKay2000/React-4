import React from 'react'
import { VStack, Heading } from '@chakra-ui/react'
import Board from '../Components/Board'


export default function Oneplayer(){
 
   return (
        <div className='background'>
          <VStack spacing="3rem">
          <Heading className='Title'>One Player</Heading>
            <Board />
          </VStack>
        </div>
        

      )
    }
  

