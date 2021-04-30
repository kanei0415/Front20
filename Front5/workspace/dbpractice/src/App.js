import React, { Component } from 'react';
import axios from 'axios';
import Person from './components/Person';
import InputForm from "./components/InputForm";

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      renderCall : 0,
      personList : [],
      name : "",
      personRender : [],
    }
  }

  makePersonComponent = (person, id) => {
    return <Person key={id} id={id} name={person.name} age={person.age} height={person.height} 
      personDelete={this.personDelete} personUpdate={this.personUpdate}/>
  }

  _getPerson = async() => {
    const res = await axios.get('/api/person');
    const personData=res.data.person_res;
    
    for(let pd of personData)
    {
      this.setState({personList : this.state.personList.concat({
        name : pd.name,
        age : pd.age,
        height : pd.height
      })});
    }

    this.setState({
      personRender : this.state.personList.map((person, id) => {return this.makePersonComponent(person, id)})
    });
  }

  componentDidMount() {
    this._getPerson();
  }

  handleSearchNameChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSearchButtonClick = e => {
    const serchList = this.state.personList.filter(person => person.name === this.state.name)

    const personRender = serchList.map((person, id) => {
      return this.makePersonComponent(person, id)
    });

    this.state.personRender = personRender;

    this.setState({renderCall : this.state.renderCall+1});
  }

  handleShowAllButtonClick = e => {
    this.setState({
      personRender : this.state.personList.map((person, id) => {return this.makePersonComponent(person, id)})
    });
  }

  personDelete = async(name) => {
    this.state.personList = this.state.personList.filter(person => person.name !== name);
    this.setState({
      personRender : this.state.personList.map((person, id) => {return this.makePersonComponent(person, id)})
    });

    axios.delete('/api/del_person/' + name);
  }

  personUpdate = async(id, name, age, height) => {
    this.state.personList.splice(id, 1, {
      name : name,
      age : age,
      height : height
    });

    this.setState({personRender : this.state.personList.map((person, id) => {return this.makePersonComponent(person, id)})});
    await axios.put('/api/update_person/'+name+"&"+age+"&"+height);
  }

  personAdd = async(person) => {
    this.state.personList.push(person);
    this.setState({personRender : this.state.personList.map((person, id) => {return this.makePersonComponent(person, id)})});
    await axios.put('/api/add_person/'+person.name+"&"+person.age+"&"+person.height);
  }

  render(){
    return <div className="App">
      <InputForm personAdd={this.personAdd}/>
      <input type="text" placeholder="Enter the Name" name="name" onChange={this.handleSearchNameChange} />
      <button onClick={this.handleSearchButtonClick}>Search</button>
      <button onClick={this.handleShowAllButtonClick}>Show All</button>
        {this.state.personRender}
      </div>
  }
}

export default App;