import React, { Component } from 'react';
import Person from "./components/Person";
import InputForm from "./components/InputForm";

class App extends Component{

  constructor(props)
  {
    super(props);

    this.state=
    {
      cur_id:4,
      phoneList:[
        {
          id:1,
          name:'이민호',
          age:20,
          phone:'010-2506-7554'
        },
        {
          id:2,
          name:'정채연',
          age:21,
          phone:'010-2533-4456'
        },
        {
          id:3,
          name:'송중기',
          age:22,
          phone:'010-5356-4464'
        }
      ]
    }
  }

  handleCreate=(name,age,phone)=>{
    alert("App의 추가함수");
    const {cur_id}=this.state;
    const data ={id:cur_id,name:name,age:age,phone:phone};
    this.setState({
      cur_id:cur_id+1
    })

    const {phoneList}=this.state;
    this.setState({
      phoneList:phoneList.concat(data)
    })

  } 

  handleDelete=(input)=>{
    alert("App의 삭제 함수");
    const {phoneList}=this.state;
    this.setState({
      phoneList:phoneList.filter(info=>info.id != input)
    })
  }

  handleUpdate=(e)=>{
    alert("App의 수정 함수");
  }

  render(){
    const {phoneList}=this.state;
    const result = phoneList.map( (data,index)=><Person id={data.id} 
    name={data.name} age={data.age} phone={data.phone}
    handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/> )
    return(
      <div>
        <InputForm handleCreate={this.handleCreate}></InputForm>
        {result}
      </div>
    );
  }
}

export default App;

