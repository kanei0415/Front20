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
        { 
          console.log(response.data.items);
          for(var i=0; i<response.data.items.length; i++){
            console.log(i+1,"번째 영화");
            console.log("actor:",response.data.items[i].actor);
            console.log("director:",response.data.items[i].director);
            console.log("image:",response.data.items[i].image);
            console.log("link:",response.data.items[i].link);
            console.log("pubDate:",response.data.items[i].pubDate);
            console.log("subtitle:",response.data.items[i].subtitle);
            console.log("title:",response.data.items[i].title);
            console.log("userRating:",response.data.items[i].userRating);
            console.log("\n");
          }
        }
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
