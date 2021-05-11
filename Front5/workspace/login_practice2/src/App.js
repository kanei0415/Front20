import React, {Component} from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      member : [
        {id : "aaa1234", password : "aaa4321"},
        {id : "bbb1234", password : "bbb4321"},
        {id : "ccc1234", password : "ccc4321"},
      ]
    }
  }

  addMember = (data) => {
    this.state.member.push(data)
    console.log(this.state.member);
  }

  getMember = () => {
    return this.state.member;
  }

  render(){
    return<div className="App">
      <BrowserRouter>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signin"><button>SignIn</button></Link>

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About msg={"Hello World!"} />} />

          <Route path="/login" render={() => <Login getMember={this.getMember} />} />
          <Route path="/signin" render={() => <SignIn addMember={this.addMember} />} />
        </Switch>
      </BrowserRouter>
    </div>
  }
}

export default App;