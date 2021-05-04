import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    console.log('SearchForm constructor');
    super(props);
    this.state={
        car_name:'',
        color:'',
        provider:'',
        input_val:'',
        input_type:'',
    }
  }

  conditionSearch=()=>{
    
    const {car_name,color,provider}=this.state;
    const {input_type}=this.state;
    if(input_type=='car_name'){
      this.setState(
        {input_val:car_name},()=>console.log("callback:",this.state.input_val)
      );
    } else if(input_type=="color"){
      this.setState(
        {input_val:color},()=>console.log("callback:",this.state.input_val)
      );
    } else if(input_type=='provider'){
      this.setState(
        {input_val:provider},()=>console.log("callback:",this.state.input_val)
      );
    }

    alert("conditionSearch(SearchForm.js)");
    //const{input_val}=this.state;
    alert("input_val(SearchForm):"+this.state.input_val)
    this.props.conditionSearch(this.state.input_val,this.state.input_type);
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
              <div id="search-type">

                <div id="search-type-tab">

                <select onChange={this.selectChange}>
                    <option value="car-name">차량명</option>
                    <option value="color">색상</option>
                    <option value="provider">제조사</option>
                </select>

                </div>
                
              </div>
              <div id="input-form">
                <input type="text" placeholder="입력" onChange={this.hadleChange} id="input_id" name="car_name"></input>
                <button onClick={this.conditionSearch}>조건검색</button>
                <button onClick={this.allSearch}>모두조회</button>
              </div>     
          </div>
      </div>
    );
  }
}

export default SearchForm;