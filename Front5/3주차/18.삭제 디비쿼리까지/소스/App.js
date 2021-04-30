import React, { Component } from 'react';
import axios from 'axios';
import Person from './components/Person.js';

let result;

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      name:'',
      renderCall:0,

      personList:[
        
      ],

    }

  }

  _getPerson = async() => {
    const res = await axios.get('/api/person');
    console.log(res);
    
    const personData=res.data.person_res;
    let personObj = null;
    
    console.log("person데이터 길이",personData.length);
    for(var i=0; i<personData.length; i++)
    {
      personObj = new Object();
      personObj.name=personData[i].name;
      personObj.age=personData[i].age;
      personObj.height=personData[i].height;
      console.log(personObj);
      this.setState({personList:this.state.personList.concat(personObj)});
      personObj = null;
    }

  }

  _delPerson=async()=>{
    const res = await axios.get('/api/del_person');
    console.log(res);
  }

  deletePersonInfo=(name)=>{
    alert("정보 삭제(app)"+name);
    const {personList}=this.state;
    this.setState({
      personList:personList.filter(data => data.name != name)
    })
    
    //쿼리도 날려야함
    this._delPerson();

  }

  UpdatePersonInfo=()=>{
    alert("정보 수정(app)");
  }

  dataAllRendering=()=>{

    console.log('dataAllRendering');
    const {personList} = this.state;
    console.log(personList);
    const personRender = personList.map( (data, i) => 
    <Person key={data.name} name={data.name} age={data.age} height={data.height}
    deletePersonInfo={this.deletePersonInfo} UpdatePersonInfo={this.UpdatePersonInfo}
    ></Person> )

    result=personRender;
    console.log(result);
    this.setState({renderCall:this.state.renderCall+1})
  }

  dataFilterRendering=()=>{
    result=null;
    this.render();
    this.setState({renderCall:this.state.renderCall+1})

    console.log('dataFilterRendering');
    const {personList} = this.state;
    console.log(personList);
    const personFiltered = personList.filter( (data) => {
      return data.name === this.state.name;
    });
    console.log(personFiltered);
    const personFilteredRender = personFiltered.map( (data, i) => 
    <Person key={data.name} name={data.name} age={data.age} height={data.height}
    deletePersonInfo={this.deletePersonInfo} UpdatePersonInfo={this.UpdatePersonInfo}>

    </Person> )

    result=personFilteredRender;
    console.log(result);
    this.setState({renderCall:this.state.renderCall+1})
  }

  componentDidMount() {
    this._getPerson();
  }

  nameChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    });
    
  }

  render(){
    console.log('render');
    const {personList} = this.state;
    console.log(personList);
    const personRender = personList.map( (data, i) => 
    <Person key={data.name} name={data.name} age={data.age} height={data.height}
    deletePersonInfo={this.deletePersonInfo} UpdatePersonInfo={this.UpdatePersonInfo}
    ></Person> )

    result=personRender;
    //render에도 갱신 코드를 넣어줘야함
    return(
      <div>
        <input type="text" placeholder="이름 입력" onChange={this.nameChange} name="name"></input>
        <button onClick={this.dataFilterRendering}>검색</button>
        <button onClick={this.dataAllRendering}>모두조회</button>
        {result}

      </div>
    )
  }
}

export default App;