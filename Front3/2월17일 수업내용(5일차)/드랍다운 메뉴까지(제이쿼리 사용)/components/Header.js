import React, { Component } from 'react';
import '../css/Header.css';
import logo1 from '../images/logo1.png';
import $ from 'jquery';

class Header extends Component {

  componentDidMount(){
    var idx=0;

    $(".gnb > li").hover(function(){

        $(".lnb").stop().slideDown(500);
    },function(){
        $(".lnb").stop().slideUp(500);
    });
  }

  render() {
    return (
      <header id="header">
        <div className="logo">
          <img src={logo1} alt="로고1"></img>
        </div>
        <nav className="nav">

        <ul class="gnb">
                        <li>
                            <a href="#">탑</a>
                            <ul class="lnb">
                                <li><a href="#">블라우스</a></li>
                                <li><a href="#">티</a></li>
                                <li><a href="#">셔츠</a></li>
                                <li><a href="#">니트</a></li>
                            </ul>
                        </li>
                        <li><a href="#">아우터</a>
                            <ul class="lnb">
                                <li><a href="#">자켓</a></li>
                                <li><a href="#">코트</a></li>
                                <li><a href="#">가디건</a></li>
                                <li><a href="#">머플러</a></li>
                            </ul>
                        </li>
                        <li><a href="#">팬츠</a>
                            <ul class="lnb">
                                <li><a href="#">청바지</a></li>
                                <li><a href="#">짧은바지</a></li>
                                <li><a href="#">긴바지</a></li>
                                <li><a href="#">레깅스</a></li>
                            </ul>
                        </li>
                        <li><a href="#">악세서리</a>
                            <ul class="lnb">
                                <li><a href="#">귀고리</a></li>
                                <li><a href="#">목걸이</a></li>
                                <li><a href="#">반지</a></li>
                                <li><a href="#">팔찌</a></li>
                            </ul>
                        </li>
                    </ul>

        </nav>
      </header>
    );
  };
}

export default Header;