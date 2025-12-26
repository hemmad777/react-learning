import React from "react";

class Car extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>I am a {this.props.model} car</h1>
    )
  }
}

export default Car;