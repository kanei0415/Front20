import React, { Component } from 'react';


class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      arr1 : ["KIM","LEE","PARK"],
      arr2 : ["APPLE","BANANA","KIWI"]
   }
  }

  render() { 
    const {arr1,arr2} = this.state;
    return( 
    <div>
      <div>{arr1}</div>
      <div>{arr2}</div>
    </div> 
    ); 
  }
}

export default App;