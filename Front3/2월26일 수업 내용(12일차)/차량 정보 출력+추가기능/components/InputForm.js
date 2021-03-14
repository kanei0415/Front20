import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);

    this.state={
        name:'',
        price:0,
        year:0,
    }   
  }

  handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
  }
  handleCreate=(e)=>{
      alert("InputForm의 create");
      const {name,price,year}=this.state;//비구조화할당
      this.props.handleCreate(name,price,year);
      //App쪽의 handleCreate함수
  }
 
  render(){
  return(
      <div>
          <input type="text" placeholder="차종입력" onChange={this.handleChange} name="name"></input>
          <input type="text" placeholder="가격입력" onChange={this.handleChange} name="price"></input>
          <input type="text" placeholder="년식입력" onChange={this.handleChange} name="year"></input>
          <button onClick={this.handleCreate}>추가</button>
      </div> 
    );
  }
}

export default InputForm;

