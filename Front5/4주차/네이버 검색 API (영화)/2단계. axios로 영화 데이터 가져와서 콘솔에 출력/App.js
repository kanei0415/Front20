import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state={

    }
  }

  getMovies = async()=>{
    await axios({
      method: 'get',
      url: '/v1/search/movie.json?query="스파이더맨"',
      dataType: 'json',
      headers: {
        "X-Naver-Client-Id": 'FcXHkX_qtl65OMEljDS8',
        "X-Naver-Client-Secret": 'mzPsOA0aVg',
      },
     
    })
    .then(response => 
        { console.log(response);}
    );

  }

  componentDidMount(){
    this.getMovies();
  }

  render(){

    return (
    <div className="App">

    </div>
  );
  }
  
}

export default App;
