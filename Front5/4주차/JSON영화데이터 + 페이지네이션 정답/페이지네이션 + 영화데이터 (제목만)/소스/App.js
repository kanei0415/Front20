import './App.css';
import React, { Component } from 'react';
import Pagination from './components/Pagination';
import Posts from './components/Posts';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
            posts:[

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
    this.setState({posts:axios_movies.data.data.movies});
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

  currentPosts=(totalPosts)=> {
    const {currentPage,postsPerPage}=this.state;
    const indexOfLast = currentPage*postsPerPage;
    const indexOfFirst = indexOfLast-postsPerPage;
    const slicePosts = totalPosts.slice(indexOfFirst,indexOfLast);
    return slicePosts;
  }

  render(){

    const{posts,loading,postsPerPage}=this.state;

    return (
    <div className="App">
      <Posts posts={this.currentPosts(posts)} loading={loading}></Posts>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} setCurrentPage={this.setCurrentPage}></Pagination>
    </div>
  );
  }
  
}

export default App;
