import './App.css';
import React, { Component } from 'react';
import Pagination from './components/Pagination';
import MovieList from './components/MovieList';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
            movieList:[

            ],
            loading:false,
            currentPage:1,
            postsPerPage:3
        }
  }

  getMovies = async()=>{
    const axios_movies 
    = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(axios_movies);
    this.setState({movieList:axios_movies.data.data.movies});
  }

  componentDidMount(){
    this.getMovies();
  }

  setCurrentPage=(page)=>{
    alert(page);
    this.setState({
      currentPage:page
    })
  }

  currentPosts=(movieList)=> {
    const {currentPage,postsPerPage}=this.state;
    const indexOfLast = currentPage*postsPerPage;
    const indexOfFirst = indexOfLast-postsPerPage;
    const slicePosts = movieList.slice(indexOfFirst,indexOfLast);
    return slicePosts;
  }

  render(){

    const{movieList,loading,postsPerPage}=this.state;

    return (
    <div className="App">
      <MovieList movieList={this.currentPosts(movieList)} loading={loading}></MovieList>
      <Pagination postsPerPage={postsPerPage} movieLen={movieList.length} 
      setCurrentPage={this.setCurrentPage}></Pagination>
    </div>
  );
  }
  
}

export default App;
