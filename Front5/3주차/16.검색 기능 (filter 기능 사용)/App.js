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

  dataAllRendering=()=>{

    console.log('dataAllRendering');
    const {personList} = this.state;
    console.log(personList);
    const personRender = personList.map( (data, i) => 
    <Person key={i} name={data.name} age={data.age} height={data.height}></Person> )

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
    <Person key={i} name={data.name} age={data.age} height={data.height}></Person> )

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