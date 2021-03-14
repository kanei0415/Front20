import React, { Component } from 'react';
import '../css/Footer.css';
import logo2 from '../images/logo1.png';

class Footer extends Component{
  render(){
    return (
      <footer id="footer">
          <div class="logo">
            <img src={logo2} alt="로고2"></img>
          </div>
          <div class="copyright">
            카피라이트
          </div>
          <div class="family">
            패밀리 사이트
          </div>
      </footer>
    );  
  }; 
}

export default Footer;