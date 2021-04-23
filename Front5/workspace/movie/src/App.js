import React from "react";
import axios from "axios";
import Movie from "./Movie";

import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  }
  
  getMovies = async() => { // async - await -> 실행이 끝날 때까지 스레딩 중지
    const datas = await axios.get("https://yts.mx/api/v2/list_movies.json");
  
    const movies = datas.data.data.movies;

    this.setState({movies : movies});
  }

  componentDidMount(){
    this.getMovies();
  
    this.setState({isLoading : false});
  }

  render() {
    const {isLoading, movies} = this.state;
    
    return <div className="App">
      {
        isLoading
        ? "Loading..."
        : movies.map((movie) => {
          return <Movie
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
            genres = {movie.genres}
          />
        })
      }
    </div>
  };
}

export default App;