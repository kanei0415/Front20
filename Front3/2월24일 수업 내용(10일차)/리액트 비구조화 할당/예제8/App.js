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
    let result = arr1.map((num) => {return num*num});

    return( 
    <div>
      <Number num={result[0]}></Number>
      <Number num={result[1]}></Number>
      <Number num={result[2]}></Number>
    </div> 
    ); 
  }
}

export default App;