import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
      className="child"
      style={{ backgroundColor: this.props.color }}
      // style={{backgroundColor: "#FFF"}}
      //   className="child"
      //   style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }
}

export default Child
