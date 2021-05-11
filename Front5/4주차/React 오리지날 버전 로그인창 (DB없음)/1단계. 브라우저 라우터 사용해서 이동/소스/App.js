
import { BrowserRouter,Route, Switch, Link } from 'react-router-dom';
import React,{ Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Link to='/'><a>HOME</a></Link>
        <Link to='/about'><a>ABOUT</a></Link>
        <Link to='/login'><a>LOGIN</a></Link>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
  
}

export default App;
