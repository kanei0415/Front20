import React, { Component } from 'react';
import Number from './Number';

class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      arr1:[10,20,30],
      arr2:[1.1,2.2,3.3],
      arr3:['AAA','BBB','CCC']
   }
  }

  render() { 
    const {arr1} = this.state;
   
    return( 
    <div>
      <Number num={arr1[0]}></Number>
      <Number num={arr1[1]}></Number>
      <Number num={arr1[2]}></Number>
    </div> 
    ); 
  }
}

export default App;