
import { BrowserRouter,Route, Switch, Link } from 'react-router-dom';
import React,{ Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import SignIn from './components/SignIn';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      member:[
        {id:'aaa1234',password:'aaa4321'},
        {id:'bbb1234',password:'bbb4321'},
        {id:'ccc1234',password:'ccc4321'},
      ],
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Link to='/'><button>HOME</button></Link>
        <Link to='/about'><button>ABOUT</button></Link>
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to='/signin'><button>SignIn</button></Link>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
              <Route path='/signin' component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
