import React, { Component } from 'react';
import '../css/PopUp.css';

class PopUp extends Component {
  constructor(props) {
    console.log('PopUp constructor');
    super(props);

    this.state = {
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

  closePopUp=()=>{
    alert("closePopUp!");
    this.props.closePopUp();
  }

  render() {
    const {id,car_name,provider,color,produce_date
        ,receiving_date,price,accident,displacement,distance_driven
        ,fuel,transmission}=this.state;
    return(
      <div id="popup">
        팝업창
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
        <button onClick={this.closePopUp}>닫기</button>
      </div>
    );
  }
}

export default PopUp;