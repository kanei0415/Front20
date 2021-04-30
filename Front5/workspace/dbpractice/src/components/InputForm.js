import React, {Component} from "react";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : "",
      age : "",
      height : "",
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmitClick = e => {
    this.props.personAdd({name:this.state.name, age:this.state.age, height:this.state.height});
  }

  render() {
    return<div className="InputForm">
      <hr />
      <input type="text" name="name" onChange={this.handleInputChange} placeholder="Enter the Name"/> <br />
      <input type="text" name="age" onChange={this.handleInputChange} placeholder="Enter the Age"/> <br />
      <input type="text" name="height" onChange={this.handleInputChange} placeholder="Enter the Height"/> <br />
      <button onClick={this.handleSubmitClick}>Submit</button>
      <hr />
    </div>
  }
}

export default InputForm;