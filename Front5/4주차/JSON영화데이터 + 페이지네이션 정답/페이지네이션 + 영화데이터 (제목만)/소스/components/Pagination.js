
import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            posts:this.props.posts,
            totalPosts:this.props.totalPosts,
            postsPerPage:this.props.postsPerPage,
        }
    }

    setCurrentPage=(page)=>{
        alert(page);
        this.props.setCurrentPage(page);
    }

    render(){
        let pageNumbers = [];
        const {totalPosts,postsPerPage}=this.props;
        console.log("pn:"+totalPosts);
        console.log("pn:"+postsPerPage);
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
    <div className="Pagination">
        <span>페이지당 포스트 갯수:{this.props.postsPerPage}</span><br/>
        <span>총 포스트 갯수:{this.props.totalPosts}</span><br/>
        <div>
        {pageList}
        </div>
    </div>
        );
    }
  
}

export default Pagination;
