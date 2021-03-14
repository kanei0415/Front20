import React, { Component } from 'react';

class Person extends Component {
  
  constructor(props)
  {
    super(props);
    
    this.state={
        toggle:false,
        id:this.props.id,
        name:this.props.name,
        age:this.props.age,
        phone:this.props.phone
    }   
  }

  handleChange=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

  handleDelete=(e)=>{
    alert("삭제할 이름:"+[e.target.name]);
    var id=[e.target.name];
    this.props.handleDelete(id);
  }

  handleUpdate=()=>{
    alert('Person쪽 업데이트!');

    this.setState({
      toggle:!this.state.toggle
    })

    if(this.state.toggle==true)//수정모드 상태에서 수정을 누르면
    {//변경된 사항을 전송해줌
      alert("수정모드 상태에서 수정버튼이 눌림");
      const {id,name,age,phone}=this.state;
      console.log(id,name,age,phone);
      this.props.handleUpdate(id,name,age,phone);
    }

  }

  render() {

    let {id, name,age,phone}=this.props;

    if(this.state.toggle==true)
    {
      return (
        <div>
          <hr/>
          <span>아이디:{id}</span><br/>
          <span>이름:<input defaultValue={name} onChange={this.handleChange} name="name"/></span><br/>
          <span>나이:<input defaultValue={age} onChange={this.handleChange} name="age"/></span><br/>
          <span>전화번호:<input defaultValue={phone} onChange={this.handleChange} name="phone"/></span><br/>
          <span><button onClick={this.handleDelete} name={id}>삭제</button></span>
          <span><button onClick={this.handleUpdate} name={id}>수정</button></span>
        </div>
      );
    }
    else if(this.state.toggle==false)
    {
      return (
        <div>
          <hr/>
          <span>아이디:{id}</span><br/>
          <span>이름:{name}</span><br/>
          <span>나이:{age}</span><br/>
          <span>전화번호:{phone}</span><br/>
          <span><button onClick={this.handleDelete} name={id}>삭제</button></span>
          <span><button onClick={this.handleUpdate} name={id}>수정</button></span>
        </div>
      );
    }

    
  }
}

export default Person;