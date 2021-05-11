
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

  signIn=(id,password)=>{
    const {member}=this.state;
    alert("App의 회원가입 함수 호출!");
    alert("넘겨받은 아이디,패스워드"+id+","+password);
    this.setState({
      member:member.concat({id:id,password:password})
    })
  }

  render(){
    const {member}=this.state;

    return (
      <BrowserRouter>
        <Link to='/'><button>HOME</button></Link>
        <Link to='/about'><button>ABOUT</button></Link>
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to='/signin'><button>SignIn</button></Link>
        <Switch>
              <Route exact path='/' 
              render={() => <Home/>}/>

              <Route exact path='/about' 
              render={() => <About msg={"hello"}/>}/>

              <Route exact path='/login' 
              render={() => <Login member={member}/>}/>

              <Route exact path='/signin' 
              render={() => <SignIn signIn={this.signIn}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
