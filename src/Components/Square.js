import React from 'react'
import {Board} from './Board'
import {Game} from './Game'

export function Square(props){
  let color = 'color'
    if (props.value === '1'){color='red'}
    else if (props.value === '2'){color='yellow'}
  return (
    <div className="square">
      <div className={color} onClick={props.onClick}>{props.value}</div>
      
      {props.value}
      
    </div>
  )
}

