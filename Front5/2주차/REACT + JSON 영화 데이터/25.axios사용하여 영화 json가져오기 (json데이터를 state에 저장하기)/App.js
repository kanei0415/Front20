import React,{Component} from 'react';
import axios from 'axios';

class App extends Component{

  state={
    isLoading:true,
    movies:[],
  }

  getMovies= async()=>{
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");

    console.log(movies);

    this.setState(movies.data.data);

    console.log(this.state.movies);
    //console.log(movies.data.data.movies[i].id);
    //console.log(movies.data.data.movies[i].url);
    //console.log(movies.data.data.movies[i].imdb_code);
    //console.log(movies.data.data.movies[i].title);
    //console.log(movies.data.data.movies[i].title_english);
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading}=this.state;
    return <div>{isLoading? 'Loading...':'We are ready'}</div>
  }

}

export default App;
