import React, { Component } from 'react';
import axios from 'axios';
import Person from './components/Person.js';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      renderCall:0,

      personList:[
        {name:"이민호",age:20,height:176.5}
        
      ],
      personList2:[
        {name:"이민호",age:20,height:176.5}
      ]
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

  componentDidMount() {
    this._getPerson();
  }

  handleClick=()=>{
    alert("클릭!");
  }

  render(){
    console.log('render');

    return(
      <div>
        <button onClick={this.dataRendering}>클릭</button>


      </div>
    )
  }
}

export default App;