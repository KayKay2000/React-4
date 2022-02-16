import React from 'react'
import { Flex } from '@chakra-ui/react'
import '../App.css'


export const Row = ({row, play}) => {
  return (
    <tr>
      {row.map((cell,i) => {
        return <Cell key={i} value={cell} columnIndex={i} play={play} />
      })}
    </tr>
  )
}

const Cell = ({value, columnIndex, play}) => {
  let color = 'whiteCircle'
  if (value === 1){color='redCircle'}
  else if (value === 2){color='yellowCircle'}
  return (
    <td>
      <Flex justify="center" align="center" className="gameCell" onClick={() => {play(columnIndex)}}>
        <div className="color"></div>
      </Flex>
    </td>
  )
}
// function Row() {
//   return (
//     <div>Row</div>
//   )
// }

// export default Row