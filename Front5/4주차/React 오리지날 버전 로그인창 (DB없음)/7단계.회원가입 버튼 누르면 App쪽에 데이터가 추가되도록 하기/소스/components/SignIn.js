
import React,{ Component } from 'react';

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={
          id:'',
          password:'',
          password_check:'',
          name:'',
        }
    }  

    signIn=()=>{
        const {id,password}=this.state;
        alert("Signin의 회원가입 함수 호출!");
        this.props.signIn(id,password);
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
        <input type="text" placeholder="아이디 입력" 
        onChange={this.handleChange} name="id"></input><br/>

          <input type="password" placeholder="비밀번호 입력" 
          onChange={this.handleChange} name="password"></input><br/>

          <input type="password" placeholder="비밀번호 확인" 
          onChange={this.handleChange} name="password_check"></input><br/>
          
          <input type="text" placeholder="이름 입력" 
          onChange={this.handleChange} name="name"></input><br/>
          <input type="button" onClick={this.signIn} value="회원가입"/>
        </form>
    </div>  
    );
  }
}

export default SignIn;
