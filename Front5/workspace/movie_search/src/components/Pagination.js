import React, {Component} from "react";

class Pagination extends Component {
  setCurrentPage = (page) => {
    this.props.setCurrentPage(page);
  }

  render(){
    const {totalPostNum, postPerPage} = this.props;

    return<div className="Pagination">
      {
        [...Array(Math.ceil(totalPostNum/postPerPage)+1).keys()].splice(1).map(number => {
          return<button className="pageNumber" key={number} onClick={() => this.setCurrentPage(number)}>
            {number}
          </button>
        })
      }
    </div>
  }
}

export default Pagination;