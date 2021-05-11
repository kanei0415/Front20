
import React,{ Component } from 'react';

class Login extends Component{
  render(){
    return (
    <div>
        <form>
          <input type="text" placeholder="아이디 입력"></input><br/>
          <input type="password" placeholder="비밀번호 입력"></input><br/>
          <button>로그인</button>
        </form>
    </div>  
    );
  }
}

export default Login;
