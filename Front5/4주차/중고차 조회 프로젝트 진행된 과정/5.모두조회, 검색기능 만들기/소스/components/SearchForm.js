import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    console.log('SearchForm constructor');
    super(props);
    this.state={
        car_name:'',

    }
  }

  conditionSearch=()=>{
    const {car_name}=this.state;
    alert("conditionSearch(SearchForm.js)");
    this.props.conditionSearch(car_name);
  }

  allSearch=()=>{
    alert("allSearch(SearchForm.js)");   
    this.props.allSearch();
  }

  hadleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {

    return(
      <div>
          <div id="search-form">
              <div id="search-type">

                <div id="search-type-tab">

                <select>
                    <option value="car-name">차량명</option>
                    <option value="color">색상</option>
                    <option value="provider">제조사</option>
                </select>

                </div>
                
              </div>
              <div id="input-form">
                <input type="text" placeholder="입력" onChange={this.hadleChange} name="car_name"></input>
                <button onClick={this.conditionSearch}>조건검색</button>
                <button onClick={this.allSearch}>모두조회</button>
              </div>     
          </div>
      </div>
    );
  }
}

export default SearchForm;