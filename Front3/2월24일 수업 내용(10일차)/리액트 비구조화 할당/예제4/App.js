import React, { Component } from 'react';


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
    const {arr1,arr2,arr4} = this.state;
    return( 
    <div>
      <div>{arr1}</div>
      <div>{arr2}</div>
      <div>{arr4}</div>
    </div> 
    ); 
  }
}

export default App;