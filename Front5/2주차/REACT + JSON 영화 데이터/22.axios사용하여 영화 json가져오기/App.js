import React,{Component} from 'react';
import axios from 'axios';

class App extends Component{

  state={
    isLoading:true,
    movies:[],
  }

  getMovies=()=>{
    const movies = axios.get("https://yts.mx/api/v2/list_movies.json");
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
