import React from 'react'
import {Board} from './Board'
import {Game} from './Game'

export class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  
  render() {
    // if (!this) return null
    let color = 'color'
    if (this.state.value === '1'){color='red'}
  else if (this.state.value === '2'){color='yellow'}
  return (
    <div className="square">
      <div className={color} onClick={() => this.setState({value:'1'})}></div>
      {/* {this.state.value} */}
      
    </div>
  )
}
}

