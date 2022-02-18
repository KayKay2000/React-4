import React from 'react'
import {Board} from './Board'
import {Game} from './Game'

export function Square(props, play){
  let color = 'color'
    if (props.whoClicked === '1'){color='red'}
    else if (props.whoClicked === '2'){color='yellow'}
  return (
    <div className="square">
      <div className={color} onClick={props.onClick} play={play}>{props.whoClicked}</div>
      {props.value}
      
    </div>
  )
}
  

