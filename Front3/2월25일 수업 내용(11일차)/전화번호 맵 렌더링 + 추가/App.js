import React, { Component } from 'react';
import Person from './components/Person';
import InputForm from './components/InputForm';
class App extends Component{

  constructor(props)
  {
    super(props);

    this.state={
      personList:[
        {name:"이민호",age:20,phone:'010-4025-7298'},
        {name:"정채연",age:21,phone:'010-4024-7358'},
        {name:"송중기",age:22,phone:'010-6454-5655'},
      ]
    }   
  }

  handleCreate=(name,age,phone)=>{
    alert("App의 create");
    const data={name:name,age:age,phone:phone}
    const {personList} = this.state;
    this.setState({
      personList:personList.concat(data)
    })
  }
 
  render(){
    const {personList}=this.state;//비구조화 할당
    var result = personList.map( 
      (obj,index)=>(<Person key={index} name={obj.name} age={obj.age} phone={obj.phone}></Person>));
    //<Person key=0 name="이민호" age=20 phone='010-4025-7298'></Person>
    //<Person key=0 name="정채연" age=21 phone='010-4024-7358'></Person>
    //<Person key=0 name="송중기" age=22 phone='010-6454-5655'></Person>
    return(
      <div>
        <InputForm handleCreate={this.handleCreate}></InputForm>
        
        {result}
      </div> 
    );
  }
}

export default App;

