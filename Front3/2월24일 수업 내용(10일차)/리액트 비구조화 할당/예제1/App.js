import React, { Component } from 'react';


class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      name:'이민호',
      age:20
   }
  }

  render() { 
    const {name,age} = this.state;
    return( 
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div> 
    ); 
  }
}

export default App;