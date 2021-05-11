import React, {Component} from "react";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pwChecked : false,
      id : "",
      pw : "",
      pwCheck : "",
      name : "",
    }
  }

  checkPW = () => {
    return this.state.pw == this.state.pwCheck;
  }

  addMember = () => {
    if(this.checkPW()) {
      this.props.addMember({id : this.state.id, password : this.state.pw})
    } else {
      alert("Password is not Same!");
    }
  }

  render(){
    return<div className="SignIn">
      <input type="text" placeholder="Enter the ID" name="id" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <input type="password" placeholder="Enter the PW" name="pw" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <input type="password" placeholder="Enter the PW again" name="pwCheck" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <input type="text" placeholder="Enter the name" name="name" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <button onClick={this.addMember}>SignIn</button>
    </div>
  }
}

export default SignIn;