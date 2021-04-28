import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hello : "",
    }
  }

  componentDidMount() {
    this._getHello();
  }

  _getHello = async() => {
    const res = await axios.get("/hello");
    this.setState({hello : res.data.hello});
  }

  render() {
    return<div className="App">
      <h3>{this.state.hello} - connected to server</h3>
    </div>
  }
}

export default App;
