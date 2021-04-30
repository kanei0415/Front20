import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);

    this.state={
        name:'',
        age:'',
        height:'',
    }   
  }

  hadleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleCreate=(e)=>{
    alert("InputForm쪽 추가함수");
    const {name,age,height}=this.state;
    this.props.handleCreate(name,age,height);
  }

  render(){
  return(
      <div>
          <input type="text" placeholder="이름입력" onChange={this.hadleChange} name="name"></input>
          <input type="text" placeholder="나이입력" onChange={this.hadleChange} name="age"></input>
          <input type="text" placeholder="키입력" onChange={this.hadleChange} name="height"></input>
          <button onClick={this.handleCreate}>추가</button>
      </div> 
    );
  }
}

export default InputForm;

