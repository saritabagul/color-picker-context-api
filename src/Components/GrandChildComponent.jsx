//using functional component
// import { useContext } from "react";
// import { colorContext } from "../context";
//                            //props 
// const GrandChildComponent = () => {
//   const value= useContext(colorContext);
//   return (
//   // <p style={{ color: props.color }}>Color: {props.color}</p>
//   <p style={{ color: value.color }}>Color: {value.color}</p>
// )};

import React from "react";
import { colorContext } from "../context";
// export default GrandChildComponent;

//using class component
//similar we can used in functional component too

                           //props 
class GrandChildComponent extends React.Component {
   
  render(){
    return (
      <colorContext.Consumer>
      {(value) => <p style={{ color: value.color }}>Color: {value.color}</p> }
      </colorContext.Consumer>
    )
  }
  };

export default GrandChildComponent;
