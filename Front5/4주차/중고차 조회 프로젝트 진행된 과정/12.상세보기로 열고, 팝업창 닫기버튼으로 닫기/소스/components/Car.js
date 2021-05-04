import React, { Component } from 'react';
import '../css/Car.css';
import PopUp from './PopUp.js';

class Car extends Component {
  constructor(props) {
    console.log('Car constructor');
    super(props);
    this.state = {
      popup_open:false,
      id:this.props.id,
      car_name:this.props.car_name,
      provider:this.props.provider,
      color:this.props.color,
      produce_date:this.props.produce_date,
      receiving_date:this.props.receiving_date,
      price:this.props.price,
      accident:this.props.accident,
      displacement:this.props.displacement,
      distance_driven:this.props.distance_driven,
      fuel:this.props.fuel,
      transmission:this.props.transmission,
    }
  }

  seeDetail=()=>{

    this.setState({
      popup_open:true
    })
  }

  closePopUp=()=>{
    this.setState({
      popup_open:false
    })
  }

  render() {
    const {popup_open,id,car_name,provider,color,produce_date
    ,receiving_date,price,accident,displacement,distance_driven
    ,fuel,transmission}=this.state;
    return(
      <div id="car_component">
        <div>{id}</div>
        <div>{car_name}</div>
        <div>{provider}</div>
        <div>{color}</div>
        <div>{produce_date}</div>
        <div>{receiving_date}</div>
        <div>{price}</div>
        <div>{accident}</div>
        <div>{displacement}</div>
        <div>{distance_driven}</div>
        <div>{fuel}</div>
        <div>{transmission}</div>
        <button onClick={this.seeDetail}>상세보기</button>
        {
          popup_open==true? <PopUp closePopUp={this.closePopUp}></PopUp>:null
        }
        
      </div>
    );
  }
}

export default Car;