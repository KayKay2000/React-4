import React from 'react'
import Board from './Board'

function Game() {
  return (
    <div className="game">
      <div className="gameboard">
        <Board />
      </div>
      <div className="gamestatus">
      </div>
    </div>
  )
}

export default Game