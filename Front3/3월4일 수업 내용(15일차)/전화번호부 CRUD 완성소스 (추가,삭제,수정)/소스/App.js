import React, { Component } from 'react';
import Person from "./components/Person";
import InputForm from "./components/InputForm";

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state={
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
        }
        ,
        {
        id:3,
        name:'송중기',
        age:22,
        phone:'010-5356-4464'
        }
        
      ]
    }
  }

  handleCreate=(id,name,age,phone)=>{
    alert("App의 create");

    const data={id:id,name:name,age:age,phone:phone}
    const {phoneList} = this.state;
    this.setState({
      phoneList:phoneList.concat(data)
    })

    this.setState({
      cur_id:this.state.cur_id++
    })
  }

  handleDelete=(input)=>{
    alert("app쪽 호출:"+input+"삭제!");
    this.setState({phoneList:
      this.state.phoneList.filter(info => info.id != input)
    })
  }

  handleUpdate=(id,name,age,phone)=>{
    alert("app쪽 호출:"+id+"번 수정!");

    console.log(id);
    console.log(name);
    console.log(age);
    console.log(phone);

    const {phoneList} = this.state;
    var data=new Object();
    data.id=id;
    data.name=name;
    age=parseInt(age);
    data.age=age;
    data.phone=phone;
    
    console.log("data.id",data.id);
    console.log("data.name",data.name);
    console.log("data.age",data.age);
    console.log("data.phone",data.phone);
    
    //const modifiedArray = phoneList.map(item => item.id === id? alert("찾음!"):alert("못찾음!"));
    const modifiedArray = phoneList.map(item => item.id === id? ({...item,...data}):item);
    this.setState({
      phoneList:modifiedArray
    })
  }

  render() {
    const {phoneList}=this.state;
    var result = phoneList.map( 
      (obj,index)=>(<Person key={index} id={obj.id} name={obj.name} age={obj.age} 
        phone={obj.phone} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}></Person>));
    return (
      <div>
        <InputForm id={this.state.cur_id} handleCreate={this.handleCreate}></InputForm>
        {result}
      </div>
    );
  }
}

export default App;