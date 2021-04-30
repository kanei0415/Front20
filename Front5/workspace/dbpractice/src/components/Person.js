import React, {Component} from "react";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modifyMode : false,
      name : this.props.name,
      age : "",
      height : "",
    }
  }

  handleDeleteClick = e => {
    this.props.personDelete(this.props.name)
  }

  handleModifyClick = e => {
    if(this.state.modifyMode == true) {
      this.props.personUpdate(this.props.id, this.state.name, this.state.age, this.state.height);
    }

    this.setState({modifyMode : !this.state.modifyMode});
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    const {name, age, height} = this.props;
    return<div className="Person">
      <hr />
      Name : {this.state.modifyMode
      ? <input type="text" name="name" onChange={this.handleInputChange} value={this.props.name}/>
      :name} <br />
      Age : {this.state.modifyMode
      ? <input type="text" name="age" onChange={this.handleInputChange}/>
      :age} <br />
      Height : {this.state.modifyMode
      ? <input type="text" name="height" onChange={this.handleInputChange}/>
      :height} <br />
      <button onClick={this.handleDeleteClick}>Delete</button>
      <button onClick={this.handleModifyClick}>Modify</button>
      <hr />
    </div>
  }
}

export default Person;