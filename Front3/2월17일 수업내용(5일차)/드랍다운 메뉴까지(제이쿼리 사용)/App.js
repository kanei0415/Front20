import React, { Component } from 'react';
import Header from './components/Header';
import Slide from './components/Slide';
import Contents from './components/Contents';
import Footer from './components/Footer';
import './App.css';

class App extends Component{
  render(){
    return (
      <div id="wrap">
        <Header></Header>
        <Slide></Slide>
        <Contents></Contents>
        <Footer></Footer>
      </div>
    );  
  }; 
}

export default App;
