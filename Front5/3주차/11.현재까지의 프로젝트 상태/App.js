import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person : '',
    }
  }

  componentDidMount() {
    this._getPerson();
  }

  _getPerson = async() => {
    const res = await axios.get('/api/person');
    console.log(res);
    this.setState({ person : res.data.person_res })
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