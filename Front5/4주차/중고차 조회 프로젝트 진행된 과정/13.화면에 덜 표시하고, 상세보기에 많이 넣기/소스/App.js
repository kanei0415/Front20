import React, { Component } from 'react';
import axios from 'axios';
import Car from './components/Car.js';
import InputForm from './components/InputForm.js';
import SearchForm from './components/SearchForm.js';

let global_render;

class App extends Component {
  constructor(props) {
    console.log('App constructor');
    super(props);
    this.state = {
      renderCall:0,
      carList:[

      ]
    }
  }

  _getCarInfo = async() => {
    const res = await axios.get('/api/getCarInfo');
    console.log(res);

    const car_data=res.data.car_res;
    console.log("car데이터 길이",car_data.length);

    let carObj = null;

    for(var i=0; i<car_data.length; i++)
    {
      carObj = new Object();
      carObj.id=car_data[i].id;
      carObj.car_name=car_data[i].car_name;
      carObj.provider=car_data[i].provider;
      carObj.color=car_data[i].color;
      
      var full_date=null;
      var produce_date = new Date(car_data[i].produce_date);
      full_date=produce_date.getFullYear()+"년 "+(produce_date.getMonth()+1)+"월 "+produce_date.getDay()+"일";
      carObj.produce_date=full_date;
      
      var receiving_date = new Date(car_data[i].receiving_date);
      full_date=receiving_date.getFullYear()+"년 "+(receiving_date.getMonth()+1)+"월 "+receiving_date.getDay()+"일";
      carObj.receiving_date=full_date;

      carObj.price=car_data[i].price;
      carObj.accident=car_data[i].accident;
      carObj.displacement=car_data[i].displacement;
      carObj.distance_driven=car_data[i].distance_driven;
      carObj.fuel=car_data[i].fuel;
      carObj.transmission=car_data[i].transmission;
      this.setState({carList:this.state.carList.concat(carObj)});
      carObj = null;
    }
  }

  componentDidMount() {
    this._getCarInfo();
  }

  conditionSearch=(input_val,input_type)=>{
    alert("conditionSearch(App.js)");
    alert("input_val(App):"+input_val);
    alert("input_type(App):"+input_type);

    const {carList} = this.state;
    let carFiltered=null;

    if(input_type=='car_name'){
      carFiltered = carList.filter( (data) => {
        return data.car_name === input_val;
      });
    } else if(input_type=='color'){
      carFiltered = carList.filter( (data) => {
        return data.color === input_val;
      });
    } else if(input_type=='provider'){
      carFiltered = carList.filter( (data) => {
        return data.provider === input_val;
      });
    }

    console.log(carFiltered);
    global_render = carFiltered.map( (data, i) => 
    <Car key={data.id} id={data.id} car_name={data.car_name}
    provider={data.provider}  color={data.color} produce_date={data.produce_date}
    receiving_date={data.receiving_date} price={data.price} accident={data.accident} 
    displacement={data.displacement} distance_driven={data.distance_driven} fuel={data.fuel} 
    transmission={data.transmission} 
    ></Car> )
    console.log(global_render);
  
    this.setState({renderCall:this.state.renderCall++});
  }

  allSearch=()=>{
    alert("allSearch(App.js)");   
    const {carList} = this.state;
    global_render = carList.map( (data, i) => 
    <Car key={data.id} id={data.id} car_name={data.car_name}
    provider={data.provider}  color={data.color} produce_date={data.produce_date}
    receiving_date={data.receiving_date} price={data.price} accident={data.accident} 
    displacement={data.displacement} distance_driven={data.distance_driven} fuel={data.fuel} 
    transmission={data.transmission} 
    ></Car> )
    console.log(global_render);

    this.setState({renderCall:this.state.renderCall++});
  }

  render() {
    /*
    const {carList} = this.state;

    global_render = carList.map( (data, i) => 
    <Car key={data.id} id={data.id} car_name={data.car_name}
    provider={data.provider}  color={data.color} produce_date={data.produce_date}
    receiving_date={data.receiving_date} price={data.price} accident={data.accident} 
    displacement={data.displacement} distance_driven={data.distance_driven} fuel={data.fuel} 
    transmission={data.transmission} 
    ></Car> )
    */
    
    return(
      <div id="car_components">
        
        <InputForm></InputForm>
        <SearchForm 
        conditionSearch={this.conditionSearch}
        allSearch={this.allSearch}>

        </SearchForm>
        {global_render}
      </div>
    );
  }
}

export default App;