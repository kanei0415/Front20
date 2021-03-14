import React, { Component } from 'react';


class Number extends Component {
  
  constructor(props)
  {
    super(props);
  }

  render() { 

    return( 
        <div>숫자 {this.props.num} 입니다.</div>
    ); 
  }
}

export default Number;