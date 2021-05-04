
import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieLen:this.props.movieLen,
            postsPerPage:this.props.postsPerPage,
        }
    }

    setCurrentPage=(page)=>{
        alert(page);
        this.props.setCurrentPage(page);
    }

    render(){
        let pageNumbers = [];
        const {movieLen,postsPerPage}=this.props;
        console.log("pn:"+movieLen);
        console.log("pn:"+postsPerPage);
        for (let i = 1; i <= Math.ceil(movieLen / postsPerPage); i++) {
        pageNumbers.push(i);
        }
        console.log(pageNumbers);

        const pageList=pageNumbers.map(page=>(
        <span class="page" onClick={()=>this.setCurrentPage(page)}>
            {page}
        </span>
            )
        );

        return (
    <div id="Pagination">
        <span>페이지당 포스트 갯수:{this.props.postsPerPage}</span><br/>
        <span>총 포스트 갯수:{this.props.movieLen}</span><br/>
        <div id="page_list">
        {pageList}
        </div>
    </div>
        );
    }
  
}

export default Pagination;
