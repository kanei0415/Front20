import React from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts : [
        {id:1, title:"Post1"},
        {id:2, title:"Post2"},
        {id:3, title:"Post3"},
        {id:4, title:"Post4"},
        {id:5, title:"Post5"},
        {id:6, title:"Post6"},
        {id:7, title:"Post7"},
        {id:8, title:"Post8"},
        {id:9, title:"Post9"},
      ],
      loading : false,
      currentPage : 1,
      postsPerPage : 2,
    }
  }

  componentDidMount(){

  }

  setCurrentPage = (page) => {
    alert("setCurrentPageApp : " + page);

    this.setState({
      currentPage : page
    })
  }

  getCurrntPosts = (totalPosts) => {
    const{currentPage, postsPerPage} = this.state;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    return totalPosts.slice(indexOfFirst,indexOfLast);
  }

  render() {
    const {posts, loading, postsPerPage} = this.state;

    return<div className="App">
      <Posts 
      posts={this.getCurrntPosts(posts)} 
      loading={loading} 
      />

      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      setCurrentPage={this.setCurrentPage}
      />
    </div>
  }
}

export default App;