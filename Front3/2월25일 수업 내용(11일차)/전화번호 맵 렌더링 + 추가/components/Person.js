import React, { Component } from 'react';
import "../css/Person.css"
class Person extends Component{
  render(){
    return (
      <div id="personWrap">
        <div id="nameDiv">
        이름:{this.props.name}
        </div>
        <div id="ageDiv">
        나이:{this.props.age}
        </div>
        <div id="phoneDiv">
        전화번호:{this.props.phone}
        </div>
      </div>
    );  
  }; 
}

export default Person;