import React, {Component} from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked : false,
      id : "",
      pw : "",
    }
  }

  checkMember = () => {
    for(let m of this.props.getMember()) {
      if(m.id === this.state.id && m.password === this.state.pw)
        this.state.checked = true;
    }

    if(this.state.checked) {
      alert("Hello User!")
    } else {
      alert("Login Failed!")
    }
  }

  render(){
    return<div className="Login">
      <input type="text" placeholder="Enter the ID" name="id" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <input type="password" placeholder="Enter the PW" name="pw" onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} /> <br />
      <button onClick={this.checkMember}>Login</button>
    </div>
  }
}

export default Login;