import React, { Component } from 'react';
import '../css/SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    console.log('SearchForm constructor');
    super(props);
    this.state={
        car_name:'',
        color:'',
        provider:'',
        input_val:'',
        input_type:'car_name',
    }
  }

  conditionSearch=()=>{
    const{input_val,input_type}=this.state;
    alert("conditionSearch(SearchForm.js)");
    //const{input_val}=this.state;
    alert("input_val(SearchForm):"+input_val)
    this.props.conditionSearch(input_val,input_type);
  }

  allSearch=()=>{
    alert("allSearch(SearchForm.js)");   
    this.props.allSearch();
  }

  hadleChange=(e)=>{
    //alert("handlechange!");
    this.setState({
      [e.target.name]:e.target.value
    })
  } 

  saveValueType=()=>{
    alert("onBlur!");
    
    const {car_name,color,provider}=this.state;
    const {input_type}=this.state;
    if(input_type=='car_name'){
      this.setState(
        {input_val:car_name}
      );
    } else if(input_type=="color"){
      this.setState(
        {input_val:color}
      );
    } else if(input_type=='provider'){
      this.setState(
        {input_val:provider}
      );
    }
  }

  selectChange=(e)=>{
    alert("selectChange");

    alert(e.target.value);

    var field=document.getElementById("input_id");
    field.setAttribute("name", e.target.value);
    
    this.setState(
      {input_type:e.target.value}
    );
  }

  render() {

    return(
      <div>
          <div id="search-form">
          
                <select onChange={this.selectChange}>
                    <option value="car-name">차량명</option>
                    <option value="color">색상</option>
                    <option value="provider">제조사</option>
                </select>

                <input type="text" placeholder="검색어를 입력해주세요" onChange={this.hadleChange} 
                onBlur={this.saveValueType}id="input_id" name="car_name"></input>
                <button onClick={this.conditionSearch} id="con_search">조건검색</button>
                <button onClick={this.allSearch} id="all_search">모두조회</button>
    
          </div>
      </div>
    );
  }
}

export default SearchForm;