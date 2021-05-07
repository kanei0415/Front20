import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      searchText:'',
      movieList:[

      ],
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
          const movie=response.data.items;//옮겨담아서 사용을 편하게 함
          let movie_obj=null;
          for(var i=0; i<movie.length; i++){
            /*
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
            */
            
            movie_obj={
              actor:movie[i].actor,
              director:movie[i].director,
              image:movie[i].image,
              link:movie[i].link,
              pubDate:movie[i].pubDate,
              subtitle:movie[i].subtitle,
              title:movie[i].title,
              userRating:movie[i].userRating
            }

            const {movieList}=this.state;
            this.setState({
              movieList:movieList.concat(movie_obj)
            })
            movie_obj=null;
            
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
    const {movieList}=this.state;
    return (
    <div className="App">
      <MovieList movieList={movieList}></MovieList>
      <input type="text" onChange={this.handleChange} name="searchText"></input>
      <button onClick={this.searchMovie}>검색</button>
    </div>
  );
  }
  
}

export default App;
