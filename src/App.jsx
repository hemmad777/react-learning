import React from "react";

class Car extends React.Component{
  constructor(){
    super();
    this.state={color:'red'}
  }
  render(){
    return(
      <h1>I am a {this.state.color} car</h1>
    )
  }
}

export default Car;