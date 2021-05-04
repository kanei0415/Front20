import React, { Component } from 'react';
import '../css/PopUp.css';
import ImageComp from './ImageComp.js';

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
        <div><ImageComp id={id}></ImageComp></div>
        <div><span>아이디:{id}</span></div>
        <div><span>차량명:{car_name}</span></div>
        <div><span>제조사:{provider}</span></div>
        <div><span>색깔:{color}</span></div>
        <div><span>제조일:{produce_date}</span></div>
        <div><span>입고일:{receiving_date}</span></div>
        <div><span>가격:{price}</span></div>
        <div><span>사고유무:{accident}</span></div>
        <div><span>배기량:{displacement}</span></div>
        <div><span>주행거리:{distance_driven}</span></div>
        <div><span>연료:{fuel}</span></div>
        <div><span>변속기:{transmission}</span></div>
        <button onClick={this.closePopUp}>닫기</button>
      </div>
    );
  }
}

export default PopUp;