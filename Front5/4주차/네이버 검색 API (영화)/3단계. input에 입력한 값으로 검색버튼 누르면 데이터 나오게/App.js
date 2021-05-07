import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      searchText:''
    }
  }

  getMovies = async()=>{
    await axios({
      method: 'get',
      url: '/v1/search/movie.json?query='+this.state.searchText,
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
    //this.getMovies();
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  searchMovie=()=>{
    this.getMovies();
  }

  render(){

    return (
    <div className="App">
      <input type="text" onChange={this.handleChange} name="searchText"></input>
      <button onClick={this.searchMovie}>검색</button>
    </div>
  );
  }
  
}

export default App;
