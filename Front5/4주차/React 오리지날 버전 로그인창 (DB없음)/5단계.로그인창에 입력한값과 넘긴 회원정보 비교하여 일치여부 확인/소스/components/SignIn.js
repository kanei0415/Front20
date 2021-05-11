
import React,{ Component } from 'react';

class SignIn extends Component{
  render(){
    return (
    <div>
        <form>
          <input type="text" placeholder="아이디 입력"></input><br/>
          <input type="password" placeholder="비밀번호 입력"></input><br/>
          <input type="password" placeholder="비밀번호 확인"></input><br/>
          <input type="text" placeholder="이름 입력"></input><br/>
          <button>회원가입</button>
        </form>
    </div>  
    );
  }
}

export default SignIn;
