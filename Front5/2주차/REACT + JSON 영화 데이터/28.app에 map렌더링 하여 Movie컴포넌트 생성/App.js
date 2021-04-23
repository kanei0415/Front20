import React,{Component} from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends Component{

  state={
    isLoading:true,
    movies:[],
  }

  getMovies= async()=>{
    const axios_movies = await axios.get("https://yts.mx/api/v2/list_movies.json");

    this.setState({movies:axios_movies.data.data.movies});
    this.setState({isLoading:false})
    ;
    for(var i=0;  i<this.state.movies.length; i++)
    { 
      console.log(this.state.movies[i].id);
      console.log(this.state.movies[i].url);
      console.log(this.state.movies[i].imdb_code);
      console.log(this.state.movies[i].title);
      console.log(this.state.movies[i].title_english);
    }

  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading,movies}=this.state;
    return <div>{isLoading? 'Loading...':movies.map((movie)=>{
      return <Movie 
              id={movie.id} 
              year={movie.year}
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}/>
    })}</div>
  }

}

export default App;
