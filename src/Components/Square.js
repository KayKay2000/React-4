import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { squareClicked } from '../redux/actions';
import { Board } from './Board'
import { Game } from './Game'

export function Square(props) {
  const { squares } = useSelector(state => state);
  const thisSquare = squares[props.value];
  const dispatch = useDispatch();
  const handleSquareClick = () => {
    if (thisSquare.whoClicked || props.winState) return;
    dispatch(squareClicked(props.value));
  }

  let color = 'color'
  if (thisSquare.whoClicked === 1) { color = 'red' }
  else if (thisSquare.whoClicked === 2) { color = 'yellow' }
  return (
    <div className="square" onClick={handleSquareClick} >
      <div className={color} onClick={props.onClick}  >{thisSquare.whoClicked} </div>
      {props.value}

    </div>
  )
}

// squareDisabled={props.squareDisabled}
