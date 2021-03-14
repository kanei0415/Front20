import React, { Component } from 'react';

class Person extends Component{

  constructor(props)
  {
    super(props);

  }

  handleDelete=(e)=>{
    alert("Person의 삭제 함수");
    const id =[e.target.name];
    this.props.handleDelete(id)
  }

  handleUpdate=(e)=>{
    alert("Person의 수정 함수");
  }

  render(){

    return(
      <div>
          <hr/>
          <div>{this.props.id}</div>
          <div>{this.props.name}</div>
          <div>{this.props.age}</div>
          <div>{this.props.phone}</div>
          <div>
              <button onClick={this.handleDelete} name={this.props.id}>삭제</button>
              <button onClick={this.handleUpdate}>수정</button>
          </div>
      </div>
    );
  }
}

export default Person;

