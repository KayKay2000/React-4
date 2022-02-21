import { useDispatch, useSelector } from 'react-redux'
import { squareClicked } from '../redux/actions';


export function Square(props) {
  const { squares } = useSelector(state => state);
  const thisSquare = squares[props.value];
  const dispatch = useDispatch();
  const handleSquareClick = () => {
    // makes sure a square can't be clicked more than once
    if (thisSquare.whoClicked || props.winState) return;
    dispatch(squareClicked(props.value));
  }

  let color = 'color'
  if (thisSquare.whoClicked === 1) { color = 'lightBlue' }
  else if (thisSquare.whoClicked === 2) { color = 'darkGray' }
  return (
    <div className="square" onClick={handleSquareClick} >
      <div className={color} onClick={props.onClick}  > </div>
      {/* {props.value} */}

    </div>
  )
}

//{thisSquare.whoClicked}