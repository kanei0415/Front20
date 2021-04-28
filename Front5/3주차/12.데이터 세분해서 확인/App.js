import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    this._getPerson();
  }

  _getPerson = async() => {
    const res = await axios.get('/api/person');
    console.log(res);
    //this.setState({ person : res.data.person_res })

    for(var i=0; i<=2; i++)
    {
      console.log( "이름:",res.data.person_res[i].name);
      console.log( "나이:",res.data.person_res[i].age);
      console.log( "키:",res.data.person_res[i].height);
    }

  }

  render() {
    return(
      <>
        <h3> {this.state.person} - connected to server</h3>
      </>
    )
  }
}

export default App;