import React, {Component} from "react";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import Pagination from "./components/Pagination";
import Post from "./components/Post";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas : [],

      currentPage : 1,
      dataPerPage : 5,
      lastIndex : 0,
      startIndex : 0,
      postedDatas : [],
    }
  }

  getMovieData = async(movieName) => {
    await axios({
      method : "get",
      url : `/v1/search/movie.json?query='${movieName}'`,
      dataType : "json",
      headers : {
        "X-Naver-Client-Id" : "5OrErS_NDotK04MetdBb",
        "X-Naver-Client-Secret" : "nx2_PqqraC",
      },
    }).then(res => {
        this.state.datas = res.data.items;
    })

    this.setCurrentPage(1);
  }

  setCurrentPage = page => {
    this.state.currentPage = page;
    this.state.lastIndex = page*this.state.dataPerPage;
    this.state.startIndex = this.state.lastIndex-this.state.dataPerPage;

    this.setState({
      postedDatas : this.state.datas.slice(this.state.startIndex,this.state.lastIndex)
    })
  }

  render(){
    return<div className="App">
      <SearchForm getMovieData={this.getMovieData}/>
      <Post postedDatas={this.state.postedDatas} />
      <Pagination postPerPage={this.state.dataPerPage} totalPostNum={this.state.datas.length}
        setCurrentPage={this.setCurrentPage}
      />
    </div>
  }
};

export default App;