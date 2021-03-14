import React, { Component } from 'react';
import Post from './Post';

class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
     Posting:[
       {title:"제목1",
        contents:"내용1"},

        {title:"제목2",
        contents:"내용2"}
     ] 
   }
  }

  render() { 
    const {title, contents} = this.state.Posting[0];
    return( 
    <div>
      <Post tit={title} cont={contents}></Post>
    </div> 
    ); 
  }
}

export default App;