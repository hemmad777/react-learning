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

class Garage extends React.Component{
  render(){
    return(
    <>
    <h1>My collections are</h1>
    <Car model="mbw" />
    <Car model="audi" />
    </>
    )
  }
}
export default Garage;