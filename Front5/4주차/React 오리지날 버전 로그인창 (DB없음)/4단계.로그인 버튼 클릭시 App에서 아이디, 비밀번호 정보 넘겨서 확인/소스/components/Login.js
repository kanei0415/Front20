
import React,{ Component } from 'react';

class Login extends Component{

  constructor(props){
    super(props);
  }

  getMember=()=>{
    console.log(this.props.member);
  }

  render(){
    return (
    <div>
        <form>
          <input type="text" placeholder="아이디 입력"></input><br/>
          <input type="password" placeholder="비밀번호 입력"></input><br/>
          <input type="button" onClick={this.getMember} value="로그인"/>
        </form>
    </div>  
    );
  }
}

export default Login;
