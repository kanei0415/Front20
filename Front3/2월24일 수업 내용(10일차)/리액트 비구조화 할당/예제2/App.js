import React, { Component } from 'react';


class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      arr:[10,20,30]
   }
  }

  render() { 
    const {arr} = this.state;
    return( 
    <div>
      <div>{arr}</div>
    </div> 
    ); 
  }
}

export default App;