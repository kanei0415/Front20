import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);

    this.state={
      name:'',
      age:'',
      phone:''
      }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleCreate=(e)=>{
    alert("InputForm의 추가함수");
    const {name,age,phone}=this.state;
    this.props.handleCreate(name,age,phone);
  }  

  render(){
  return(
      <div>
        <input type="text" placeholder="이름입력" onChange={this.handleChange} name="name"></input>
        <input type="text" placeholder="나이입력" onChange={this.handleChange} name="age"></input>
        <input type="text" placeholder="전화번호입력" onChange={this.handleChange} name="phone"></input>
        <button onClick={this.handleCreate}>추가</button>
      </div> 
    );
  }
}

export default InputForm;

