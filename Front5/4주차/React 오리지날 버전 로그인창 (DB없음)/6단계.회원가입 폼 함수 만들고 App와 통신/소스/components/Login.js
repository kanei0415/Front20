
import React,{ Component } from 'react';

class Login extends Component{

  constructor(props){
    super(props);
    this.state={
      id:'',
      password:''
    }
  }

  getMember=()=>{
    console.log("넘겨받은 props:",this.props.member);
    console.log("사용자가 입력한 아이디",this.state.id);
    console.log("사용자가 입력한 비밀번호",this.state.password);
  }

  loginCheck=()=>{
      const member=this.props.member;
      const {id,password}=this.state;
      for(var i=0; i<member.length; i++){
        if(id==member[i].id){
          alert("아이디 일치!");
          if(password==member[i].id){
          alert("패스워드 일치!");    
          }
        }
      }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
   
  }

  render(){
    return (
    <div>
        <form>
          <input type="text" placeholder="아이디 입력" onChange={this.handleChange} name="id"></input><br/>
          <input type="password" placeholder="비밀번호 입력" onChange={this.handleChange} name="password"></input><br/>
          <input type="button" onClick={this.loginCheck} value="로그인"/>
          <input type="button" onClick={this.getMember} value="데이터 확인"/>
        </form>
    </div>  
    );
  }
}

export default Login;
