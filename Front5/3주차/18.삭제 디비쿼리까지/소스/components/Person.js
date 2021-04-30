import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    console.log('person constructor');
    super(props);
    this.state = {
      name:this.props.name,
      age:this.props.age,
      height:this.props.height
    }
  }

  deletePersonInfo=()=>{
    alert("정보 삭제(person)");
    const {name}=this.state;
    this.props.deletePersonInfo(name);
  }

  UpdatePersonInfo=()=>{
    alert("정보 수정(person)");
    this.props.UpdatePersonInfo();
  }

  render() {
    return(
      <div>
        <hr/>
        <div>이름:{this.props.name}</div>
        <div>나이:{this.props.age}</div>
        <div>키:{this.props.height}</div>
        <button onClick={this.deletePersonInfo}>삭제</button>
        <button onClick={this.UpdatePersonInfo}>수정</button>
      </div>
    )
  }
}

export default Person;