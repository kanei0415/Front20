import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);

    this.state={
        name:'',
        age:0,
        phone:''
    }   
  }

  handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
  }
  handleCreate=(e)=>{
      alert("InputForm의 create");
      const {name,age,phone}=this.state;//비구조화할당
      this.props.handleCreate(name,age,phone);
      //App쪽의 handleCreate함수
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

