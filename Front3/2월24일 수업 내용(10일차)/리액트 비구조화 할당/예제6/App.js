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
    const {arr1} = this.state;
    var result = arr1.map((num) => {return num*num+" "});
    return( 
    <div>
      <div>{result}</div>
    </div> 
    ); 
  }
}

export default App;