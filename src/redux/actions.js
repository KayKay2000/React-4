export const squareClicked = (index) => {
  return {
    type: 'SQUARE_CLICKED',
    index
  }
}

export const updateMessage = (message) => {
  return {
    type: 'UPDATE_MESSAGE',
    message
  }
}

export const newGame = () => {
  return {
    type: 'NEW_GAME',
    
  }
}