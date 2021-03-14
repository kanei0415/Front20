import React, { Component } from 'react';


class Post extends Component {
  
  constructor(props)
  {
    super(props);
  }

  render() { 

    return( 
        <div>
            <h1>제목: {this.props.tit}</h1>
            <span>내용: {this.props.cont}</span>
        </div>
    ); 
  }
}

export default Post;