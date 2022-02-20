import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disableSquare } from '../redux/actions';
import {Board} from './Board'
import {Game} from './Game'

export function Square(props){
  const { squares } = useSelector(state => state);
  const thisSquare = squares[props.value];
  const dispatch = useDispatch();
  // const [squareState, setSquareState]= useState({
  //     squaredisabled: false
  // })

  // if (this.state.Disabled) return

  let color = 'color'
    if (props.whoClicked === '1'){color='red'}
    else if (props.whoClicked === '2'){color='yellow'}
  return (
    <div className="square" onClick={() => dispatch(disableSquare(props.value))} >
      <div className={color} onClick={props.onClick}  >{props.whoClicked} </div>
      {props.value}
      
    </div>
  )
}
  
// squareDisabled={props.squareDisabled}
