import React, { Component } from 'react';
import '../css/Pagenation.css';

class Pagenation extends Component {
  constructor(props) {
    console.log('BasicForm constructor');
    super(props);
    this.state={
        carPerPage:this.props.carPerPage,
        totalCarCount:this.props.totalCarCount,
    }
  }

  checkPerPage=()=>{
    alert("checkPerPage"+this.props.carPerPage);
  }

  checkTotalPage=()=>{
      alert("checkTotalPage"+this.props.totalCarCount);
  }



  render() {

    let pageNumbers=[];
    const {carPerPage,totalCarCount}=this.state;

    for(let i=1; i<= Math.ceil(totalCarCount/carPerPage); i++){
        pageNumbers.push(i);
    }
    //console.log(pageNumbers);

    const pageList = pageNumbers.map(page =>(
        <span className="page" key={page}>
            {page}
        </span>
        )
    );

    return(
      <div>
          <button onClick={this.checkPerPage}>페이지당 갯수 확인</button>
          <button onClick={this.checkTotalPage}>총 갯수 확인</button>
          <br></br>
          {pageList}
      </div>
    );
  }
}

export default Pagenation;