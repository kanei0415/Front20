import React, { Component } from 'react';

class Person extends Component {
  constructor(props) {
    console.log('person constructor');
    super(props);
    this.state = {
      edit:false,
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
    if(this.state.edit==true){
      //수정모드인 상태에서 눌리면 그값으로 수정하라는 소리
      const {name,age,height}=this.state;
    this.props.UpdatePersonInfo(name,age,height);
    }

    this.setState({
      edit:!this.state.edit
    })
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    //<input defaultValue={this.props.id} />
    const{edit}=this.state;
    if(edit===true){
      return(
        <div>
          <hr/>
          <div>이름:{this.state.name}</div>
          <div>나이:<input defaultValue={this.state.age} onChange={this.handleChange} name="age"/></div>
          <div>키:<input defaultValue={this.state.height} onChange={this.handleChange} name="height"/></div>
          <button onClick={this.deletePersonInfo}>삭제</button>
          <button onClick={this.UpdatePersonInfo}>수정</button>
        </div>
      )
    } else if(edit===false){
      return(
        <div>
          <hr/>
          <div>이름:{this.state.name}</div>
          <div>나이:{this.state.age}</div>
          <div>키:{this.state.height}</div>
          <button onClick={this.deletePersonInfo}>삭제</button>
          <button onClick={this.UpdatePersonInfo}>수정</button>
        </div>
      )
    }

  }
}

export default Person;