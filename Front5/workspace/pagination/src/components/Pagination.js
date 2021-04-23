import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading : this.props.loading,
      posts : this.props.posts,
      totalPosts : this.props.totalPosts,
      postsPerPage : this.props.postsPerPage,
    }
  }

  setCurrentPage(page) {
    this.props.setCurrentPage(page);
  }

  render() {
    let pageNumbers = [];
    const {totalPosts, postsPerPage} = this.state;

    for(let i=1 ; i<=Math.ceil(totalPosts/postsPerPage); i++) {
      pageNumbers.push(i);
    }

    const pageList = pageNumbers.map(page => {
      return <span className="page" key={page} 
      onClick={() => this.setCurrentPage(page)}>
        {page}
      </span>
    })

    return <div className="Pagination">
      <span>페이지당 포스트 갯수 : {postsPerPage}</span> <br />
      <span>총 포스트 갯수 : {totalPosts}</span> <br />
      <div className="pageList">
        {pageList}
      </div>
    </div>
  }
}

export default Pagination;