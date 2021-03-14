import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);

    this.state={
        id:'',
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
      alert("InputForm의 create");
      const {id,name,age,phone}=this.state;//비구조화할당
      this.props.handleCreate(this.props.id,name,age,phone);
      //App쪽의 handleCreate함수
      this.setState({
        id:'',
        name:'',
        age:'',
        phone:''
      });
  }
 
  render(){
    const {id,name,age,phone}=this.state;
  return(
    
      <div>
          <input type="text" placeholder="이름입력" onChange={this.handleChange} name="name" value={name}></input>
          <input type="text" placeholder="나이입력" onChange={this.handleChange} name="age" value={age}></input>
          <input type="text" placeholder="전화번호입력" onChange={this.handleChange} name="phone" value={phone}></input>
          <button onClick={this.handleCreate}>추가</button>
      </div> 
    );
  }
}

export default InputForm;

